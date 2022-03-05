import styled from "styled-components";

export const Wrapper = styled.div`
  border: 5px solid magenta;
  display: grid;

  > div {
    border: 3px solid yellowgreen;
  }

  @media (min-width: 45rem) {
    column-gap: var(--container-gap, 2rem);
    grid-template-columns: minmax(2em, 1fr) repeat(2, minmax(0em, 40rem)) minmax(
        2em,
        1fr
      );

    > *:first-child {
      grid-column: 2;
    }

    > *:last-child {
      grid-column: 3;
    }
  }
`;
