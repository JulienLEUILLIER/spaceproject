import Header from "../Header/Header";
import Wrapper from "./Global.styles";
import useImage from '../../hooks/useImage';

interface GlobalProps {
  routeComponent: JSX.Element;
}

const Global = ({ routeComponent }: GlobalProps) => {

  const backgrounds = useImage(routeComponent);

  return (
    <Wrapper backgrounds={backgrounds}>
      <Header />
      {routeComponent}
    </Wrapper>
  )
}

export default Global;