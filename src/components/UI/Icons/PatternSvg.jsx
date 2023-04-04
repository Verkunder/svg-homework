import React from 'react'

const PatternSvg = () => {
    return (
        <svg>
            <defs>
                <pattern
                    id='checkerboard'
                    width='20'
                    height='20'
                    patternUnits='userSpaceOnUse'
                >
                    <rect width='20' height='20' fill='#fff' />
                    <rect x='0' y='0' width='10' height='10' fill='#999' />
                    <rect x='10' y='10' width='10' height='10' fill='#999' />
                </pattern>
            </defs>
            <rect
                x='10'
                y='10'
                width='100'
                height='100'
                fill='url(#checkerboard)'
            />
        </svg>
    )
}

export default PatternSvg
