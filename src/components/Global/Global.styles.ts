import styled from "styled-components";

const Wrapper = styled.div`
  line-height: 1.5;
  min-height: 100vh;
  font-size: var(--fs-400);
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-dark));
  display: grid;
  grid-template-rows: min-content 1fr;
`;

export default Wrapper;
