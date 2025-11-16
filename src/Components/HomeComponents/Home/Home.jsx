import React from 'react'
import Navbar from '../../../Shared/Navbar'
import Footer from '../../../Shared/Footer'
import Banner from '../HeroSection/Banner'
import About from '../About/About'
import MySkills from '../My_Skills/MySkills'
import My_Education from '../My_Education/My_Education'

export default function Home() {
  return (
	<div>
	  <Navbar/>
		  <Banner />
		  <About />
		  <MySkills />
		  <My_Education/>
	  <Footer/>
	</div>
  )
}
