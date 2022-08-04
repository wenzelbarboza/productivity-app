import React, { useContext, useEffect } from 'react'
import { ListContext } from '../../context/Context'
import { Navigate } from "react-router-dom";


const Controls = ({ id }) => {

    const { listReducer, dispatch } = useContext(ListContext)

    // , timerReducer: { timerValue, start, sessionValue, breakValue }, timerDispatch 


    const list = listReducer.filter(item => item.id === id)
    const { timerNumOfPomodoro,
        timerStart,
        timerSessionValue,
        timerBreakValue,
        timerTimerValue,
        timerTimerLabel } = list[0]

    const startHandler = () => {
        dispatch({
            type: "START_STOP",
            payload: {
                id: id,
                timerStart: !timerStart
            }
        })
    }

    const resetHandler = () => {
        dispatch({
            type: "RESET",
            payload: {
                id: id
            }
        })
    }

    // hadle counting time
    const handleCount = () => {
        dispatch({
            type: "START_TIMER",
            payload: {
                id: id,
                timerTimerValue: timerTimerValue - 1
            }
        })
        // if (timerTimerValue === 0) audioSoundRef.current.play();
        if (timerTimerValue <= 0) {
            if (timerTimerLabel === 'session') {

                if (timerNumOfPomodoro > 1) {
                    console.log("id inside if=", id)
                    dispatch({
                        type: "DECREASE_POMO",
                        payload: {
                            id: id,
                            timerNumOfPomodoro: timerNumOfPomodoro - 1
                        }
                    })
                }
                else {
                    dispatch({
                        type: "COMPLETE",
                        id: id
                    })
                    dispatch({
                        type: "DECREASE_POMO",
                        payload: {
                            id: id,
                            timerNumOfPomodoro: timerNumOfPomodoro - 1
                        }
                    })
                }

                dispatch({
                    type: "TOGGLE_LABLE",
                    payload: {
                        id: id,
                        timerTimerLabel: 'break'
                    }
                })

                dispatch({

                    type: "START_TIMER",
                    payload: {
                        id: id,
                        timerTimerValue: (timerBreakValue * 60) - 1,
                    }

                })
            } else {
                dispatch({

                    type: "TOGGLE_LABEL",
                    payload: {
                        id: id,
                        timerTimerLabel: 'session'
                    }

                })
                dispatch({

                    type: "START_TIMER",
                    payload: {
                        timerTimerValue: (timerSessionValue * 60) - 1,
                        id: id
                    }
                })
            }
        }

    }
    console.log(timerTimerValue)

    // to run the clock
    useEffect(() => {
        if (timerStart) {
            let timerInterval = setInterval(() => {
                handleCount();

            }, 1000);
            // Clear interval if the component is unmounted
            return () => clearInterval(timerInterval);
        }
    })

    //handel increment of session
    const sessionIncrementHandler = () => {
        if (timerSessionValue >= 60) return
        dispatch({
            type: "SESSION_INCREMENT",
            payload: {
                id: id,
                timerSessionValue: timerSessionValue + 1,
                timerTimerValue: (timerSessionValue + 1) * 60
            }
        })
    }

    // handel decrement of session
    const sessionDecrementHandler = () => {
        if (timerSessionValue <= 1) return
        dispatch({
            type: "SESSION_DECREMENT",
            payload: {
                id: id,
                timerSessionValue: timerSessionValue - 1,
                timerTimerValue: (timerSessionValue - 1) * 60
            }
        })

    }

    //handel increment of break
    const breakIncrementHandler = () => {
        if (timerSessionValue >= 60) return
        dispatch({
            type: "BREAK_INCREMENT",
            payload: {
                id: id,
                timerBreakValue: timerBreakValue + 1
            }
        })
        console.log(timerBreakValue)
    }

    // handel decrement of break
    const breakDecrementHandler = () => {
        if (timerSessionValue <= 1) return
        dispatch({
            type: "BREAK_DECREMENT",
            payload: {
                id: id,
                timerBreakValue: timerBreakValue - 1
            }
        })
        console.log(timerBreakValue)
    }


    return (
        <div className='diaplay-controls'>
            {!timerNumOfPomodoro && <Navigate to='/' />}
            <div className='controls'>
                <div style={{ cursor: "pointer" }} onClick={startHandler}>{timerStart ? <h3>stop</h3> : <h3>start</h3>}  </div>
                <div style={{ cursor: "pointer" }} onClick={resetHandler}>Reset</div>
            </div>

            <div className="pomodoro-count">{timerNumOfPomodoro}</div>

            <div className='increment-decrement'>
                <div className='increment'>
                    <h5>session</h5>
                    <div>
                        <div style={{ cursor: "pointer" }} onClick={sessionIncrementHandler}>+</div>
                        <div style={{ cursor: "pointer" }} onClick={sessionDecrementHandler}>-</div>
                    </div>
                </div>
                <div className='decrement'>
                    <h5>break</h5>
                    <div>
                        <div style={{ cursor: "pointer" }} onClick={breakIncrementHandler}>+</div>
                        <div style={{ cursor: "pointer" }} onClick={breakDecrementHandler}>-</div>
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