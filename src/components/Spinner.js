import React from 'react'
import '../stylesheets/components/Spinner.css'

export default () => (
  <div className='Spinner'>
    <div className='semipolar-spinner'>
      <div className='ring' />
      <div className='ring' />
      <div className='ring' />
      <div className='ring' />
      <div className='ring' />
    </div>
  </div>
)
