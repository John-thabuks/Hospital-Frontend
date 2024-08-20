import React from 'react';
import './welcome.css'
import WelcomeImage from "../RelativeImages/WelcomePage.png"
import welcomeCalender from "../RelativeImages/welcomeCalender.png"

const Welcome = () => {
    return (
        <div>
            <table class="custom-table">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <div className='firstHeading'>
                <h2>Get Started</h2>
                <p>Start yoour appointment journey and management</p>
                <button className='gettingStarted'>Get Started </button>
                <button>My Appointment</button>
            </div>

            <div>
                <img src={WelcomeImage} alt="Welcome" className='Welcomeimg' />
            </div>

            <div className='quote'>
                <p>"</p>
                <p>Make it easy to keep track of your appointment</p>
            </div>

            <div className='welcomeCalender'>
                <img src={welcomeCalender} alt="Calender" />
            </div>
        </div>
    );
}

export default Welcome;
