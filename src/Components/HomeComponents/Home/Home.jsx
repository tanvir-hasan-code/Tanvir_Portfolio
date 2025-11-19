import React from "react";
import Navbar from "../../../Shared/Navbar";
import Footer from "../../../Shared/Footer";
import Banner from "../HeroSection/Banner";
import About from "../About/About";
import MySkills from "../My_Skills/MySkills";
import My_Education from "../My_Education/My_Education";
import MyProject from "../Projects/MyProject";
import { useState } from "react";
import ContactModal from "../ContactModal/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Navbar onContactClick={() => setIsModalOpen(true)}/>
      <Banner onContactClick={() => setIsModalOpen(true)} />
      <About />
      <MySkills />
      <My_Education />
      <MyProject />
      <Footer />

      {isModalOpen &&   <ContactModal onClose={()=>setIsModalOpen(false)}/>}
    </div>
  );
}
