import styled from 'styled-components'
import NavLink from './NavLink'

export default function Menu({ open, setOpen }) {
  return (
    <StyledMenu open={open}>
      <NavLink href='/'>
        <a>Home</a>
      </NavLink>
      <NavLink href='/'>
        <a>About</a>
      </NavLink>
      <NavLink href='/'>
        <a>Academics</a>
      </NavLink>
      <NavLink href='/'>
        <a>Admission</a>
      </NavLink>
      <NavLink href='/'>
        <a>Download</a>
      </NavLink>
      <NavLink href='/'>
        <a>Logo</a>
      </NavLink>
      <NavLink href='/'>
        <a>Calendar</a>
      </NavLink>
      <NavLink href='/'>
        <a>Careers at KC</a>
      </NavLink>
      <NavLink href='/'>
        <a>Contact</a>
      </NavLink>
      <NavLink href='/'>
        <a>FAQs</a>
      </NavLink>
      <NavLink href='/'>
        <a>Donate</a>
      </NavLink>
    </StyledMenu>
  )
}

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: var(--blue);
    margin: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    &:not(.button)[aria-current] {
    }
  }
  @media screen and (max-width: 1024px) {
    a {
      margin: 0.6rem;
    }
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    background: #fff;
    width: 250px;
    height: 100vh;
    padding-left: 1rem;
    padding-top: 3rem;
    box-shadow: var(--shadow);
    transform-origin: 1px;
    transition: all 0.3s ease-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${({ open }) => (open ? 1 : 0)};
  }
`
