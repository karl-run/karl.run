import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

injectGlobal`
  ${reset}

  html {
    font-family: "Open Sans", sans-serif;
    background-color: #eee;
  }

  a {
    color: #333;
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
  }

  h1 {
    font-weight: lighter;
    font-size: 2.5rem;
  }

  h2 {
    font-weight: lighter;
    font-size: 2rem;
  }

  h3 {
    font-weight: lighter;
    font-size: 1.8rem;
  }

  h4 {
    font-size: 2rem;
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
    word-break: break-all !important;
  }
`
