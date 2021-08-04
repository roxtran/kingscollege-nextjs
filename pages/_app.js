import '../styles/_variables.css'
import { GlobalStyle } from '../styles/GlobalStyle'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
