import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --gap: 100px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body, h1, h2, h3, h4, h5, h6, p, figure, picture {
        margin: 0;
        padding: 0;

    }

    body {
        line-height: 1.5;
        min-height: 100vh;
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

    .flex {
        display: flex;
        gap: var(--gap);
    }

    .grid {
        display: grid;
        gap: var(--gap);
    }

    .container {
        padding-inline: 2em;
        margin-inline: auto;
        max-width: 80rem;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowrap;
        border: 0;
    }

    .box {
        background: aquamarine;
        padding: 3rem;
    }
`

export default GlobalStyle