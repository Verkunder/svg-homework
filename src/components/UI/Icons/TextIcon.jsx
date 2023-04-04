import React from 'react'

const TextIcon = () => {
    return (
        <>
            <div>
                <svg>
                    <text x='50' y='50' font-size='24'>
                        <tspan fill='red'>Hello</tspan>
                        <tspan fill='blue' dx='10'>
                            world!
                        </tspan>
                    </text>
                </svg>
            </div>
            <div>
                <svg>
                    <path id='path' d='M 10 10 L 90 90' stroke='black' />
                    <text>
                        <textPath href='#path' startOffset='10%'>
                            Follow the path!
                        </textPath>
                    </text>
                </svg>
            </div>
        </>
    )
}

export default TextIcon
