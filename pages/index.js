import Hero from '../components/Hero'
import About from '../components/About'
import Academics from '../components/Academics'
import Admission from '../components/Admission'
import Download from '../components/Download'
import Calendar from '../components/Calendar'

export default function Home({
  about,
  showAbout,
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
      <Hero />
      <About about={about} showAbout={showAbout} />
      <Academics academics={academics} setAcademics={setAcademics} />
      <Admission admission={admission} setAdmission={setAdmission} />
      <Download download={download} setDownload={setDownload} />
      <Calendar calendar={calendar} setCalendar={setCalendar} />
    </>
  )
}
