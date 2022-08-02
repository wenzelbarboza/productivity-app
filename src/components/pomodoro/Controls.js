import React, { useContext, useEffect } from 'react'
import { ListContext } from '../../context/Context'



const Controls = ({ id }) => {

    const { listReducer, timerReducer: { timerValue, start, sessionValue, breakValue }, timerDispatch } = useContext(ListContext)


    const task = listReducer.filter(item => item.id === id)
    console.log(task)

    const startHandler = () => {
        timerDispatch({
            type: "START_STOP",
            start: !start
        })
    }

    // hadle counting time
    const handleCount = () => {
        timerDispatch({
            type: "START_TIMER",
            timerValue: timerValue - 1
        })

    }
    console.log(timerValue)

    useEffect(() => {
        if (start) {
            let timerInterval = setInterval(() => {
                handleCount();

            }, 1000);
            // Clear interval if the component is unmounted
            return () => clearInterval(timerInterval);
        }
    })

    //handel increment of session
    const sessionIncrementHandler = () => {
        timerDispatch({
            type: "SESSION_INCREMENT",
            sessionValue: sessionValue + 1,
            timerValue: (sessionValue + 1) * 60
        })
    }

    // handel decrement of session
    const sessionDecrementHandler = () => {
        timerDispatch({
            type: "SESSION_DECREMENT",
            sessionValue: sessionValue - 1,
            timerValue: (sessionValue - 1) * 60
        })

    }

    //handel increment of break
    const breakIncrementHandler = () => {
        timerDispatch({
            type: "BREAK_INCREMENT",
            breakValue: breakValue + 1
        })
        console.log(breakValue)
    }

    // handel decrement of break
    const breakDecrementHandler = () => {
        timerDispatch({
            type: "BREAK_DECREMENT",
            breakValue: breakValue - 1
        })
        console.log(breakValue)
    }


    return (
        <div className='diaplay-controls'>
            <div className='controls'>
                <div style={{ cursor: "pointer" }} onClick={startHandler}>{start ? <h3>stop</h3> : <h3>start</h3>}  </div>
            </div>
            <div className='increment-decrement'>
                <div className='increment'>
                    <h5>session</h5>
                    <div>
                        <div onClick={sessionIncrementHandler}>+</div>
                        <div onClick={sessionDecrementHandler}>-</div>
                    </div>
                </div>
                <div className='decrement'>
                    <h5>break</h5>
                    <div>
                        <div onClick={breakIncrementHandler}>+</div>
                        <div onClick={breakDecrementHandler}>-</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Controls






        // if (timerValue === 0) audioSoundRef.current.play();
        // if (timerValue < 0) {
        //     if (timerLabel === 'Session') {
        //         timerDispatch({

        //             type: actionTypes.TOGGLE_TIMER_LABEL,
        //             timerLabel: 'Break'
        //         })
        //         timerDispatch({

        //             type: actionTypes.START_TIMER,
        //             timerValue: (breakValue * 60) - 1
        //         })
        //     } else {
        //         timerDispatch({

        //             type: actionTypes.TOGGLE_TIMER_LABEL,
        //             timerLabel: 'Session'
        //         })
        //         timerDispatch({

        //             type: actionTypes.START_TIMER,
        //             timerValue: (sessionValue * 60) - 1
        //         })
        //     }
        // }