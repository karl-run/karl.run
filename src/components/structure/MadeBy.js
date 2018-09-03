import React from 'react'
import styled from 'styled-components'

const MadeByWrapper = styled.div`
  > div {
    margin-bottom: 4px;
  }

  a {
    color: #999;
    text-decoration: underline;
  }
`

const MadeBy = () => (
  <MadeByWrapper>
    <div>© 2018 Karl J. Overå</div>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/karl-run/karl.run"
    >
      Github source
    </a>
  </MadeByWrapper>
)

export default MadeBy
