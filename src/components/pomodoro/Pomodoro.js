import React from 'react'
import Controls from './Controls'
import Timer from './Timer'
import './Pomodoro.css'

const Pomodoro = () => {
    return (
        <div className='pomodoro-container'>
            <div className='pomodoro-display-container'>
                <Timer />
                <Controls />
            </div>
        </div>
    )
}

export default Pomodoro