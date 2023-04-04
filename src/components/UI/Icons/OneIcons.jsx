import React from 'react'

/* 
 viewBox - определяет координаты и масштаб элемента SVG.

 preserveAspectRatio - определяет, как элемент SVG должен быть масштабирован и выровнен внутри области viewBox.

 - none: элемент не масштабируется и не выравнивается
- xMinYMin: элемент выравнивается по левому верхнему углу области viewBox
- xMidYMin: элемент выравнивается по вертикальной середине верхней границы области viewBox
- xMaxYMin: элемент выравнивается по правому верхнему углу области viewBox
- xMinYMid: элемент выравнивается по горизонтальной середине левой границы области viewBox
- xMidYMid: элемент выравнивается по центру области viewBox
- xMaxYMid: элемент выравнивается по горизонтальной середине правой границы области viewBox
- xMinYMax: элемент выравнивается по левому нижнему углу области viewBox
- xMidYMax: элемент выравнивается по вертикальной середине нижней границы области viewBox
- xMaxYMax: элемент выравнивается по правому нижнему углу области viewBox
*/

const OneIcons = () => {
    return (
        <svg viewBox='0 0 500 300' preserveAspectRatio='xMidYMid'>
            <rect x='200' y='125' width='100' height='50' fill='blue' />
        </svg>
    )
}

export default OneIcons
