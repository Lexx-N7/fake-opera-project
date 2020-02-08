import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Banners from "./components/Banners";
import Carousel from "./components/Carousel";
import AltBanner from "./components/AltBanner";
import MobBanner from "./components/MobBanner";
import OperaItems from "./components/OperaItems";
import Browsing from './components/Browsing'
import Community from './components/Community'
import Reviews from './components/Reviews'
import DownloadBanner from './components/DownloadBanner'
import Footer from './components/Footer'

let checkOS =(os)=>{
  return window.navigator.appVersion.indexOf(os)
}
let os;
if(checkOS('Windows') !== -1){
  os = 'windows'
}else if(checkOS("Linux") !== -1){
  os = 'linux'
} else {
  console.log('your system sucks')
}
export {os};

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About />
      <Banners />
      <Carousel />
      <AltBanner />
      <MobBanner />
      <OperaItems />
      <Browsing/>
      <Community/>
      <Reviews/>
      <DownloadBanner/>
      <Footer/>
    </>
  );
}

export default App;
