import MainContentComponent from '../MainContent/MainContentComponent'
import Wrapper from '../../Global.styles';
import Header from '../Header/Header';
import { BackgroundsProps } from '../../helpers/getBackgrounds';

interface CrewProps {
  backgrounds: BackgroundsProps
}

const Crew = ({backgrounds}: CrewProps) => {
  return (
    <Wrapper backgrounds={backgrounds}>
      <Header />
      <div>Crew</div>
    </Wrapper>
  )
}

export default Crew