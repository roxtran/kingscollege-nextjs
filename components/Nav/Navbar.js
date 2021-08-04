import styled from 'styled-components'
import Burger from './Burger'
import Menu from './Menu'

export default function Navbar() {
  return (
    <StyledNavbar>
      <Menu />
    </StyledNavbar>
  )
}
const StyledNavbar = styled.nav`
  position: fixed;
  /* background: rgba(255, 255, 255, 0.97); */
  width: 100vw;
  height: 190px;
  display: flex;
  justify-content: center;
  padding: 1rem;
  /* box-shadow: 0 7px 10px 0 rgba(122, 207, 255, 0.3); */
  align-items: center;
  z-index: 10;
`
