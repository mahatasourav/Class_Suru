import React from "react";
import Style from "../../css/questions.module.css"
import { Button } from "../../Components";

const QuestionCard = ({header="Card Header",click=()=>console.log("Clicked"),selected=false
,...props}) => {
  // console.log("checking selected" ,selected);
  
  return (
    <div className={Style.questionCard} {...props}>
      <div className={Style.questionCardHeader}>{header}</div>
      <Button text={selected?"Selected":"Select"} onDualMode={true} isHollow={!selected} onClick={click} />
    </div>
  );
};

export default QuestionCard;
