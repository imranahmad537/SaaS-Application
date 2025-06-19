import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="flex relative font-mono items-center px-5">
      <div className="left">
        <h1>Pathway to productivity</h1>
        <p className=' line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore, adipisci aperiam explicabo sequi porro Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <img src="/" alt="" />
      </div>
      <div className="right">
        <img src="/Visual.png" alt="" />
      </div>
    </div>
    </>
  )
}

export default Home
