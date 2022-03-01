import { createGlobalStyle } from "styled-components";
import Constants from "./Constants";
import Resets from "./Resets";
import UtilityClasses from "./UtilityClasses";
import ComponentStyles from "./ComponentStyles";

const GlobalStyle = createGlobalStyle`

    ${Constants}

    ${Resets}

    ${UtilityClasses}

    ${ComponentStyles}

`;

export default GlobalStyle;
