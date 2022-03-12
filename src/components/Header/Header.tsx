import Navigation from './Navigation'
import HeaderWrapper from './Header.styles';

const Header = () => {

  const headings = ['Home', 'Destination', 'Crew', 'Technology'];

  return (
    <HeaderWrapper className='flex'>

      <div>
        <img src={'assets/shared/logo.svg'} alt="Logo" className='logo'/>
      </div>
      <button aria-controls='primary-navigation'><span className='sr-only' aria-expanded='false'>Menu</span></button>
      <div>
        <Navigation headings={headings}/>
      </div>
    </HeaderWrapper>
  )
}

export default Header