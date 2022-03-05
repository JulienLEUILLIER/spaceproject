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