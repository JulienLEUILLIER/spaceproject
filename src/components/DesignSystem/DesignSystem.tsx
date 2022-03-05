import React from 'react'
import Colors from './Colors'
import InteractiveElements from './InteractiveElements'
import Typography from './Typography'

const DesignSystem = () => {
  return (
    <div className='container bg-dark text-white'>
        <h1 className='ff-serif'>Design System</h1>
        <Colors />
        <Typography />
        <InteractiveElements />
    </div>
  )
}

export default DesignSystem