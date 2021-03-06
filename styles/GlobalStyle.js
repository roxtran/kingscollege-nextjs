import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.1s ease-out;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background: #fff;
    width: 100vw;
    overflow-x: hidden;
    font-weight: 500;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    &:active, &:focus {
      outline: 0;
      border: none;
    }
  }
  h1, h2, h3, h4 {
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3rem;
    @media screen and (max-width: 640px) {
      font-size: 2.75rem;
      line-height: 3rem;
    }
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
  }
  p {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  ol, ul {
    padding-left: 0;
  }
  .hide-overflow {
    overflow: hidden;
  }
`
export const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 0 8rem;
  @media screen and (max-width: 768px) {
    padding: 4rem 0 4rem;
  }
`
export const Button = styled.a`
  display: inline-block;
  cursor: pointer;
  background: var(--blue);
  border-radius: 20px;
  color: #fff;
  padding: 10px 25px;
  text-align: center;
  text-transform: capitalize;
  &:hover {
    /* background: var(--light-blue); */
    color: #fff;
    /* box-shadow: var(--shadow); */
  }
`
export const ImgWrapper = styled(motion.div)`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`
