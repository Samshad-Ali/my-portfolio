import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import {MdOutlineEngineering} from 'react-icons/md';
import {AiOutlineMenu} from 'react-icons/ai'
const App = () => {

  const [isBar,setIsBar] = useState(false);
  const handleBtn=()=>{
    setIsBar(!isBar)
  }

  return (
    <>
         <button onClick={handleBtn} className={`hamburger`}>
        <AiOutlineMenu />
      </button>
      <Header/>
      <Home />
      <Work />
      <Skills />
      <Contact />
      <Toaster />
      <Footer />
      <PhoneHeader isBar={isBar} setIsBar={setIsBar} />
    </>
  );
};

export default App;


const PhoneHeader = ({isBar,setIsBar}) => {
  return (
    
    <div className={`navPhone ${isBar?"phoneNavCome":""}`}>
            <h2>Samshad Ali <MdOutlineEngineering />
      </h2>
      <div>
        <a href="#home" onClick={()=>{setIsBar(false)}}>Home</a>
        <a href="#work" onClick={()=>{setIsBar(false)}}>Work</a>
        <a href="#skills" onClick={()=>{setIsBar(false)}}>
          Skill
        </a>
        <a href="#contact" onClick={()=>{setIsBar(false)}} >Contact</a>
      </div>
      <a href="mailto: sam606166@gmail.com">
        <button>Email</button>
      </a>
    </div>
  );
};
