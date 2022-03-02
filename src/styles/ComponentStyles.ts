import { css } from "styled-components";

const ComponentStyles = css`
  .large-button {
    position: relative;
    z-index: 1;
    border-radius: 50%;
    padding: 0 2em;
    display: grid;
    aspect-ratio: 1;
    text-decoration: none;
    place-items: center;

    ::after {
      content: "";
      z-index: -1;
      position: absolute;
      background: hsl(var(--clr-white) / 0.15);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: opacity 500ms linear, transform 750ms ease-in-out;
      opacity: 0;
    }

    :hover::after,
    :focus::after {
      transform: scale(1.5);
      opacity: 1;
    }
  }

  .primary-navigation {
    --gap: 8rem;
    --underline-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;

    a {
      text-decoration: none;

      span {
        font-weight: 700;
        margin-right: 0.5rem;
      }
    }
  }

  .underline-indicators {
    > * {
      position: relative;
      padding: var(--underline-gap, 1rem) 0;

      ::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.1rem;
      }

      :hover,
      :focus {
        ::after {
          background-color: hsl(var(--clr-white) / .5);
        }
      }

      &.active {
        ::after {
          background-color: hsl(var(--clr-white));
        }
      }
    }
  }
`;

export default ComponentStyles;
