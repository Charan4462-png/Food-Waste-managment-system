import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import '../CSS/Intro.css'

export default function Intro() {
  return (
    <div>
        <div className="intro">
            <div className="content">
                <h1>Turning Surplus into Support — Smart Food Waste Management for a Sustainable Future.</h1>
                <Link to="/register"><Button>Get Started</Button></Link>
            </div>
            <img src="images/Banner.jpg" alt='Banner'/>
        </div>
    </div>
  )
}
