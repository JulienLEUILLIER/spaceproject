import styled from "styled-components";
import { BackgroundsProps } from "./helpers/getBackgrounds";

const Wrapper = styled.div<{backgrounds: BackgroundsProps}>`
  min-height: 100vh;
  line-height: 1.5;
  font-size: var(--fs-400);
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-dark));
  display: grid;
  grid-template-rows: min-content 1fr;
  background-image: ${props => `url(${props.backgrounds.desktop})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;


  @media (max-width: 45em) {
    background-image: ${props => `url(${props.backgrounds.tablet})`};
  }

  @media (max-width: 35em) {
    background-image: ${props => `url(${props.backgrounds.mobile})`};
  }
`;

export default Wrapper;
