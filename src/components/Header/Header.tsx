import Navigation from './Navigation'
import { Wrapper, HamburgerButton, SpaceLogo } from './Header.styles';
import { useState } from 'react';
import Logo from './icons/logo.svg';
import HamburgerOpen from './icons/icon-hamburger.svg';
import HamburgerClose from './icons/icon-close.svg';

export type MainSection = '' | 'home' | 'destination' | 'crew' | 'technology';

const Header = () => {

  const [toggle, setToggle] = useState(false);

  const hamburgers = {
    open: HamburgerOpen,
    close: HamburgerClose,
  }  

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