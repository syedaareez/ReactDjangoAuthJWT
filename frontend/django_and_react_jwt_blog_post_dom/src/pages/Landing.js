import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser,FaUserGraduate } from 'react-icons/fa'
import '../style/landing.css'
export const Landing = () => {
    return (
        <div className='landing'>
            <div className="landing-wrapper">
            <h1>Welcome to the Classroom</h1>
            <h2>Who is using</h2>
            <div className="teacher-student">
              <Link to='/teacherPage' className="teacher-btn"><FaUser className='l-icon'/>Teacher</Link>
              <Link to='/loginSign' className="student-btn"> <FaUserGraduate className='l-icon'/>Student</Link>
            </div>
            </div>
        </div>
    )
}
