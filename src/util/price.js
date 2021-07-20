import React from 'react'
export const handleTotal = (num, taxRate) => {
  return Math.floor(parseInt(num) * (1 + taxRate / 100))
}

export const handlePrice = (num, showUnit, floats) => {
  return (<span className='amount'>${floats ? parseInt(num).toFixed(2) : num}{showUnit ? ' USD' : ''}</span>)
}
