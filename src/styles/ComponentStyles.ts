import { css } from 'styled-components';

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
            content: '';
            z-index: -1;
            position: absolute;
            background: hsl(var(--clr-white) /.15);
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
`;

export default ComponentStyles