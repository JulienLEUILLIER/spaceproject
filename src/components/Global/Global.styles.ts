import styled from "styled-components";
import { BackgroundsProps } from "../../hooks/useImage";

const Wrapper = styled.div<{backgrounds: BackgroundsProps}>`
  line-height: 1.5;
  min-height: 100vh;
  font-size: var(--fs-400);
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-dark));
  display: grid;
  grid-template-rows: min-content 1fr;
  background-image: ${props => `url(${props.backgrounds.desktop})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;


  @media (max-width: 800px) {
    background-image: ${props => `url(${props.backgrounds.tablet})`};
  }

  @media (max-width: 500px) {
    background-image: ${props => `url(${props.backgrounds.mobile})`};
  }
`;

export default Wrapper;
