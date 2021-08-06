import React, { Component, Fragment } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { NavLink } from 'react-router-dom'

import Content from '../components/Content'

import '../stylesheets/views/ProductPlatform.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

class ProductPlatform extends Component {
  constructor (props) {
    super(props)
    this.state = {
      copied: false,
      otherCommand: props.fields.eighthSection.other[0].command
    }
  }

  handleCopied = () => {
    this.setState({copied: true})
    let tmr = setTimeout(() => {
      this.setState({copied: false})
      clearTimeout(tmr)
    }, 1000)
  }

  handleCode = code => {
    const arr = code.split(/\s/i)
    arr.splice(arr.length - 1, 0, '\n')
    return arr.join(' ')
  }

  handleSelectChange = e => {
    this.setState({ otherCommand: e.target.value })
  }
  render () {
    const { heroBanner = {}, secondSection = {}, thirdSection = {}, fourthSection = {}, fifthSection = {}, sixthSection = {}, seventhSection = {}, eighthSection = {}, ninethSection = {}, tenthSection = {} } = this.props.fields

    const CodeComponent = ({...props}) => (
      <div className='ProductPlatformEighth--Code'>
        <p>
          <code className='code-block'>
            <span className='inline'>
              {props.oneline && props.command}
              {!props.oneline && this.handleCode(props.command)}
              <CopyToClipboard text={props.command} onCopy={() => this.handleCopied()}>
               <span className='copy-to-clipboard-btn'><FontAwesomeIcon icon={faCopy}/></span>
              </CopyToClipboard>
            </span>
          </code>
        </p>
      </div>
    )

    const ProductPlatformBanner = ({...props}) => {
      const { title = '', desc = '', btnTxt = '', btnLink = '' } = props
      return (
        <div className='ProductPlatformBanner'>
          <Breadcrumb className='bg-g no-banner top-1' />
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 align-self-center'>
                {title && <h1>{title}</h1>}
                {desc && <div className='col-md-6 offset-md-3'><Content source={desc} /></div>}
                {btnTxt && <NavLink to={btnLink} className='btn btn-app'>{btnTxt}</NavLink>}
              </div>
            </div>
          </div>
        </div>
      )
    }

    const ProductPlatformSecond = ({...props}) => {
      const { title = '', list = [] } = props
      return (
        <div className='ProductPlatformSecond section'>
          <div className='container'>
            <div className='row'>
              {title && <div className='col-lg-12'><h2 className='text-center'>{title}</h2></div>}
              {list.map((i, index) => (
                <div className='col-md-6' key={i.title + index}>
                  <div className='ProductPlatformSecond--Item'>
                    {i.title && <h3><NavLink to={i.link}>{i.title}</NavLink></h3>}
                    <div className='item-content'>
                      {i.desc && <Content source={i.desc} />}
                      {i.linkTxt && <NavLink to={i.link} className='link-app'>{i.linkTxt}</NavLink>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    const ProductPlatformThird = ({...props}) => {
      const { title = '', list = [], content = '' } = props
      return (
        <div className='ProductPlatformThird section padding-large'>
          <div className='container'>
            <div className='row'>
              {title && <div className='col-lg-12'><h2 className='text-center'>{title}</h2></div>}
              <div className='col-md-7'>
                {list.map((i, index) => (
                  <img src={i.img} key={i.img + index} alt={title + ' ' + index} width='100%' />
                ))}
              </div>
              <div className='col-md-5'>
                {content && <Content source={content} />}
              </div>
            </div>
          </div>
        </div>
      )
    }

    const ProductPlatformFourth = ({...props}) => {
      const { title = '', subtitle = '', list = [] } = props
      return (
        <div className='ProductPlatformFourth section'>
          <div className='container'>
            <div className='row'>
              {title && <div className='col-md-8 offset-md-2'><h2 className='text-center'>{title}</h2></div>}
              {subtitle && <div className='col-md-10 offset-md-1'><Content className='subtitle' source={subtitle} /></div>}
              {!!list && <ul className='row'>
                {list.map((i, index) => (
                  <div className={`col-md-4${fourthSection.list.length % 3 === 1 && index === (fourthSection.list.length - 1) ? ' offset-md-4' : ''}`} key={i.item + index}>
                    <li>{i.item}</li>
                  </div>
                ))}
              </ul>}
            </div>
          </div>
        </div>
      )
    }

    const ProductPlatformFifth = ({...props}) => {
      const { title = '', btnTxt = '', btnLink = '' } = props
      return (
        <div className='ProductPlatformFifth section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='content-wrap'>
                  {title && <h2>{title}</h2>}
                  {btnTxt && <NavLink to={btnLink} className='btn btn-app'>{btnTxt}</NavLink>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    const ProductPlatformSixth = ({...props}) => {
      const { title = '', list = [] } = props
      return (
        <div className='ProductPlatformSixth section padding-large'>
          <div className='container'>
            <div className='row'>
              {title && <div className='col-md-10 offset-md-1'><h2 className='text-center'>{title}</h2></div>}
              <div className='card-columns'>
                {list.map((i, index) => (
                  <div className='ProductPlatformSixth--Item card' key={i.item + index}>
                    <Content source={i.item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

    const ProductPlatformSeventh = ({...props}) => {
      const { title = '', subtitle = '', list = [] } = props
      return (
        <div className='ProductPlatformSeventh section'>
          <div className='container'>
            <div className='row'>
              {title && <div className='col-md-10 offset-md-1'><h2 className='text-center'>{title}</h2></div>}
              {subtitle && <div className='col-md-10 offset-md-1'><p className='text-center subtitle'>{subtitle}</p></div>}
              <div className='col-md-8 offset-md-2'>
                <div className='row'>
                  {list.map((i, index) => (
                    <div className='col-md-4 col-lg-3 col-xl-3 col-6 mb-5' key={i.name + index}>
                      <div className='ProductPlatformSeventh--Item'>
                        <img src={i.img} alt={i.name} height='77' />
                        {i.name && <h3><a href={i.link} target='_blank' rel='noreferrer nofollow noopener'>{i.name}</a></h3>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    const ProductPlatformEighth = ({...props}) => {
      const { title = '', desc = '', subtitle = '', list = [], other = [] } = props
      const { otherCommand } = this.state
      return (
        <div className='ProductPlatformEighth section'>
          <div className='container'>
            <div className='row'>
              {title && <div className='col-md-6 offset-md-3'><div className='row'><h2 className='text-center'>{title}</h2></div></div>}
              {desc && <Content source={desc} className='description' />}
              {subtitle && <h3 className='text-center d-block w-100'>{subtitle}</h3>}
              {list.map((i, index) => (
                <div className='col-sm-6 col-md-6 col-lg-4 col-12' key={i.name + index}>
                  <div className='ProductPlatformEighth--Item'>
                    {i.image && <a href={i.demolink} target='_blank' rel='noreferrer nofollow noopener'><img src={i.image} alt={i.name} width='100%' /></a>}
                    {i.runtime && <p className='runtime'>{i.runtime}</p>}
                    {i.name && <h4>
                      <Fragment>
                        {i.demolink && <a href={i.demolink} target='_blank' rel='noreferrer nofollow noopener'>{i.name}</a>}
                        {!i.demolink && i.name}
                      </Fragment>
                    </h4>}
                    {i.command && <CodeComponent command={i.command} oneline={false} />}
                  </div>
                </div>
              ))}
              <div className='col-lg-12 text-center'><p className='text-or'>OR</p></div>
              <div className='col-md-5'>
                <div className='ProductPlatformEighth--Other'>
                  <h3>Git clone other demo projects</h3>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='ProductPlatformEighth--Other'>
                  <div className='select-wrap'>
                    Project:&nbsp;
                    <select onChange={this.handleSelectChange}>
                      {other.map((i, index) => (
                        <option value={i.command} key={i.name + index}>{i.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className='code-wrap'>
                    <CodeComponent command={otherCommand} oneline={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    const ProductPlatformNineth = ({...props}) => {
      const { title = '', list = [] } = props
      return (
        <div className='ProductPlatformNineth section padding-large'>
          <div className='container'>
            <div className='row'>
              {title && <div className='col-md-10 offset-md-1'><h2 className='text-center'>{title}</h2></div>}
              <div className='card-columns'>
                {list.map((i, index) => (
                  <div className='card' key={i.question + index}>
                    <h3>{i.question}</h3>
                    <hr />
                    <Content source={i.answer} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

    const ProductPlatformTenth = ({...props}) => {
      const { title = '', btnTxt = '', btnLink = '' } = props
      return (
        <div className='ProductPlatformTenth section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                {title && <h2 className='text-center'>{title}</h2>}
                {btnTxt && <a href={btnLink} target='_blank' rel='noreferrer nofollow noopener' className='btn btn-app'>{btnTxt}</a>}
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className='ProductPlatform' style={{ backgroundColor: '#F3F4F6' }}>
        <p className={`Content--Copied ${this.state.copied ? 'show-msg' : ''}`}>copied</p>
        <ProductPlatformBanner title={heroBanner.title} desc={heroBanner.desc} btnTxt={heroBanner.btnTxt} btnLink={heroBanner.btnLink} />
        <ProductPlatformSecond title={secondSection.title} list={secondSection.list} />
        <ProductPlatformThird title={thirdSection.title} list={thirdSection.list} content={thirdSection.content} />
        <ProductPlatformFourth title={fourthSection.title} subtitle={fourthSection.subtitle} list={fourthSection.list} />
        <ProductPlatformFifth title={fifthSection.title} btnTxt={fifthSection.btnTxt} btnLink={fifthSection.btnLink} />
        <ProductPlatformSixth title={sixthSection.title} list={sixthSection.list} />
        <ProductPlatformSeventh title={seventhSection.title} subtitle={seventhSection.subtitle} list={seventhSection.list} />
        <ProductPlatformEighth title={eighthSection.title} desc={eighthSection.desc} subtitle={eighthSection.subtitle} list={eighthSection.list} other={eighthSection.other} />
        <ProductPlatformNineth title={ninethSection.title} list={ninethSection.list} />
        <ProductPlatformTenth title={tenthSection.title} btnTxt={tenthSection.btnTxt} btnLink={tenthSection.btnLink}/>
      </div>
    )
  }
}

export default ProductPlatform
