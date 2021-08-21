import '../styles/_variables.css'
import { GlobalStyle } from '../styles/GlobalStyle'
import Layout from '../components/Layout'
import React, { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [about, setAbout] = useState(false)
  const [academics, setAcademics] = useState(false)
  const [admission, setAdmission] = useState(false)
  const [download, setDownload] = useState(false)
  const [calendar, setCalendar] = useState(false)

  return (
    <>
      <Layout
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
      >
        <GlobalStyle />
        <Component
          {...pageProps}
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
      </Layout>
    </>
  )
}

export default MyApp
