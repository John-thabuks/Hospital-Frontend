// import React, { useState } from 'react'
// import Logo from "../RelativeImages/AARH-Logo.png"
// import DatePicker from "react-datepicker"
// import 'react-datepicker/dist/react-datepicker.css';

// const BookAppointment = () => {

//     const [formData, setFormData] = useState({
//         fullName: '',
//         phoneNumber: '',
//         email: '',
//         department: '',
//         clinic: '',
//         preferredTime: new Date(),
//         gender: '',
//         reason: '',
//     });

//     const [submitted, setSubmitted] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleDateChange = (date) => {
//         setFormData({
//             ...formData,
//             preferredTime: date,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmitted(true);
//         // Optionally, you could also log or send the form data to a server here.
//         console.log(formData);
//         // Clear the form fields
//         setFormData({
//             fullName: '',
//             phoneNumber: '',
//             email: '',
//             department: '',
//             clinic: '',
//             preferredTime: new Date(),
//             gender: '',
//             reason: '',
//         });


//         return (
//             <div>
//                 <div className='Left'>
//                     <h1>Book An Appointment</h1>
//                     <h3>Patient Details</h3>


//                     {submitted && (
//                         <p>Your Appointment has been submitted, wait for approval</p>
//                     )}
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <label>Full Name:</label>
//                             <input
//                                 type="text"
//                                 name="fullName"
//                                 value={formData.fullName}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label>Phone Number:</label>
//                             <input
//                                 type="tel"
//                                 name="phoneNumber"
//                                 value={formData.phoneNumber}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label>Email Address:</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label>Select Department:</label>
//                             <select
//                                 name="department"
//                                 value={formData.department}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value="">Select Department</option>
//                                 <option value="Radiology">Radiology</option>
//                                 <option value="Gynecology">Gynecology</option>
//                                 <option value="Dentist">Dentist</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label>Select Clinic:</label>
//                             <select
//                                 name="clinic"
//                                 value={formData.clinic}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value="">Select Clinic</option>
//                                 <option value="Dentist">Dentist</option>
//                                 <option value="Obsidian">Obsidian</option>
//                                 <option value="Scan">Scan</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label>Select Preferred Time:</label>
//                             <DatePicker
//                                 selected={formData.preferredTime}
//                                 onChange={handleDateChange}
//                                 showTimeSelect
//                                 dateFormat="Pp"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label>Gender:</label>
//                             <select
//                                 name="gender"
//                                 value={formData.gender}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value="">Select Gender</option>
//                                 <option value="Male">Male</option>
//                                 <option value="Female">Female</option>
//                                 <option value="Other">Other</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label>Reason For Your Appointment:</label>
//                             <textarea
//                                 name="reason"
//                                 value={formData.reason}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>



//                 <div className='Right'>
//                     <img src={Logo} alt="Logo" />
//                 </div>
//             </div>
//         )
//     }
// }

// export default BookAppointment

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./BookAppointment.css"

function BookAppointment() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        department: '',
        clinic: '',
        preferredTime: new Date(),
        gender: '',
        reason: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            preferredTime: date,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log(formData);
        setFormData({
            fullName: '',
            phoneNumber: '',
            email: '',
            department: '',
            clinic: '',
            preferredTime: new Date(),
            gender: '',
            reason: '',
        });
    };


    const now = new Date();

    const isTodaySelected =
        formData.preferredTime.toDateString() === now.toDateString();

    return (
        <div>
            <h2>Book an Appointment</h2>
            {submitted && (
                <p>Your Appointment has been submitted, wait for approval</p>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Select Department:</label>
                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Department</option>
                        <option value="Radiology">Radiology</option>
                        <option value="Gynecology">Gynecology</option>
                        <option value="Dentist">Dentist</option>
                    </select>
                </div>
                <div>
                    <label>Select Clinic:</label>
                    <select
                        name="clinic"
                        value={formData.clinic}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Clinic</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Obsidian">Obsidian</option>
                        <option value="Scan">Scan</option>
                    </select>
                </div>
                <div>
                    <label>Select Preferred Time:</label>
                    <DatePicker
                        selected={formData.preferredTime}
                        onChange={handleDateChange}
                        showTimeSelect
                        dateFormat="Pp"
                        minDate={now}  // Prevent selecting dates in the past
                        minTime={isTodaySelected ? now : undefined} // Limit time if today is selected
                        maxTime={new Date().setHours(23, 59)} // Latest possible time in the day
                        required
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Reason For Your Appointment:</label>
                    <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BookAppointment;
