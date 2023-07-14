// eslint-disable-next-line no-unused-vars
import React from "react"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />        
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}