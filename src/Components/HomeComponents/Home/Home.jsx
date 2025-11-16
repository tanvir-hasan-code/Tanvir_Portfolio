import React from 'react'
import Navbar from '../../../Shared/Navbar'
import Footer from '../../../Shared/Footer'
import Banner from '../HeroSection/Banner'
import About from '../About/About'

export default function Home() {
  return (
	<div>
	  <Navbar/>
		  <Banner />
		  <About/>
	  <Footer/>
	</div>
  )
}
