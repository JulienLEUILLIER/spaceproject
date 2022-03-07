import Header from "../Header/Header";
import Wrapper from "./Global.styles";
import { useState } from "react";
import useImage from '../../helpers/useImage';

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