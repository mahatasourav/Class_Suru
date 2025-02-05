import React, { useEffect, useState } from "react";
import { Button } from "../../Components";
import Style from "../../css/questions.module.css";
import QuestionCard from "./QuestionCard";
import { useNavigate } from "react-router-dom";
import thanks from "../../assets/thanks.png"

const Questions = () => {
  const navigate = useNavigate();
  const [progressBar, setProgressBar] = useState(0);
  const [current, setCurrent] = useState(0);
  let totalQuestions = 3;
  const [questions, setQuestions] = useState([
    {
      col_name: "exam",
      heading: "আপনি কোন পরীক্ষার জন্য তৈরী হচ্ছেন?",
      options: ["JEE Mains", "NEET", "WBJEE", "Boards"],
      isMultiple: true,
      answer: [],
    },
    {
      col_name: "class",
      heading: "আপনি কোন শ্রেণীর ছাত্র?",
      options: ["11", "12", "Dropout"],
      isMultiple: false,
      answer: [],
    },
    {
      col_name: "fav_subject",
      heading: "আপনার পছন্দের বিষয় কোনটি?",
      options: ["Physics", "Chemistry", "Mathematics", "Biology"],
      isMultiple: true,
      answer: [],
    },
  ]);

  useEffect(() => {
    let progress = (current / totalQuestions) * 100;
    setProgressBar(progress);
  }, [current]);

  const displayQuestions = () => {
    if (current <= questions.length - 1) {
      return (
        <div className={Style.questionContainer}>
          <div className={Style.questionContainerHeader}>
            {questions[current].heading}
          </div>
          <div className={Style.questionCardContainer}>
            {questions[current].options.map((option, index) => {
              return (
                <QuestionCard
                  key={index}
                  header={option}
                  click={() => {
                    if(!questions[current].isMultiple){
                      let temp = [...questions];
                      temp[current].answer = [];
                      temp[current].answer.push(option);
                      setQuestions(temp);
                      console.log(`${option} selected`);
                      console.log(questions);
                      return;
                    }
                    if (questions[current].answer.includes(option)) {
                      let temp = [...questions];
                      temp[current].answer = temp[current].answer.filter(
                        (item) => item !== option
                      );
                      setQuestions(temp);
                      console.log(`${option} deselected`);
                      console.log(questions);
                      return;
                    }
                    let temp = [...questions];
                    if (!temp[current].answer.includes(option)) {
                      temp[current].answer.push(option);
                    }
                    setQuestions(temp);
                    console.log(`${option} selected`);
                    console.log(questions);
                  }}
                  selected={
                    questions[current].answer.includes(option) ? true : false
                  }
                />
              );
            })}
            
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className={Style.questionContainer}>
            <div className={Style.messageContainer}>
              <div className={Style.messageImg}>
                <img src={thanks} alt="thanks image" />
              </div>

              <div className={Style.messageText}>
              রেজিস্টার করার জন্য ধন্যবাদ 
                </div>
              
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <section className={Style.questionSection}>
        {displayQuestions()}
        <div className={Style.questionNavigationBarContainer}>
          <div
            className={Style.progressBars}
            style={{ width: `${progressBar}%` }}
          ></div>
          <div className={Style.questionNavigationBar}>
            <div className={Style.navigationButtonContainer}>
              <Button
                text="Previous"
                isDisabled={current == 0 ? true : false}
                onClick={() =>{
                  if(current == 0){
                    console.log("First Question");
                  }else
                  {
                    setCurrent(current - 1)
                  }
                  
                }}
              />
              <Button
                text={current == totalQuestions ? "Finish" : "Next"}
                isDisabled={
                  current < questions.length &&
                  questions[current].answer.length == 0
                    ? true
                    : false
                }
                onClick={() =>{ 
                  if(current == totalQuestions){
                    console.log("Submit");
                    navigate("/dashboard");
                  }else
                  {
                  setCurrent(current + 1)
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;
