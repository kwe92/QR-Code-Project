import styled, { createGlobalStyle } from "styled-components";

import AppTheme from "./styles/theme/AppTheme";


const AppGlobalTheme = createGlobalStyle`

    * {
        margin: 0;

        padding: 0;

        box-sizing: border-box;

        scroll-behavior: smooth;
    }

    body{
        font-family: Outfit;
        
        background: ${AppTheme.lightGreyColor};
    }

    li {
        list-style: none;
    }

    a{
        text-decoration: none;

    }

`;

export default AppGlobalTheme;