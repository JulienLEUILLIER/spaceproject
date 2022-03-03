import React from 'react'
import Navigation from './Navigation'

const Header = () => {

  const headings = ['Home', 'Destination', 'Crew', 'Technology'];

  return (
    <header className='primary-header flex'>

      <div>
        <img src={'assets/shared/logo.svg'} alt="" className='logo'/>
      </div>

      <div>
        <Navigation headings={headings}/>
      </div>
    </header>
  )
}

export default Header