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
            <div className="timer-heading">{filtered[0].task}</div>
            <div className='time'><h1 className='heading'>{timerClock}</h1></div>
        </div>
    )
}

export default Timer