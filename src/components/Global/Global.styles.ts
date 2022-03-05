import styled from "styled-components";
import Global from "./Global";

const Wrapper = styled.div<{backgroundImage: string}>`
  line-height: 1.5;
  min-height: 100vh;
  font-size: var(--fs-400);
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-dark));
  display: grid;
  grid-template-rows: min-content 1fr;
  background-image: ${props => `url(${props.backgroundImage})`};

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default Wrapper;
