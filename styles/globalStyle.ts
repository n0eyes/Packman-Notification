import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --vh: 100%;
    }

    html,
    body {
        width: 100%;
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        padding: 0;
        margin: 0;
        line-height: 1.6;
        font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        font-size: 62.5%;
        position:fixed;
        overflow: hidden;

        @media screen and (max-width: 300px) {
            font-size: 50%;
        }

        @media screen and (min-width: 768px) {
            font-size: 80%;
        }

        @media screen and (min-width: 1024px) and (min-height: 1366px) {
            font-size: 90%;
        }
    }

    * {
        box-sizing: border-box;
        -moz-box-sizing:border-box; /* Firefox */
        -webkit-box-sizing:border-box; /* Safari */
        transition: ${createTransitionQuery()};
    }
    
    input, 
    button,
    select, 
    textarea, 
    optgroup, 
    option {
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
    }

    input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 1px solid black;
        background: #fff;
        border-radius: 4px;
        cursor: pointer;
        height: 16px;
        width: 16px;
        outline: 0;
    }
    input[type="checkbox"]::after {
        display: none;
    }
    input[type="checkbox"]:checked {
        background: #FF307B;
        border: 1px solid #FF307B;
        
    }
    input[type="checkbox"]:checked::after {
        display: block;
    }
`;

function createTransitionQuery() {
  const properties = ["color", "background-color", "border-color"];

  return properties.map((prop) => `${prop} 0.3s`).join(", ");
}
