import React from 'react'

const GradientIcons = () => {
    return (
        <>
            <div>
                <svg>
                    <defs>
                        <linearGradient
                            id='myGradient'
                            x1='0%'
                            y1='0%'
                            x2='100%'
                            y2='0%'
                        >
                            <stop offset='0%' stop-color='red' />
                            <stop offset='100%' stop-color='blue' />
                        </linearGradient>
                    </defs>
                    <rect
                        x='10'
                        y='10'
                        width='50'
                        height='50'
                        fill='url(#myGradient)'
                    />
                </svg>
            </div>
            <div>
                <svg>
                    <defs>
                        <radialGradient
                            id='myGradient2'
                            cx='50%'
                            cy='50%'
                            r='50%'
                            fx='50%'
                            fy='50%'
                        >
                            <stop offset='0%' stop-color='red' />
                            <stop offset='100%' stop-color='blue' />
                        </radialGradient>
                    </defs>
                    <rect
                        x='10'
                        y='10'
                        width='50'
                        height='50'
                        fill='url(#myGradient2)'
                    />
                </svg>
            </div>
        </>
    )
}

export default GradientIcons
