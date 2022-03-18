import Header from "../Header/Header";
import Wrapper from "./Global.styles";
import { BackgroundsProps } from '../../helpers/getBackgrounds';


interface GlobalProps {
  routeComponent: JSX.Element;
  backgrounds: BackgroundsProps;
}

const Global = ({ routeComponent, backgrounds }: GlobalProps) => {

  return (
    <Wrapper backgrounds={backgrounds}>
      <Header />
      {routeComponent}
    </Wrapper>
  )
}

export default Global;