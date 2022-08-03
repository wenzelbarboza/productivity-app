import React, { useContext } from 'react'
import useTimer from './useTimer'
import { ListContext } from '../../context/Context';


const Timer = ({ id }) => {
    const { listReducer } = useContext(ListContext)

    console.log(id)
    const filtered = listReducer.filter(item => item.id === id)
    console.log("Timer=", filtered)

    const timerClock = useTimer(filtered[0].timerTimerValue)

    return (
        <div className='display-time'>
            <div className="timer-heading">hedding</div>
            <div className='time'><h1>{timerClock}</h1></div>
        </div>
    )
}

export default Timer