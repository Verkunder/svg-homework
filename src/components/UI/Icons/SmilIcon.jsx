import React from 'react'

const SmilIcon = () => {
    return (
        <svg width='300' height='100'>
            <title>Attribute Animation with SMIL</title>
            <rect
                x='0'
                y='0'
                width='300'
                height='100'
                stroke='black'
                stroke-width='1'
            />
            <circle
                cx='0'
                cy='50'
                r='15'
                fill='blue'
                stroke='black'
                stroke-width='1'
            >
                <animate
                    attributeName='cx'
                    from='0'
                    to='500'
                    dur='5s'
                    repeatCount='indefinite'
                />
            </circle>
        </svg>
    )
}

export default SmilIcon
