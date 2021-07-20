import React, { Fragment } from 'react'

import WebinarCard from '../components/WebinarCard'
import '../stylesheets/components/PostSection.css'

class WebinarSection extends React.Component {
  static defaultProps = {
    posts: [],
    title: '',
    limit: 4,
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

  // componentWillUpdate (nextProps, nextState, nextContext) {
  //   if(this.props !== nextProps) {
  //     const { tab, limit } = nextProps
  //     if(tab === 'upcoming') {
  //       this.setState({ limit })
  //     }
  //   }
  // }

  render () {
    const { posts, title, tab, loadMoreTitle, isStaging, speakers } = this.props
    const { limit } = this.state
    const visiblePosts = posts.slice(0, limit || posts.length)
    return (
      <div className='PostSection'>
        <div className='container'>
          <div className='row'>
            {title && <h2 className='PostSection--Title'>{title}</h2>}

            {!!visiblePosts.length && (
              <Fragment>
                {visiblePosts.map((postItem, index) => (
                  <WebinarCard
                    key={postItem.title + index}
                    postItem={postItem}
                    tab={tab}
                    isStaging={isStaging}
                    speakers={speakers}
                    backgroundImage={tab === 'upcoming' ?
                      postItem.postFeaturedImage ? postItem.postFeaturedImage : `/images/uploads/webinar-card${((index+1) % 4 === 0) ? 4 : ((index+1) % 4)}.png` :
                      postItem.postFeaturedImage ? postItem.postFeaturedImage : '/images/uploads/webinar-card-past.png'}
                  />
                ))}
              </Fragment>
            )}

            {tab === 'past' && posts.length > limit && <div className='col-lg-12'><button className='btn btn-outline-app' onClick={this.increaseLimit}>{loadMoreTitle}</button></div>}
          </div>
        </div>
      </div>
    )
  }
}

export default WebinarSection
