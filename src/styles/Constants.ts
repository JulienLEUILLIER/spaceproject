import { css } from "styled-components";

const Constants = css`

    :root {
        /* Colors */
        --clr-dark: 230 35% 7%;
        --clr-light: 231 77% 91%;
        --clr-white: 0 0% 100%;
        --gap: 1rem;

        /* Font sizes */
        --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
        --fs-800: 3.5rem;
        --fs-700: 1.5rem;
        --fs-600: 1rem;
        --fs-500: 1.75rem;
        --fs-400: 0.9375rem;
        --fs-300: 1rem;
        --fs-200: 0.875rem;

        @media (min-width: 35rem) {
            --fs-800: 5rem;
            --fs-700: 2.5rem;
            --fs-600: 1.5rem;
            --fs-400: 1rem;
        }

        @media (min-width: 45rem) {
            --fs-800: 6.25rem;
            --fs-700: 3.5rem;
            --fs-600: 2rem;
            --fs-400: 1.125rem;
        }

        /* Font families */
        --ff-serif: 'Bellefair';
        --ff-sans-cond: 'Barlow Condensed', sans-serif;
        --ff-sans-normal: "Barlow", sans-serif;
    }
`;

export default Constants;
