import React from 'react'
import '../css/Resume.css'
import resume from '../attachments/resume.pdf' 

function Resume () {
    return (
        <div>
            <a href={resume}>Resume</a>
        </div>
    )
}

export default Resume