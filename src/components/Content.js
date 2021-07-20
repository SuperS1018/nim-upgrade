import React, { Component, Fragment } from 'react'
import Marked from 'react-markdown'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { googleAnalyticsEvent } from '../util/ga'
import { isCMS } from '../util/misc'
import Podcast from '../components/Podcast'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons/faSearchPlus'
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons/faSearchMinus'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons/faSyncAlt'
import HighLight from 'react-highlight.js'
import GifPlayer from 'react-gif-player'
import TweetEmbed from 'react-tweet-embed'
import remarkSubSuper from 'remark-sub-super'
import _ from 'lodash'
import Pdf from '@mikecousins/react-pdf'

import { getImageSrc, getImageSrcset } from '../util/getImageUrl'
import { slugifyAnchor } from '../util/url'

import 'react-gif-player/dist/gifplayer.css'
import '../stylesheets/components/Content.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      copied: false,
      pdfPageNumber: 1,
      pdfScale: 1,
      pdfRotate: 0
    }
  }

  _flatten = (text, child) => {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(this._flatten, text)
  }

  encodeMarkdownURIs = (source = '') => {
    const markdownLinkRegex = /\[(?:\[[^\]]*\]|[^[\]])*\]\([ \t]*<?((?:\([^)]*\)|[^()])*?)>?[ \t]*(['"].*?\6[ \t]*)?\)/g
    return source.replace(markdownLinkRegex, (match, linkURI) => {
      if (!linkURI) return match
      const replaced = match.replace(linkURI, encodeURI(linkURI))
      return replaced
    })
  }

  ImageWithSrcset = ({ nodeKey, src, alt, ...props }) => {
    const decodedSrc = decodeURI(src)
    const r = /"(.*)"+$/g
    if(r.test(decodedSrc)) {
      const src = decodedSrc.split(r)[0].trim()
      const cls = decodedSrc.match(r)[0].replace(/"/g, '').replace(/\./g, ' ')

      if(/animated-image/.test(cls)) {
        const w = cls.match(/animated-image (.*)/)
        console.info('Deprecated animated gif', src)
        return (
          <div className={`Content--Image ${w ? w[1] : ''}`}>
            <GifPlayer gif={src} />
          </div>
        )
      } else {
        console.info('Deprecated image with class', src)
        return (
          <img
            className={`Content--Image ${cls}`}
            {...props}
            src={getImageSrc(src)}
            srcSet={getImageSrcset(src)}
            alt={alt}
          />
        )
      }
    }
    return (
      <img
        className='Content--Image'
        {...props}
        src={getImageSrc(decodedSrc)}
        srcSet={getImageSrcset(decodedSrc)}
        alt={alt}
      />
    )
  }

  RootContainer = ({ ...props }) => {
    const { className, children } = props
    return (
      <div
        className={className}
        id={this.props.id}
      >{children}</div>
    )
  }

  HtmlBlock = ({ value }) => {
    if (/<iframe/i.test(value)) {
      return (
        <div
          className={`Content--Iframe`}
          dangerouslySetInnerHTML={{
            __html: value
          }}
        />
      )
    }
    if (/<br>/i.test(value)) {
      return '\n'
    }
    return value
  }

  _capitalizePath = a => {
    let s = ''
    a.forEach((i, index) => {
      s += `${i.charAt(0).toUpperCase()}${i.slice(1)}${index !== a.length - 1 && a.length !== 1 ? '/' : ''}`
    })
    return s
  }

  handleCopied = () => {
    this.setState({copied: true})
    let tmr = setTimeout(() => {
      this.setState({copied: false})
      clearTimeout(tmr)
    }, 1000)
  }

  BlockquoteRenderer ({ ...props }) {
    const time = new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true})
    try {
      if(props.children && props.children.length && props.children[0].key.indexOf('heading') !== -1) {
        return (<div className='Content--Slack'>{
          props.children.map((i, index) => {
            if(i.props.level === 5) { // H5 tag inside a blockquote tag and convert to Slack User element
              // console.log(i.props.children)
              let s = ''
              i.props.children.forEach(i => {
                if(/^text/.test(i.key) || /^html/.test(i.key)) {
                  s += i.props.value
                }
                if(/^link/.test(i.key)) {
                  s += i.props.href
                }
                if(!/^text/.test(i.key) && !/^link/.test(i.key) && !/^html/.test(i.key)) {
                  console.log('Warning! unexpected vale and may cause the vale missing.', i)
                }
              })
              return <div className='slack slack-user' key={ `slack-user${index}` }>
                <img src='/images/slack-user.jpg' alt="Commander User" />
                <div className='text'>
                  <span className='name'>User</span> <span className='time'>{time}</span><br />
                  <span className='d-block line' key={i + index}>{i.props.children}&nbsp;
                    <CopyToClipboard text={s} onCopy={() => this.handleCopied()}><span className='copy-to-clipboard-btn'><FontAwesomeIcon icon={faCopy}/></span></CopyToClipboard>
                </span>
                </div>
              </div>
            }
            if(i.props.level === 6) { // H6 tag inside a blockquote tag and convert to Slack Commander element
              // console.log(i.props.children[0].props.value)
              return <div className='slack slack-admin' key={ `slack-admin${index}` }>
                <img src='/images/slack-admin.png' alt="Commander Admin" />
                <div className='text'>
                  <span className='name'>Commander</span> <span className='app'>App</span> <span className='time'>{time}</span><br />
                  <p className='result'>{i.props.children}</p>
                </div>
              </div>
            }
            if(i.props.level !== 5 && i.props.level !== 6) {
              console.log('Header inside blockquote is not h5 nor h6', i)
            }
            return <blockquote>{ props.children }</blockquote>
          })
        }</div>)
      }
    } catch (err) { console.log(err)}


    // To add classname to specific content - /docs/commander/reference#task-schedule
    if(_.includes(_.map(props.children, i => _.get(i, 'props.children[0].props.value', 'false')), '|')) {
      return <blockquote className='schedule'>{ props.children }</blockquote>
    }

    return <blockquote>{ props.children }</blockquote>
  }

  LinkRenderer = ({ ...props }) => {
    const { noPageJump, noExternal } = this.props
    const { href, children } = props
    const pathname = window.location.pathname.split('/').filter(i => i !== '')

    const c = React.Children.toArray(children)
    const text = c.reduce(this._flatten, '')

    if(/^http(|s):\/\/nimbella\.com(.*)\/$/i.test(href) || /^\/(.*)\/$/i.test(href)) {
      console.log('*** the link is ended with a "/"', href)
    }

    // if(/resources/ig.test(href)) {
    //   console.log('resources: ', href)
    // }
    //
    // if(/docs/ig.test(href)) {
    //   console.log('docs: ', href)
    // }

    if(noPageJump) {
      if(/nimbella\.com|resources-commander|resources\/commander|docs\/commander/i.test(href)) {
        return <span>{children}</span>
      }
    }

    if (/^http/g.test(href)) {
      // external link
      if(noExternal) {
        return <span>{children}</span>
      }
      return <a href={href} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, this._capitalizePath(pathname), text)}>{children}</a>
    }

    // mailto link
    if (/^mailto:/g.test(href)) {
      return <a href={href} onClick={() => googleAnalyticsEvent(7, this._capitalizePath(pathname), text)}>{children}</a>
    }

    // create internal anchor link
    if(/^\$/g.test(href)) {
      // const container = document.querySelector('html')
      // return <AnchorLink href={`#${slugifyAnchor(href).replace(/[$]/g, '')}`} options={{tolerance: 80, container}} className='link-head'>{children}</AnchorLink>
      return <a href={`#${slugifyAnchor(href).replace(/[$]/g, '')}`} className='AnchorLink link-head'>{children}</a>
    }

    if(/resources-commander/ig.test(href)) {
      if(noPageJump) {
        return <span>{children}</span>
      }
      const h = href.replace('resources-commander', !/slack|microsoft-teams|mattermost/i.test(href) ? 'docs/commander/slack' : 'docs/commander')
      console.log('resources-commander: ', href, ' --> ', h)
      return <NavLink to={h} onClick={() => googleAnalyticsEvent(8, 'Markdown', text)}>{children}</NavLink>
    }

    if(/resources/ig.test(href)) {
      console.log('resources: ', href)
      if(noPageJump) {
        return <span>{children}</span>
      }
      const h = href.replace('resources', 'docs')
      return <NavLink to={h} onClick={() => googleAnalyticsEvent(8, 'Markdown', text)}>{children}</NavLink>
    }

    // internal link
    return <NavLink to={href} onClick={() => googleAnalyticsEvent(8, 'Markdown', text)}>{children}</NavLink>
  }

  // Language detect for HighLight.js
  handleDetectLanguage = s => {
    if(typeof s === 'string') {
      if(/<html|<body|<div/g.test(s)) {
        return 'html'
      }
      if(/function\s|const\s|let\s|var\s|return\s|if|JSON\s|case "/g.test(s)) {
        return 'javascript'
      }
      if(/^{/g.test(s) || /^bucket:/g.test(s)) {
        return 'json'
      }
      if(/(.*)\n\r\n\s+-\s(.*)|(.*)\n\s+-\s(.*)|(.*)\r\s+-\s(.*)/g.test(s)) {
        return 'less'
      }
      return 'shell'
    }
  }

  CodeRenderer = ({ ...props }) => {
    return (
      <div className={`code-block ${(props.value.indexOf('function') === -1) ? '' : 'position-relative'}`}>
        {(/\n\r\n|\r|\n/g.test(props.value) && !/^touch|^project|^editor|^cd ~|^mkdir/g.test(props.value)) ? // second condition is the exception
          <div className='block'>
            {isCMS() ? <pre className='cms-code'>{props.value}</pre> : <HighLight language={this.handleDetectLanguage(props.value)}>{props.value}</HighLight>}
            <CopyToClipboard text={props.value} onCopy={() => this.handleCopied()}>
              <span className='copy-to-clipboard-btn block'><FontAwesomeIcon icon={faCopy}/></span>
            </CopyToClipboard></div> :
          <div>
            {props.value.split('\n').map((i, index) => {
              return (
                <span className='d-block line' key={i + index}>
                  {isCMS() ? <pre className='cms-code'>{i}</pre> : <HighLight language={this.handleDetectLanguage(i)}>{i}</HighLight>}
                  <CopyToClipboard text={i} onCopy={() => this.handleCopied()}><span className='copy-to-clipboard-btn block'><FontAwesomeIcon icon={faCopy}/></span></CopyToClipboard>
                </span>
              )
            })}
          </div>
          }
      </div>
    )
  }

  TableRenderer = ({ ...props }) => {
    const val = React.Children.toArray(props.children).reduce(this._flatten, '')
    const { pathname } = window.location
    const checkNC = (!/microsoft-teams/i.test(pathname) && /\/nc /i.test(val)) || (/microsoft-teams|teams-app|admin/i.test(pathname) && !/\/nc /i.test(val))
    const checkLocation = /reference|admin/i.test(pathname)
    if(checkNC && checkLocation) {
      // table for /docs/commander/slack/reference
      return <table className='slack-table' cellSpacing='0' cellPadding='10' border='0'>{props.children}</table>
    } else {
      // return a normal table
      return <table cellSpacing="0" cellPadding='10' border="1">{props.children}</table>
    }
  }

  TableRowRenderer = ({ ...props }) => {
    const { pathname } = window.location
    return (
      <tr>
        { props.children.map((i, index) => {
          let firstCol = i.props.children[0].props.value
          let k = i.props.children[0].key
          if(typeof firstCol === 'string' &&
            (
              (!/microsoft-teams/i.test(pathname) && firstCol.indexOf('/nc') !== -1) ||
              ((/microsoft-teams|teams-app|admin/i.test(pathname)) && firstCol.indexOf('/nc') === -1 && typeof k === 'string' && /\d{1}-(3|2)-0/.test(k))
            )
          ) {
            // TD tag contains /nc
            let s = ''
            i.props.children.forEach(i => {
              if(/^text/.test(i.key) || /^html/.test(i.key)) {
                // console.log('text', i.props)
                s += i.props.value
              }
              if(/^link/.test(i.key)) {
                // console.log('link', i.props.href)
                s += i.props.href
              }
              if(!/^text/.test(i.key) && !/^link/.test(i.key) && !/^html/.test(i.key)) {
                console.log('Warning! unexpected vale and may cause the vale missing.', i)
              }
            })
            return <td key={s + index} valign='top' className='command'><span className='td-copy'>{s} <CopyToClipboard text={s} onCopy={() => this.handleCopied()}>
              <span className='copy-to-clipboard-btn'><FontAwesomeIcon icon={faCopy}/></span>
            </CopyToClipboard></span></td>
          } else {
            return <td key={index}>{i.props.children}</td>
          }
        }) }
      </tr>
    )
  }

  InlineCodeRenderer = ({ ...props }) => {
    if(props.value.indexOf('login <login-token>') === 0) { // exception for inline code
      return (
        <code>{props.value}</code>
      )
    }
    return (
      <code className='code-block'>
        <span className='inline'>
          {props.value}&nbsp;
          <CopyToClipboard text={props.value} onCopy={() => this.handleCopied()}>
          <span className='copy-to-clipboard-btn'><FontAwesomeIcon icon={faCopy}/></span>
        </CopyToClipboard>
        </span>
      </code>
    )
  }

  // Add id to each header tags
  HeadingRender = ({ ...props }) => {
    const children = React.Children.toArray(props.children)
    const text = children.reduce(this._flatten, '').replace(/\?|:|#|\.|,|\u200B/g, '').replace(/\u00a0/g, ' ')
    const id = text.toLowerCase().replace(/((?!\$|\(|\)|\/|'|&)[\W])/g, '-')
    return React.createElement('h' + props.level, { id }, props.children)
  }

  ParagraphRender = ({ ...props }) => {
    const val = React.Children.toArray(props.children).reduce(this._flatten, '')
    if(/image/.test(props.children[0].key)) {
      return (<span className='d-block'>{ props.children }</span>)
    }

    if(/text/.test(props.children[0].key)) {
      // YouTube Widget
      if(/^CMS-YOUTUBE (.*)$/.test(val)) {
        try {
          const match = val.match(/^CMS-YOUTUBE ID=(.*) ALIGN=(.*) WIDTH=(.*)$/)
          const id = match[1]
          const align = match[2]
          const width = match[3]
          // console.log('Youtube id', id, width)
          return (
            <div className={`Content--Video ${align === 'center' ? 'center' : ''} w${width}`}>
              <div className="youtube">
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  allowFullScreen
                  title={'youtube'} />
              </div>
            </div>
          )
        } catch (err) { console.log(err) }
      }

      // Podcast Widget
      if(/^CMS-PODCAST (.*)$/.test(val)) {
        try {
          const match = val.match(/^CMS-PODCAST INDENT=(.*) WIDTH=(.*) SRC=(.*) ART=(.*) TITLE=(.*)$/)
          const indent = match[1]
          const width = match[2]
          const src = match[3]
          const art = match[4]
          const title = match[5]
          return (
            <Podcast
              src={src}
              art={art}
              indent={indent}
              width={width}
              title={title}
            />
          )
        } catch (err) { console.log(err) }
      }

      // Animated Gif Widget
      if(/^CMS-ANIMATEDGIF (.*)$/.test(val)) {
        try {
          const match = val.match(/^CMS-ANIMATEDGIF IMAGE=(.*) INDENT=(.*) WIDTH=(.*)$/)
          const image = match[1]
          const indent = match[2]
          const width = match[3]
          const split = image.split('.')
          // console.log('Animated gif', image, width)
          if(image && split[split.length - 1] === 'gif') {
            return (
              <div className={`indent-${indent}`}>
                <div className={`Content--Image w${width}`}>
                  <GifPlayer gif={image} />
                </div>
              </div>
            )
          } else {
            return (
              <p className={`indent-${indent}`}>
                <img
                  className={`Content--Image w${width}`}
                  src={getImageSrc(image)}
                  srcSet={getImageSrcset(image)}
                  alt={''}
                />
              </p>
            )
          }
        } catch (err) { console.log(err) }

      }

      // Image with Class Widget
      if(/^CMS-IMAGECLASS (.*)$/.test(val)) {
        try {
          const match = val.match(/^CMS-IMAGECLASS IMAGE=(.*) INDENT=(.*) CLASS=(.*) ALT=(.*)$/)
          const image = match[1]
          const indent = match[2]
          const classname = match[3]
          const alt = match[4]
          // console.log('Image Class', image, classname, alt)
          return (
            <p className={`indent-${indent}`}>
              <img
                className={`Content--Image ${classname}`}
                src={getImageSrc(image)}
                srcSet={getImageSrcset(image)}
                alt={alt}
              />
            </p>
          )
        } catch (err) { console.log(err) }

      }

      // Anchor Widget
      if(/^CMS-ANCHOR (.*)$/.test(val)) {
        try {
          const match = val.match(/^CMS-ANCHOR ID=(.*)$/)
          const id = match[1]
          return (
            <div id={`${id}`}>&nbsp;</div>
          )
        } catch (err) { console.log(err) }

      }

      // Indent Widget
      if(/^CMS-INDENT (.*)$/.test(val)) {
        try {
          const match = val.match(/^CMS-INDENT INDENT=(.*) CONTENT=(.*)$/)
          const indent = match[1]
          const content = match[2]
          props.children.shift()
          return (
            <p className={`indent-${indent}`}>
              {content} {props.children}
            </p>
          )
        } catch (err) { console.log(err) }
      }

      // Caption Widget
      if(/^CMS-CAPTION (.*)$/.test(val)) {
        try {
          const match = val.match(/^CMS-CAPTION ALIGN=(.*) CONTENT=(.*)$/)
          const align = match[1]
          const content = match[2]
          props.children.shift()
          return (
            <p className={`caption text-${align}`}>
              {content} {props.children}
            </p>
          )
        } catch (err) { console.log(err) }
      }

      // Twitter Embed
      if(/^CMS-TWITTEREMBED (.*)$/.test(val)) {
        try {
          const match = val.match(/^CMS-TWITTEREMBED ID=(.*) ALIGN=(.*) CARDS=(.*)$/)
          const id = match[1]
          const align = match[2]
          const cards = match[3]
          props.children.shift()
          return (
            <div className='cms-twitter'>
              {id && align && cards && <TweetEmbed id={id} placeholder={'loading...'} options={{ align: align, width: '500', cards: cards }} />}
            </div>
          )
        } catch (err) { console.log(err) }
      }

      // PDF Widget
      if(/^CMS-PDF (.*)$/.test(val)) {
        try {
          const { pdfPageNumber, pdfScale, pdfRotate } = this.state
          const match = val.match(/^CMS-PDF SRC=(.*)$/)
          const src = match[1]
          props.children.shift()

          const _goToPrevPDFPage = () =>
            this.setState(state => ({ pdfPageNumber: state.pdfPageNumber - 1 }))

          const _goToNextPDFPage = () =>
            this.setState(state => ({ pdfPageNumber: state.pdfPageNumber + 1 }))

          const _pdfZoomIn = () =>
            this.setState(state => ({ pdfScale: state.pdfScale + 0.5 }))

          const _pdfZoomOut = () =>
            this.setState(state => ({ pdfScale: state.pdfScale - 0.5 }))

          const _pdfRotate = () =>
            this.setState(state => ({ pdfRotate: state.pdfRotate + 90 }))

          return (
            <div className={`Content--PDF`}>
              {src && <Fragment>
                {/admin/i.test(window.location.pathname) ? <div className='w-100'>
                  <p className='text-center'>PDF can not be previewed on the CMS mode.</p>
                  <div className="pager">
                    <div className='pager-right'>
                      <button>
                        <FontAwesomeIcon icon={faSearchMinus} />
                      </button>
                      <button>
                        <FontAwesomeIcon icon={faSearchPlus} />
                      </button>
                    </div>
                    <div className='pager-center'>
                      <button>
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </button>
                      <span>Page 1/5</span>
                      <button>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                    </div>
                    <div className='pager-right'>
                      <button>
                        <FontAwesomeIcon icon={faSyncAlt} />
                      </button>
                    </div>
                  </div>
                </div>:<Pdf file={src} page={pdfPageNumber} scale={pdfScale} rotate={pdfRotate}>
                  {({ pdfDocument, pdfPage, canvas }) => (
                    <Fragment>
                      {!pdfDocument && <span>Loading...</span>}
                      {canvas}
                      {Boolean(pdfDocument && pdfDocument.numPages) && (
                        <div className="pager">
                          <div className='pager-right'>
                            <button onClick={_pdfZoomOut} disabled={pdfScale <= 1}>
                              <FontAwesomeIcon icon={faSearchMinus} />
                            </button>
                            <button onClick={_pdfZoomIn} disabled={pdfScale > 2}>
                              <FontAwesomeIcon icon={faSearchPlus} />
                            </button>
                          </div>
                          <div className='pager-center'>
                            <button disabled={pdfPageNumber === 1} onClick={_goToPrevPDFPage}>
                              <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <span>Page {pdfPageNumber}/{pdfDocument && pdfDocument.numPages}</span>
                            <button disabled={pdfPageNumber === pdfDocument.numPages} onClick={_goToNextPDFPage}>
                              <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                          </div>
                          <div className='pager-right'>
                            <button onClick={_pdfRotate}>
                              <FontAwesomeIcon icon={faSyncAlt} />
                            </button>
                          </div>
                        </div>
                      )}
                    </Fragment>
                  )}
                </Pdf>}

              </Fragment>}
            </div>
          )
        } catch (err) { console.log(err) }
      }

      // Commander Commands Widget
      if(/^CMS-COMMANDERCOMMANDS (.*)$/.test(val)) {
        try {
          // console.log('screenshot', props.children)
          const match = val.match(/^CMS-COMMANDERCOMMANDS ROLE=(.*) INDENT=(.*) MESSAGE=(.*)$/)
          const role = match[1]
          const indent = match[2]
          const message = match[3]
          // console.log('Commander Commands', role, message)
          let edited = props.children.map((i, index) => {
            if(index === 0) {
              const o = Object.assign({}, i)
              o.props = { nodeKey: o.props.nodeKey, value: message, children: message }
              return o
            }
            return i
          })
          let s = ''
          edited.forEach(i => {
            if(/^text/.test(i.key) || /^html/.test(i.key) || /^inlineCode/.test(i.key)) {
              s += i.props.value
            }
            if(/^link/.test(i.key)) {
              s += i.props.href
            }
            if(!/^text/.test(i.key) && !/^link/.test(i.key) && !/^html/.test(i.key) && !/^inlineCode/.test(i.key)) {
              console.log('Warning! unexpected vale and may cause the vale missing.', i)
            }
          })
          const time = new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true})

          return (
            <div className={`Content--Slack indent-${indent}`}>
              {role === 'user' && <div className='slack slack-user'>
                <img src='/images/slack-user.jpg' alt='Commander User'/>
                <div className='text'>
                  <span className='name'>User</span> <span className='time'>{time}</span><br/>
                  <span className='d-block line'>{edited}&nbsp;
                    <CopyToClipboard text={s} onCopy={() => this.handleCopied()}><span
                      className='copy-to-clipboard-btn'><FontAwesomeIcon icon={faCopy}/></span></CopyToClipboard>
                  </span>
                </div>
              </div>}

              {role === 'admin' && <div className='slack slack-admin'>
                <img src='/images/slack-admin.png' alt="Commander Admin" />
                <div className='text'>
                  <span className='name'>Commander</span> <span className='app'>App</span> <span className='time'>{time}</span><br/>
                  <p className='result'>{edited}</p>
                </div>
              </div>}
            </div>
          )
        } catch (err) { console.log(err) }

      }
    }
    return (<p>{ props.children }</p>)
  }

  render () {
    let { source, src, className } = this.props
    return (
      <Fragment>
        <p className={`Content--Copied ${this.state.copied ? 'show-msg' : ''}`}>copied</p>
        <Marked
          className={`Content ${className}`}
          source={this.encodeMarkdownURIs(source || src)}
          plugins={[remarkSubSuper]}
          renderers={{
            root: this.RootContainer,
            image: this.ImageWithSrcset,
            html: this.HtmlBlock,
            link: this.LinkRenderer,
            code: this.CodeRenderer,
            table: this.TableRenderer,
            tableRow: this.TableRowRenderer,
            blockquote: this.BlockquoteRenderer.bind(this),
            inlineCode: this.InlineCodeRenderer,
            heading: this.HeadingRender,
            paragraph: this.ParagraphRender,
            sub: 'sub',
            sup: 'sup'
          }}
        />
      </Fragment>
    )
  }
}

Content.propTypes = {
  source: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string
}

export default Content
