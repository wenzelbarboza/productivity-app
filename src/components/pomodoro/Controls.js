import React from 'react'

const Controls = () => {

    return (
        <div className='diaplay-controls'>
            <div className='controls'>
                <div> <h3>start</h3> </div>
                <div><h3>stop</h3></div>
            </div>
            <div className='increment-decrement'>
                <div className='increment'>
                    <h5>session</h5>
                    <div>
                        <div>+</div>
                        <div>-</div>
                    </div>
                </div>
                <div className='decrement'>
                    <h5>break</h5>
                    <div>
                        <div>+</div>
                        <div>-</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Controls