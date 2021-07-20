import React from 'react'

import PostCategoriesNav from '../components/PostCategoriesNav'
import PostSection from '../components/PostSection'

import '../stylesheets/views/Blog.css'
import Breadcrumb from '../components/Breadcrumb'

export default ({
  fields,
  posts = [],
  postCategories = [],
  // showFeatured = true
}) => {
  // const { title, subtitle, featuredImage } = fields
  posts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return (
    <main className='Blog page'>
      <Breadcrumb className='bg-g' />
      {!!postCategories.length && postCategories.length > 1 && (
        <PostCategoriesNav categories={postCategories} />
      )}

      {postCategories.length <= 1 && <div className='clearfix mt-5' />}

      {!!posts.length && <PostSection posts={posts} postCategories={postCategories} />}
    </main>
  )
}
