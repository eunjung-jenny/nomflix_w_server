import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        padding: 60px 15px;
        background-color: #263238;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
`;

export default globalStyles;
