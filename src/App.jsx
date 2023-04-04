import React from 'react'
import OneIcons from './components/UI/Icons/OneIcons'
import TwoIcon from './components/UI/Icons/TwoIcon'
import ThreeIcon from './components/UI/Icons/ThreeIcon'
import FourIcon from './components/UI/Icons/FourIcon'
import GradientIcons from './components/UI/Icons/GradientIcons'
import PatternSvg from './components/UI/Icons/PatternSvg'
import TextIcon from './components/UI/Icons/TextIcon'
import TransformIcon from './components/UI/Icons/TransformIcon'
import './index.css'
import ClipPath from './components/UI/Icons/ClipPath'
import ImageIcon from './components/UI/Icons/ImageIcon'
import SmilIcon from './components/UI/Icons/SmilIcon'
import CanvasInimation from './components/UI/Icons/CanvasInimation'

const App = () => {
    return (
        <>
            <div>
                <OneIcons />
            </div>
            <div>
                <TwoIcon />
            </div>
            <div>
                <ThreeIcon />
            </div>
            <div>
                <FourIcon />
            </div>
            <div>
                <GradientIcons />
            </div>
            <div>
                <PatternSvg />
            </div>
            <div>
                <TextIcon />
            </div>
            <div>
                <TransformIcon />
            </div>
            <div>
                <ClipPath />
            </div>
            <div>
                <ImageIcon />
            </div>
            <div>
                <SmilIcon />
            </div>
            <div>
                <CanvasInimation />
            </div>
        </>
    )
}

export default App
