import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Contact from '../components/Contact.jsx'

function ContactUs() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'><Contact /></div>
    <Footer />
    </>
  )
}

export default ContactUs