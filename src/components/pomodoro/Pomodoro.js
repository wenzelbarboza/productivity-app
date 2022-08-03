import React, { useContext } from 'react'
import Controls from './Controls'
import Timer from './Timer'
import { useLocation } from "react-router-dom"
import './Pomodoro.css'
import { ListContext } from '../../context/Context'

const Pomodoro = () => {

    const location = useLocation()
    console.log("id is=", location.state.id)
    return (
        <div className='pomodoro-container'>
            <div className='pomodoro-display-container'>
                <Timer id={location.state.id} />
                <Controls id={location.state.id} />
            </div>
        </div>
    )
}

export default Pomodoro