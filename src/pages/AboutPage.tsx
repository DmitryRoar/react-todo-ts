import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()

    return (
        <>
            <h1>Information page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus quae facere nisi quisquam provident reiciendis rem corrupti inventore pariatur.</p>
            <button className='btn' onClick={() => history.push('/')}>Back TO Home</button>
        </>
    )
}