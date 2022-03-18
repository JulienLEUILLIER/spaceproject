import MainContentComponent from '../MainContent/MainContentComponent'
import Wrapper from '../../styles/Global.styles';
import Header from '../Header/Header';
import { BackgroundsProps } from '../../helpers/getBackgrounds';

interface TechnologyProps {
  backgrounds: BackgroundsProps
}

const Technology = ({ backgrounds }: TechnologyProps) => {
  return (
    <Wrapper backgrounds={backgrounds}>
      <Header />
      <div>Technology</div>
    </Wrapper>
  )
}

export default Technology