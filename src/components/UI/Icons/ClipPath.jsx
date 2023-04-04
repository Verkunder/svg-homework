import React from 'react'

const ClipPath = () => {
    return (
        <svg viewBox='0 0 100 100'>
            <clipPath id='myClip'>
                <circle cx='40' cy='35' r='35' />
            </clipPath>
            <path
                id='heart'
                d='M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z'
            />
            <use clip-path='url(#myClip)' href='#heart' fill='red' />
        </svg>
    )
}

export default ClipPath
