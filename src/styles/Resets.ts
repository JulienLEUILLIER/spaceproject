import { css } from "styled-components";

const Resets = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body, h1, h2, h3, h4, h5, h6, p, figure, picture {
        margin: 0;
        padding: 0;

    }

    h1, h2, h3, h4, h5, h6, p {
        font-weight: 400;
    }

    body {
        line-height: 1.5;
        min-height: 100vh;
        font-family: var(--ff-sans-normal);
        font-size: var(--fs-400);
        color: hsl(var(--clr-white));
        background-color: hsl(var(--clr-dark));
    }

    img, picture {
        max-width: 100%;
        display: block;
    }

    input, button, textarea, select {
        font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
        *, *::before, **after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration : 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`

export default Resets