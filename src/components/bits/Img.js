import React from 'react'
import styled from 'styled-components'

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 16px 0;
`

const BannerImg = styled.img`
  width: 90%;
  height: 100%;
`

const Img = ({ sharpImg }) => {
  if (sharpImg == null) return null

  return (
    <ImgWrapper>
      <BannerImg srcSet={sharpImg.childImageSharp.fluid.srcSet} alt="blog post banner image" />
    </ImgWrapper>
  )
}

export default Img
