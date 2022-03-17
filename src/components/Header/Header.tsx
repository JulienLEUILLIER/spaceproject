import Navigation from './Navigation'
import { Wrapper, HamburgerButton, Logo } from './Header.styles';
import { useState } from 'react';

export type MainSection = '' | 'home' | 'destination' | 'crew' | 'technology';

const Header = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <Logo>
        <img src={'assets/shared/logo.svg'} alt="Logo" className='logo' />
      </Logo>
      <HamburgerButton toggle={toggle} onClick={() => setToggle(prev => !prev)} aria-controls='primary-navigation'><span className='sr-only' aria-expanded={toggle}>Menu</span></HamburgerButton>
      <Navigation toggle={toggle} />
    </Wrapper>
  )
}

export default Header