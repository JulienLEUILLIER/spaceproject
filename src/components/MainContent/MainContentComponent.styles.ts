import styled from "styled-components";

export const Wrapper = styled.div`
  border: 5px solid magenta;
  display: grid;
  min-height: 100vh;
  text-align: center;
  place-items: center;
  padding-inline: 1rem;

  > * {
    border: 3px solid yellowgreen;
    max-width: 50ch;
  }

  &.grid-container--home {
    padding-bottom: max(6rem, 10vh);
    align-items: end;
  }

  @media (min-width: 45rem) {
    column-gap: var(--container-gap, 2rem);
    grid-template-columns: minmax(2em, 1fr) repeat(2, minmax(0em, 40rem)) minmax(2em, 1fr);
    text-align: left;

    > *:first-child {
      grid-column: 2;
    }

    > *:last-child {
      grid-column: 3;
    }
  }
`;
