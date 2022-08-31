import { useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import VillainsPage from "./Pages/VillainsPage/VillainsPage";
import { Routes,Route } from "react-router-dom";
import AlliesPage from "./Pages/AbilitiesPage/AlliesPage";

const navBarModel={
  title:"Dark Knight",
  iconClass:'',
  imgSrc:'batman-logo.png',
  navButtonList:[
    {
      iconClass:'fa-solid fa-house',
      title:'Home',
      link:'/'
    },
    {
      iconClass:'fa-solid fa-biohazard',
      title:'Villains',
      link:'/villains'
    },
    {
      
      iconClass:'fa-solid fa-handshake-angle',
      title:'Allies',
      link:'/allies'
    },
    {
      iconClass:'fa-solid fa-circle-info', 
      title:'Support',
      link:''
    }
  ]

}

function App() {
  useEffect(()=>{
    var theme="light";    //default to light
    //local storage is used to override OS theme settings
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") === "dark"){
             theme = "dark";
        }
    } else if(!window.matchMedia) {
        //matchMedia method not supported
        console.log("matchmedia not supported");
        return;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
         theme = "dark";
    }
  
    document.documentElement.setAttribute("data-theme", theme);

  },[]);
  return (
    <>
      <NavBar {...navBarModel}/>
      <div className="app-body">
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="villains" element={<VillainsPage/>}/>
            <Route path="allies"  element={<AlliesPage/>}/>
            <Route path="*" element={<HomePage/>}/>
            
        </Routes>
      </div>
      <Footer imgSrc = {navBarModel.imgSrc} title={navBarModel.title}/>
     </>
  );
}

export default App;
