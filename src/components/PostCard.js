import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { googleAnalyticsEvent } from '../util/ga'

import { handleExtIcon, handleExtTitle, slugify } from '../util/url'
import BackgroundImage from './BackgroundImage'
import '../stylesheets/components/PostCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { timestampWithGeolocation } from '../util/time'

const defaultBlog = '/images/uploads/default-blog.jpg'

const PostCard = ({ postItem, className = '', cardIndex = 0, postCategories = [], ...props }) => {
  const { title, type, externalImage, postFeaturedImage, link, excerpt, date, categories } = postItem

  const LinkImageElement = (props) => {
    const { extlink, extimg, intimg, title, type, index } = props
    const ImgEle = (
      <div className={`PostCard--Image${(index === 0) ? ' first' : ''}`}>
        <span className={`PostCard--Type ${type}`}>{type}</span>
        <BackgroundImage
          src={extimg || intimg || defaultBlog}
          lazy='true'
          alt={title}
        />
      </div>
    )
    return (
      extlink ? <div className={index === 0 ? 'col-lg-6' : ''}><a href={extlink} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, 'Blog', title)}>{ImgEle}</a></div> : <div className={index === 0 ? 'col-lg-6' : ''}><Link to={slugify(`/blog/${title}`)} onClick={() => googleAnalyticsEvent(8, 'Blog', title)}>{ImgEle}</Link></div>
    )
  }

  const handleCategoryLink = cate => {
    return postCategories.filter(i => i.title === cate).length > 0
  }

  return (
    <div className={`${className ? className : (cardIndex === 0) ? 'col-lg-12' : 'mb-5 col-md-6 col-lg-4'}`}>
      <div className='PostCard'>
        <div className={`Card${(cardIndex === 0) ? ' row first' : ''}`}>
          <LinkImageElement
            extlink={link}
            extimg={externalImage}
            intimg={postFeaturedImage}
            title={title}
            type={type}
            index={cardIndex}
          />
          <div className={`PostCard--Content ${(cardIndex === 0) ? 'col-lg-6 first' : ''}`}>
            {link ? <Fragment><h5 className='PostCard--Title'><a href={link} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, 'Blog', title)}>{title}</a></h5></Fragment> : <Link to={slugify(`/blog/${title}`)} onClick={() => googleAnalyticsEvent(8, 'Blog', title)}><h5 className='PostCard--Title'>{title}</h5></Link>}

            <div className='text text-midGrey text-small PostCard--Date'>
              <div className='date-wrap'>
                <FontAwesomeIcon icon={faCalendarAlt} /> {timestampWithGeolocation(date, { date: true })}
              </div>
              {link && handleExtIcon(link) && <img src={handleExtIcon(link)} alt='external link' height='15' title={`Source from ${handleExtTitle(link)}`} />}
            </div>

            <span className={`text text-midGrey PostCard--Category ${(cardIndex === 0) ? 'first' : ''}`}>
              {categories.map((i, index) => (<Fragment key={i.category + index}>{index !== 0 ? ' ' : ''}
                {handleCategoryLink(i.category) && <NavLink className='btn btn-dark btn-small' to={slugify(`/blog-category/${i.category}`)}>{i.category}</NavLink>}
                {!handleCategoryLink(i.category) && <span className='btn btn-dark btn-small no-link'>{i.category}</span>}
              </Fragment>))}
            </span>

            {excerpt && (
              <div className={`PostCard--Excerpt ${cardIndex === 0 ? '' : 'text-small'}`}>
                {excerpt.length > (cardIndex !== -1 ? 430 : 110) // !== -1 is for rush changing
                  ? excerpt.slice(0, (cardIndex !== -1 ? 427 : 107)) + '...' // !== -1 is for rush changing
                  : excerpt}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
