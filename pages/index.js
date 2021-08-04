import Head from 'next/head'
import About from '../components/About'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <>
      <Slider />
      <About />
    </>
  )
}
