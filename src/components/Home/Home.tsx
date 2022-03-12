import MainContentComponent from '../MainContent/MainContentComponent'
import HomeText from './HomeText'
import LargeButton from './LargeButton'

const Home = () => {
  return (
      <MainContentComponent className={'grid-container--home'} leftComponent={<HomeText />} rightComponent={<LargeButton />}/>
  )
}

export default Home;