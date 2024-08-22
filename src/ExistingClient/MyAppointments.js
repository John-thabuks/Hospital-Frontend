import React, { useState, useEffect } from 'react';
import "./MyAppointment.css"

function MyAppointment() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/Appointments')
            .then(response => response.json())
            .then(data => setAppointments(data))
            .catch(error => console.error('Error fetching appointments:', error));
    }, []);

    const getDoctorName = (department) => {
        const departmentData = {
            "Radiology": ["Dr. John", "Dr. Mary", "Dr. Mercy"],
            "Gynecology": ["Dr. Obadiah", "Dr. Alfred", "Dr. Ochieng"],
            "Dentist": ["Dr. Mwiti", "Dr. Njoroge", "Dr. Kioko"]
        };

        const doctors = departmentData[department];
        return doctors[Math.floor(Math.random() * doctors.length)];
    };

    const getStatus = (preferredTime) => {
        const appointmentDate = new Date(preferredTime);
        const now = new Date();
        return appointmentDate < now ? "Completed" : "Due";
    };

    return (
        <>
            <div className='AParent'>
                <div className='AContainer'>
                    <h2>My Appointments</h2>
                    <h4>Due Appointments</h4>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Doctor's Name</th>
                                <th>Department</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Reason</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map(appointment => {
                                const date = new Date(appointment.preferredTime);
                                const doctorName = getDoctorName(appointment.department);
                                const status = getStatus(appointment.preferredTime);

                                return (
                                    <tr key={appointment.id}>
                                        <td>{doctorName}</td>
                                        <td>{appointment.department}</td>
                                        <td>{date.toLocaleDateString()}</td>
                                        <td>{date.toLocaleTimeString()}</td>
                                        <td>{appointment.reason}</td>
                                        {/* <td>{status}</td> */}
                                        <td ><button className={status === "Due" ? "status-due" : "status-completed"}>
                                            {status}
                                        </button>

                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default MyAppointment;
