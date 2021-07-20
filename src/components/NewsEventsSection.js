import React, { Fragment } from 'react'

import NewsEventsCard from '../components/NewsEventsCard'
import '../stylesheets/components/PostSection.css'

class NewsEventsSection extends React.Component {
  static defaultProps = {
    posts: [],
    title: '',
    limit: 6,
    showLoadMore: true,
    loadMoreTitle: 'Load More',
    perPageLimit: 6
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () => {
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))
  }

  render () {
    const { posts, title, showLoadMore, loadMoreTitle } = this.props
    const { limit } = this.state

    const visiblePosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit || posts.length)
    return (
      <div className='PostSection'>
        <div className='container'>
          <div className='row'>
            {title && <h2 className='PostSection--Title'>{title}</h2>}
            {!!visiblePosts.length && (
              <Fragment>
                {visiblePosts.map((postItem, index) => (
                  <NewsEventsCard key={postItem.title + index} postItem={postItem} />
                ))}
              </Fragment>
            )}
            {showLoadMore &&
            visiblePosts.length < posts.length && (
              <div className='taCenter w-100 text-left'>
                <button className='btn btn-outline-app ml-3 mb-5' onClick={this.increaseLimit}>
                  {loadMoreTitle}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsEventsSection
