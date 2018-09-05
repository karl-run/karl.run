import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

injectGlobal`
  ${reset}

  html {
    font-family: "Open Sans", sans-serif;
    background-color: #eee;
  }

  body {
    line-height: 1.4;
  }

  a {
    color: #36a398;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #36a398;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 8px;
    color: #333;
    line-height: 1.1;
  }

  h1 {
    font-weight: lighter;
    font-size: 2.3rem;
  }

  h2 {
    font-weight: lighter;
    font-size: 1.9rem;
  }

  h3 {
    font-weight: lighter;
    font-size: 1.6rem;
  }

  h4 {
    font-weight: lighter;
    font-size: 1.3rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ol {
    margin-left: 24px;
    list-style-type: decimal;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 4px;
  }

  code {
    word-break: break-word !important;
  }
`
