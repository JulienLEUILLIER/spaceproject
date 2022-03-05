import Navigation from './Navigation'

const Header = () => {

  const headings = ['Home', 'Destination', 'Crew', 'Technology'];

  return (
    <header className='flex'>

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