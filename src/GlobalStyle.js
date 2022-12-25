import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
    }

        *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Public Sans', sans-serif;
        font-size: 18px;
        overflow-x: hidden;
    }
`;