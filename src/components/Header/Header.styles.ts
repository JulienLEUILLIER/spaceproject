import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 45rem) {
    &::after {
      content: "";
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      background: hsl(var(--clr-white));
      margin-right: -2.5rem;
      order: 1;
    }
  }
`;

export const HamburgerButton = styled.button<{
  toggle: boolean;
  open: string
  close: string;
}>`
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
        ? `url(${props.close})`
        : `url(${props.open})`
    };
    background-repeat: no-repeat;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
  }
`;

export const NavigatorWrapper = styled.nav<{ toggle: boolean }>`
  order: 2;

  ul {
    display: flex;
    gap: clamp(1.5rem, 5vw, 3.5rem);
    --underline-gap: 2rem;
    list-style: none;
    background: hsl(var(--clr-dark) / 0.95);

    @media (min-width: 35rem) {
      padding-inline: clamp(3rem, 7vw, 7rem);
    }

    @media (max-width: 35rem) {
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

    @media (min-width: 35rem) and (max-width: 44.999rem) {
      span {
        display: none;
      }
    }
  }

  @supports (backdrop-filter: blur(1rem)) {
    ul {
      background: hsl(var(--clr-white) / 0.05);
      backdrop-filter: blur(2rem);
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

export const SpaceLogo = styled.div`
  padding-inline-end: clamp(1.5rem, 7vw, 3.5rem);

  img {
    margin: 1.5rem clamp(1.5rem, 7vw, 3.5rem);
  }
`;
