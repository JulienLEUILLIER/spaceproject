import { css } from "styled-components";

const UtilityClasses = css`
    .flex {
        display: flex;
        gap: var(--gap);
    }

    .grid {
        display: grid;
        gap: var(--gap);
    }

    .flow {
        > :where(:not(:first-child)) {
            margin-top: var(--flow-space, 1rem);
        }
    }

    .container {
        padding-inline: 2em;
        margin-inline: auto;
        max-width: 80rem;
    }

    .grid-container {
        border: 5px solid magenta;
        display: grid;
        column-gap: var(--container-gap, 2rem);
        grid-template-columns: minmax(2em, 1fr) repeat(2, minmax(0em, 40rem)) minmax(2em, 1fr);

        > div {
            border: 3px solid yellowgreen;
        }
    }

    .grid-container > *:first-child {
        grid-column: 2;
    }

    .grid-container > *:last-child {
        grid-column: 3;
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

    .numbered-title {
        > span {
            margin-right: .5rem;
            font-family: var(--ff-sans-cond);
            font-weight: 700;
            color: hsl(var(--clr-white) /.25);
        }
        text-transform: uppercase;
        font-size: var(--fs-500);
        font-family: var(--ff-sans-cond);
        letter-spacing: 4.72px;
    }

    .bg-dark { background-color: hsl(var(--clr-dark));}
    .bg-light { background-color: hsl(var(--clr-light));}
    .bg-white { background-color: hsl(var(--clr-white));}

    .text-dark { color: hsl(var(--clr-dark));}
    .text-light { color: hsl(var(--clr-light));}
    .text-white { color: hsl(var(--clr-white));}
    
    /* typography */

    .ff-serif { font-family: var(--ff-serif); } 
    .ff-sans-cond { font-family: var(--ff-sans-cond); } 
    .ff-sans-normal { font-family: var(--ff-sans-normal); } 

    .letter-spacing-1 { letter-spacing: 4.75px; } 
    .letter-spacing-2 { letter-spacing: 2.7px; } 
    .letter-spacing-3 { letter-spacing: 2.35px; } 

    .uppercase { text-transform: uppercase; }

    .fs-900 { font-size: var(--fs-900); }
    .fs-800 { font-size: var(--fs-800); }
    .fs-700 { font-size: var(--fs-700); }
    .fs-600 { font-size: var(--fs-600); }
    .fs-500 { font-size: var(--fs-500); }
    .fs-400 { font-size: var(--fs-400); }
    .fs-300 { font-size: var(--fs-300); }
    .fs-200 { font-size: var(--fs-200); }

    .fs-900,
    .fs-800,
    .fs-700,
    .fs-600 {
        line-height: 1.1;
    }
`

export default UtilityClasses