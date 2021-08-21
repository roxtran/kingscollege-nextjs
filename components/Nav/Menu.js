import styled from 'styled-components'
import NavLink from './NavLink'
import Image from 'next/image'

export default function Menu({
  about,
  setAbout,
  academics,
  setAcademics,
  admission,
  setAdmission,
  download,
  setDownload,
  calendar,
  setCalendar,
}) {
  return (
    <StyledMenu>
      <a
        onClick={() => {
          setAbout(false)
          setAcademics(false)
          setAdmission(false)
          setDownload(false)
        }}
      >
        <Image width={120} height={40} src='/img/HOME.jpg' alt='home' />
      </a>
      <a
        onClick={() => {
          setAbout(!about)
          setAcademics(false)
          setAdmission(false)
          setDownload(false)
        }}
      >
        About
      </a>
      <a
        onClick={() => {
          setAbout(false)
          setAcademics(!academics)
          setAdmission(false)
          setDownload(false)
        }}
      >
        Academics
      </a>
      <a
        onClick={() => {
          setAbout(false)
          setAcademics(false)
          setAdmission(!admission)
          setDownload(false)
        }}
      >
        Admission
      </a>
      <a
        onClick={() => {
          setAbout(false)
          setAcademics(false)
          setAdmission(false)
          setDownload(!download)
        }}
      >
        Download
      </a>
      <NavLink href='/'>
        <a>
          <Image
            width={238}
            height={150}
            src='/img/KC-LOGO.png'
            alt='KC-Logo'
          />
        </a>
      </NavLink>
      <a
        onClick={() => {
          setAbout(false)
          setAcademics(false)
          setAdmission(false)
          setDownload(false)
          setCalendar(!calendar)
        }}
      >
        Calendar
      </a>
      <a href='/file/Teacher JD.pdf' target='_blank'>
        Careers at KC
      </a>
      <NavLink href='/'>
        <a>Contact</a>
      </NavLink>
      <NavLink href='/'>
        <a>FAQs</a>
      </NavLink>
      <NavLink href='/'>
        <a>
          <Image width={140} height={75} src='/img/DONATE.png' alt='donate' />
        </a>
      </NavLink>
    </StyledMenu>
  )
}

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  a {
    color: var(--blue);
    margin: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
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
