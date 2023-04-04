import React, { useEffect } from 'react'
import { canvas } from 'canvas'

const CanvasInimation = () => {
    useEffect(() => {
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')
        let img = document.createElement('img')
        img.src = 'https://s6.uupload.ir/files/images_byd7.png '
        const spriteW = 73,
            spriteH = 86,
            canvasX = 150,
            canvasY = 100
        img.addEventListener('load', () => {
            let cycle = 0
            setInterval(() => {
                ctx.clearRect(canvasX, canvasY, spriteW, spriteH)
                ctx.drawImage(
                    img,
                    cycle * spriteW,
                    0,
                    spriteW,
                    spriteH,
                    canvasX,
                    canvasY,
                    spriteW,
                    spriteH
                )
                cycle = (cycle + 1) % 8
            }, 120)
        })
    }, [])
    return (
        <div className='anime'>
            <canvas width='300' height='200'></canvas>
        </div>
    )
}

export default CanvasInimation
