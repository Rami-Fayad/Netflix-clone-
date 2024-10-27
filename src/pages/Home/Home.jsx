import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import banner from '../../assets/new banner.avif'
import caption from '../../assets/caption.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import Card from '../../Components/Cards/Card'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={banner} alt="" className='banner-image' />
        <div className="hero-caption">
          <img src={caption} alt="" className='caption-image'/>
          <p>Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, 
            thwart a killing spree, and solve the mystery that embroiled her parents.
          </p>
          <div className="hero-bts">
         <button className='btn'> <img src={play} alt="" />Play</button>  
         <button className='btn dark-btn'> <img src={info} alt="" />More Info</button>  

          </div >
          <div className="title-card">
          <Card/>
          </div>
        </div>
    
      </div>
      <div className="more-card">
      <Card  
      title={"Blockbuster Movies"}
      catogery= {"popular"}/>
      <Card
      title={"Only on Netflix"}
      catogery= {"top_rated"}/>
      <Card
      title={"Up Coming"}
      catogery= {"upcoming"}
      />
      
      <Card
      title={"Top Picks for u"}
      catogery= {""}
      />

      </div>
      <Footer/>

    </div>
  )
}

export default Home
