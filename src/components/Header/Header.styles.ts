import styled from "styled-components";

export const HamburgerButton = styled.button<{ toggle: boolean }>`
  display: none;
  cursor: pointer;

  @media (max-width: 35rem) {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 1rem;
    top: 2rem;
    background: transparent;
    background-image: ${(props) =>
      props.toggle
        ? `url('assets/shared/icon-close.svg')`
        : `url('assets/shared/icon-hamburger.svg')`};
    background-repeat: no-repeat;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
  }
`;

export const NavigatorWrapper = styled.nav<{ toggle: boolean }>`
  ul {
    border: 5px solid magenta;
    display: flex;
    --underline-gap: 2rem;
    list-style: none;
    margin-inline: 2rem;
    padding: 0;
    background: hsl(var(--clr-dark) / 0.95);

    li:not(:first-child) {
      margin-inline-start: 1.2rem;

      @media (min-width: 45rem) {
        margin-inline-start: 2rem;
      }
    }
  }

  @supports (backdrop-filter: blur(1rem)) {
    ul {
      background: hsl(var(--clr-white) / 0.05);
      backdrop-filter: blur(3rem);
    }
  }

  @media (max-width: 35rem) {
    ul {
      position: fixed;
      z-index: 999;
      --underline-gap: 1rem;
      inset: 0 0 0 30%;
      padding: min(20rem, 10vh) 2rem;
      margin: 0;
      flex-direction: column;
      transform: ${(props) =>
        props.toggle ? "translateX(0%)" : "translateX(100%)"};
      transition: transform ease-in-out 300ms;

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

export const Logo = styled.div`
  img {
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  }
`;
