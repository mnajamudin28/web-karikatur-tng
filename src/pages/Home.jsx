import React from 'react'
import Banner from '../component/Home/Banner.jsx'
import ContactUs from '../component/Home/ContactUs.jsx'
import Header from '../component/Home/Header.jsx'
import OurProcess from '../component/Home/OurProcess.jsx'
import Softcopy from '../component/Home/Softcopy.jsx'
import Themes from '../component/Home/Themes.jsx'
import Address from '../component/Home/Address.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Themes />
      <OurProcess />
      <Softcopy />
      <ContactUs />
      <Address/>
    </div>
  )
}

export default Home