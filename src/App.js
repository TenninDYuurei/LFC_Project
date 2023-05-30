import React from "react";
import Header from "./childrenComponents/header/header";
import Footer from "./childrenComponents/footer/footer";
import './App.css';
import Main from "./childrenComponents/pages/homepage/main";
import {Routes, Route} from 'react-router-dom';
import Announcements from "./childrenComponents/pages/announcements";
import About from "./childrenComponents/pages/about/about";
import PrayerReqsPage from "./childrenComponents/pages/prayerRequests";
import Gallery from "./childrenComponents/pages/gallery/gallery";
import Devotionals from "./childrenComponents/pages/devotionalMessages";
import VideoSkit from "./childrenComponents/pages/gallery/videoSkitPage";
import Images from "./childrenComponents/pages/gallery/captionedImages";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Main}/>
        <Route path="/announcements" Component={Announcements}/>
        <Route path="/about" Component={About} />
        <Route path="/gallery" Component={Gallery}/>
        <Route path="/devotionals" Component={Devotionals}/>
        <Route path="/images" Component={Images} />
        <Route path="/videos" Component={VideoSkit} />
        <Route path="/prayerReqs" Component={PrayerReqsPage} />
        <Route path="*" Component={Main} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
