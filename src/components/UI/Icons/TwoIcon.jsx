import React from 'react'

const TwoIcon = () => {
    return (
        <>
            <div>
                <svg>
                    <rect x='50' y='50' width='100' height='50' fill='red' />
                </svg>
            </div>
            <div>
                <svg>
                    <circle cx='100' cy='100' r='50' fill='blue' />
                </svg>
            </div>
            <div>
                <svg>
                    <ellipse cx='100' cy='100' rx='80' ry='50' fill='green' />
                </svg>
            </div>
            <div>
                <svg>
                    <line
                        x1='50'
                        y1='50'
                        x2='150'
                        y2='150'
                        stroke='black'
                        stroke-width='2'
                    />
                </svg>
            </div>
            <div>
                <svg>
                    <polyline
                        points='50,50 100,100 150,50'
                        fill='none'
                        stroke='red'
                        stroke-width='2'
                    />
                </svg>
            </div>
            <div>
                <svg>
                    {/* points - вершины многоугольника */}
                    <polygon
                        points='50,50 100,100 150,50'
                        fill='yellow'
                        stroke='orange'
                        stroke-width='2'
                    />
                </svg>
            </div>
        </>
    )
}

export default TwoIcon
