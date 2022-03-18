import Navigation from './Navigation'
import { Wrapper, HamburgerButton, SpaceLogo } from './Header.styles';
import { useState } from 'react';
import Logo from './icons/logo.svg';
import HamburgerOpen from './icons/icon-hamburger.svg';
import HamburgerClose from './icons/icon-close.svg';

const Header = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <SpaceLogo>
        <img src={Logo} alt='space logo' />
      </SpaceLogo>
      <HamburgerButton open={HamburgerOpen} close={HamburgerClose} toggle={toggle} onClick={() => setToggle(prev => !prev)} aria-controls='primary-navigation'>
        <span className='sr-only' aria-expanded={toggle}>Menu</span>
      </HamburgerButton>
      <Navigation toggle={toggle} />
    </Wrapper>
  )
}

export default Header