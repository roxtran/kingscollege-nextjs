import Navbar from './Nav/Navbar'

export default function Layout({
  children,
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
    <>
      <Navbar
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
      <main>{children}</main>
    </>
  )
}
