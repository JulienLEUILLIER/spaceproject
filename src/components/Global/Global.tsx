import Header from "../Header/Header";
import Wrapper from "./Global.styles"

interface GlobalProps {
    routeComponent: JSX.Element;
    backgroundImage: string;
}

const Global = ({routeComponent, backgroundImage}: GlobalProps) => {
  return (
    <Wrapper backgroundImage={backgroundImage}>
      <Header />
      {routeComponent}
    </Wrapper>
  )
}

export default Global;