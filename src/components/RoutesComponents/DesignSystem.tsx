import React from 'react'
import Colors from '../DesignSystem/Colors'
import InteractiveElements from '../DesignSystem/InteractiveElements'
import Typography from '../DesignSystem/Typography'

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