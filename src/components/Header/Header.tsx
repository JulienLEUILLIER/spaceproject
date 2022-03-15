import Navigation from './Navigation'
import { HamburgerButton, Logo } from './Header.styles';
import { useState } from 'react';

const Header = () => {

  const [toggle, setToggle] = useState(false);

  const headings = ['Home', 'Destination', 'Crew', 'Technology'];

  return (
    <div className='flex'>

      <Logo>
        <img src={'assets/shared/logo.svg'} alt="Logo" className='logo' />
      </Logo>
      <HamburgerButton toggle={toggle} onClick={() => setToggle(prev => !prev)} aria-controls='primary-navigation'><span className='sr-only' aria-expanded={toggle}>Menu</span></HamburgerButton>
      <div>
        <Navigation headings={headings} toggle={toggle} />
      </div>
    </div>
  )
}

export default Header