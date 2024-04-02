import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero' 
import Join from './components/login-signup/Join' 
import Content from './components/contents/Content'
import Content1 from './components/content1/Content1'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
     <Navbar/> 
     <Hero/> 
    <Content/> 
    <Content1/> 
    <Footer/>
    </>
  )
}

export default App
