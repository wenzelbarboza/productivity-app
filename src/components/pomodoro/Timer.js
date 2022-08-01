import React from 'react'
import useTimer from './useTimer'

const Timer = () => {

    const timerClock = useTimer()

    return (
        <div className='display-time'>
            <div className="timer-heading">hedding</div>
            <div className='time'><h1>{timerClock}</h1></div>
        </div>
    )
}

export default Timer