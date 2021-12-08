import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        background:linear-gradient(135deg,#e09,#d0e);
        color: black;
        font-family: 'Source Sans Pro', sans-serif;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
`;

export default GlobalStyles;
