import React, { Fragment } from 'react'

import PostCard from '../components/PostCard'
import '../stylesheets/components/PostSection.css'

class PostSection extends React.Component {
  static defaultProps = {
    posts: [],
    title: '',
    limit: 7,
    showLoadMore: true,
    loadMoreTitle: 'Load More',
    perPageLimit: 7
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
    const { posts, title, showLoadMore, loadMoreTitle, postCategories } = this.props
    const { limit } = this.state

    const visiblePosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      // show all unlesss you set a limit.
      .slice(0, limit || posts.length)

    return (
      <div className='PostSection'>
        <div className='container'>
          <div className='row'>
            {title && <h2 className='PostSection--Title col-lg-12'>{title}</h2>}

            {!!visiblePosts.length && (
              <Fragment>
                {visiblePosts.map((postItem, index) => (
                  <PostCard key={postItem.title + index} postItem={postItem} cardIndex={index} postCategories={postCategories} />
                ))}
              </Fragment>
            )}

            {showLoadMore &&
            visiblePosts.length < posts.length && (
              <div className='col-lg-12'>
                <div className='taCenter w-100 text-left'>
                  <button className='btn btn-outline-app mr-3 mb-5' onClick={this.increaseLimit}>
                    {loadMoreTitle}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PostSection
