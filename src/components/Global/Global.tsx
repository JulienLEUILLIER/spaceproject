import Header from "../Header/Header";
import Wrapper from "./Global.styles"

interface GlobalProps {
    content: JSX.Element;
}

const Global = ({content}: GlobalProps) => {
  return (
    <Wrapper>
      <Header />
      {content}
    </Wrapper>
  )
}

export default Global;