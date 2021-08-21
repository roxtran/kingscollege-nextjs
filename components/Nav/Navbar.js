import styled from 'styled-components'
import Burger from './Burger'
import Menu from './Menu'

export default function Navbar({
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
    <StyledNavbar>
      <Menu
        about={about}
        setAbout={setAbout}
        academics={academics}
        setAcademics={setAcademics}
        admission={admission}
        setAdmission={setAdmission}
        download={download}
        setDownload={setDownload}
        calendar={calendar}
        setCalendar={setCalendar}
      />
    </StyledNavbar>
  )
}
const StyledNavbar = styled.nav`
  position: fixed;
  /* background: rgba(255, 255, 255, 0.97); */
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  /* box-shadow: 0 7px 10px 0 rgba(122, 207, 255, 0.3); */
  align-items: center;
  z-index: 10;
`
