import React from 'react'
import { useState } from 'react'
import './appointment.css'
import data from './data.json'


const Appointment = () => {
    const [phone, setphone] = useState("+254")
    const [verificationCode, setVerificationCode] = useState("")
    const [generatedCode, setGeneratedCode] = useState(null)
    const [isVerified, setIsVerified] = useState(false)
    const [showVerificationInput, setShowVerificationInput] = useState(false)

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\+254\d*$/.test(value)) {
            setphone(value);
        }
    }

    const generateCode = () => {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const code = generateCode()
        setGeneratedCode(code)
        setShowVerificationInput(true)
        alert(`Your verification code is: ${code}`)
    }

    const handleVerification = (e) => {
        e.preventDefault()
        if (verificationCode === generatedCode) {
            setIsVerified(true)
            if (data.phoneNumbers.includes(phone)) {
                window.location.href = '/welcome'
            }
            else {
                window.location.href = '/consent'
            }
        }
        else {
            alert("Incorrect verification code. Please try again.")
        }
    }

    return (
        <>
            <div className='parent'>
                <div className='childImage'></div>
                <div className='childTitle'>
                    <h1>Reserve Your Appointment</h1>
                </div>
            </div>

            <div className='theForm'>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder='Enter Phone Number'
                        name='phone'
                        value={phone}
                        onChange={handleChange}
                        maxLength="13"
                        pattern="\+254\d{9}"
                        required
                        className='formNum' />
                    <button type='submit' className='button'>Submit</button>
                </form>


            </div>
            <div className='verificationCode'>
                {showVerificationInput && (
                    <form onSubmit={handleVerification}>
                        <input type="text"
                            placeholder='Enter Verification Code'
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            maxLength="4"
                            required
                            className='formNum' />
                        <button type='submit' className='button'>Verify</button>
                    </form>
                )}
            </div>

            <div>
                <div className='imageAppointment'></div>
            </div>
        </>
    )
}

export default Appointment