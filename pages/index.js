import Slider from '../components/Slider'
import About from '../components/About'
import Academics from '../components/Academics'
import Admission from '../components/Admission'
import Download from '../components/Download'

export default function Home({
  about,
  showAbout,
  academics,
  setAcademics,
  admission,
  setAdmission,
  download,
  setDownload,
}) {
  return (
    <>
      <Slider />
      <About about={about} showAbout={showAbout} />
      <Academics academics={academics} setAcademics={setAcademics} />
      <Admission admission={admission} setAdmission={setAdmission} />
      <Download download={download} setDownload={setDownload} />
    </>
  )
}
