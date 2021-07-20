import React from 'react'

import Content from '../components/Content'
import '../stylesheets/views/Jobs.css'

export default ({ fields, ...props }) => {
  const { title, body, location } = fields
  // console.log('body', body)

  return (
    <article className='Jobs light page section'>
      {title && <div className='container'><h1 className='Jobs--Title'>{title}</h1></div>}
      <div className='container'>
        <div className='row'>
          <div className='Jobs--Content col-md-9 pt-5'>
            <div className='mb-5'>
              {location && <p className='text-capitalize'><strong>Location: </strong> {location}</p>}
            </div>

            <div className='Jobs--InnerContent mt-4'>
              <Content source={body} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
