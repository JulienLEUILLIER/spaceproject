import styled from "styled-components";

const NavigatorWrapper = styled.nav`
  ul {
    display: flex;
    --underline-gap: 2rem;
    list-style: none;
    margin: 0;

    li {
        margin-inline-start: 2rem;
    }
  }

  @media (max-width: 35rem) {
    ul {
      position: fixed;
      z-index: 999;
      background: black;
      inset: 0 0 0 20%;
      padding: min(20rem, 10vh) 2rem;
      margin: 0;
      flex-direction: column;

      > .active::after {
            height: 0;
        }
    }
  }

  a {
    text-decoration: none;

    span {
      font-weight: 700;
      margin-right: 0.5rem;
    }
  }
`;

export default NavigatorWrapper;
