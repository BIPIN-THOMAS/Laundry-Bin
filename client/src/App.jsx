import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Intro from './components/Intro'
import Log_reg from './components/Log_reg'
import Registration from './components/Registration'
import Login from './components/Login'
import Otp from './components/Otp'
import Forgot from './components/Forgot'
import Otpverify from './components/Otpverify'
import Newpass from './components/Newpass'
import Changepsw from './components/Changepsw'

import { Component } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/intro' Component={Intro} />
        <Route path='/log_reg' Component={Log_reg} />
        <Route path='/registration' Component={Registration} />
        <Route path='/login' Component={Login} />
        <Route path='/otp' Component={Otp} />
        <Route path='/forgot' Component={Forgot} />
        <Route path='/otpverify' Component={Otpverify} />
        <Route path='/newpass' Component={Newpass} />
        <Route path='/changepsw' Component={Changepsw} />

      </Routes>
    </>
  )
}

export default App


