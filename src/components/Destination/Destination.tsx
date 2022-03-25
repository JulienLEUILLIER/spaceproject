import MainContentComponent from '../MainContent/MainContentComponent'
import PlanetDestination from './PlanetDestination';
import DestinationText from './DestinationText';
import Wrapper from '../../styles/Global.styles';
import Header from '../Header/Header';
import { BackgroundsProps } from '../../helpers/getBackgrounds';

interface DestinationProps {
  backgrounds: BackgroundsProps
}

const Destination = ({ backgrounds }: DestinationProps) => {

  const destinationData = require('../../data.json').destinations;

  const planets = Object.keys(destinationData);
  
  return (
    <Wrapper backgrounds={backgrounds}>
      <Header />
      <MainContentComponent leftComponent={<PlanetDestination />} rightComponent={<DestinationText planets={planets} />} className='' /> 
    </Wrapper>
  )
}

export default Destination