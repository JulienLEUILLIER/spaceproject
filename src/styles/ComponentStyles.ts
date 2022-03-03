import { css } from "styled-components";

const ComponentStyles = css`
  .large-button {
    position: relative;
    z-index: 1;
    border-radius: 50%;
    padding: 0 2em;
    display: inline-grid;
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

  .tabs-navigation {
    --gap: 2rem;
    button {
      background-color: transparent;
      border: none;
      &[aria-selected="true"] {
        color: hsl(var(--clr-white));
      }
    }
  }

  .underline-indicators {
    > * {
      cursor: pointer;
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

      :hover{
        ::after {
          background-color: hsl(var(--clr-white) / 0.5);
        }
      }

      &.active {
        ::after {
          background-color: hsl(var(--clr-white));
        }
      }
    }
  }

  .dots-list {
    button {
      border-radius: 50%;
      border: 0;
      cursor: pointer;
      aspect-ratio: 1;
      padding: 0.5rem;
      background-color: hsl(var(--clr-white) / 0.25);

      :hover,
      :focus {
        background-color: hsl(var(--clr-white) / 0.5);
      }

      &.active {
        background-color: hsl(var(--clr-white));
      }
    }
  }

  .small-button {
    flex-direction: column;

    button {
      aspect-ratio: 1;
      border-radius: 50%;
      padding: 0 1.5rem;
      border: 1px solid hsl(var(--clr-white) /0.25);

      :hover {
        border: 1px solid hsl(var(--clr-white));
      }
    }
  }
`;

export default ComponentStyles;
