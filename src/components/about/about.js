import React from 'react'
import './about.css'
import About from '../../img/about.jpg'
import Award from '../../img/Award.jpeg'
const about = () => {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'>

            </div>
            <div className='a-card'>
            <img src={About} alt="about" className="a-img"/>
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>I am a Front-end Developer with 2 years commercial experience and graduate of Internet Technology. I create successful websites that are fast, easy to use, and built with best practices.</p>
<p className='a-desc'>I use HTML, CSS, and JavaScript to produce responsive websites and web apps that provide users the best and most appropriate experience suited to their device and browser.</p>
<div className='a-award'>
  <img src={Award} alt="" className='a-award-img'/>
  <div className='a-award-texts'>
    <h4 className='a-award-title'>Spotlight Award - 2021</h4>
    <p className="a-award-desc">
              Rewarded with Jio Spotlight Award for the year 2021
      </p>
  </div>
</div>
        </div>
    </div>
  )
}

export default about