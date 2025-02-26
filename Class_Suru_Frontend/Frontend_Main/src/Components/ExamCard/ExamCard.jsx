import React from 'react'
import Style from "../../css/examcard.module.css"
import Button from '../Button/Button'

const ExamCard = ({text="Card Text",link="/",...props}) => {
  return (
    <div className={Style.examCard} {...props}>
                <div className={Style.examCardDesign}>
                    
                </div>
                <div className={Style.examCardText}>
                    {text}
                </div>
                <div className={Style.examCardButtonSection}>
                    <Button text="Select" isLink={true} link={link} onDualMode={true} isHollow={true}/>
                </div>
            </div>
  )
}

export default ExamCard