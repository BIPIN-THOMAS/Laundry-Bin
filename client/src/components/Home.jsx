import React from 'react'
import logo from "../assets/Group 1072.svg"
import signal from "../assets/react.svg"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <Link to="/intro" className='loundrybin_img'>
        <img src={logo} alt="" />
      <h1 className='loundrybin_heading'>Launtrybin</h1>
    </Link>
  )
}

export default Home
