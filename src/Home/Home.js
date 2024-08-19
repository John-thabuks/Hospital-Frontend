import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div className='main'>
            <div className='main_one'>
                <div className='easy_scheduling'>
                    <h2>Easy Scheduling ahead</h2>
                    <p>AAR Hospital has a portal for scheduling an appointment professionally and efficiently eliminating
                        waiting in que for long hours so you can get back to work.
                    </p>
                </div>
                <div className='easy_image'>
                </div>
            </div>
            <div className='main_two'>
                <div className='booking_steps'>
                    <div className='numbers'>
                        <h2>1</h2>
                    </div>

                    <div className='headingNum'>
                        <h3>Enter Phone Number</h3>
                    </div>

                    <p>The first step to booking an appointment.</p>

                </div>

                <div className='booking_steps'>
                    <div className='numbers'>
                        <h2>2</h2>
                    </div>
                    <div className='headingNum'>
                        <h3>Book Appointment</h3>
                    </div>

                    <p>Select your preferred appointment date.</p>

                </div>
                <div className='booking_steps'>
                    <div className='numbers'>
                        <h2 >3</h2>
                    </div>
                    <div className='headingNum'>
                        <h3>View booked appointments</h3>
                    </div>

                    <p>View your booked appointments</p>

                </div>
            </div>


            <div className='main_three'>
                <h1>Do more of what you do best</h1>
                <p>With scheduling and interruptions gone, your day is cleared for
                    accomplishment.</p>
            </div>


        </div>
    )
}

export default Home