import React, { useContext } from 'react'
import Controls from './Controls'
import Timer from './Timer'
import { useLocation } from "react-router-dom"
import './Pomodoro.css'
import { ListContext } from '../../context/Context'

const Pomodoro = () => {

    const location = useLocation()

    return (
        <div className='pomodoro-container'>
            <div className='pomodoro-display-container'>
                <Timer />
                <Controls id={location.state.id} />
            </div>
        </div>
    )
}

export default Pomodoro