import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { ImgWrapper } from '../styles/GlobalStyle'

export default function Slider() {
  return (
    <StyledSlider>
      <div className='img-overlay' />
      <ImgWrapper>
        <Image
          src='/img/slides/slide1.jpg'
          alt='slide-item'
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          // placeholder='blur'
          // loading='eager'
          priority='preload'
        />
      </ImgWrapper>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  z-index: 0;
  ${ImgWrapper} {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 0;
  }
  .img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      rgba(255, 255, 255, 0.75),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`
