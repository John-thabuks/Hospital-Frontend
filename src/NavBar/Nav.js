import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <ul className='nav'>
                <li className='appointment'><Link to='/appointment' className='noUnderline1'> Appointment Booking </Link></li>
            </ul>
            <ul className='nav'>
                <li className='logo'><Link to='/' className='noUnderline'>Logo</Link></li>
                <li className='home'><Link to='/' className='noUnderline'> Home</Link></li>
                <li className='about'><Link to='/about' className='noUnderline'>About</Link></li>
                <li className='service'><Link to='/service' className='noUnderline'>Service</Link></li>
                <li className='doctor'><Link to='/doctors' className='noUnderline'>Our Doctors</Link></li>
                <li className='esg'><Link to='/esg' className='noUnderline'>ESG</Link></li>
                <li className='medical'><Link to='/medical_center' className='noUnderline'>Medical Center</Link></li>
                <li className='contact'><Link to='/contact' className='noUnderline'>Contact us</Link></li>

            </ul>
        </>
    )
}

export default Nav