import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

// Sets a loader using the React Countdown Circle Timer
function Timer() {
    return (
        <div className='ml-2'>
            <CountdownCircleTimer
                isPlaying
                duration={5}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[5, 3, 2, 0]}
                size={30}
                strokeWidth={3}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}

export default Timer
