import React, { useState } from "react";
import Style from "../../css/Home.module.css";
import { FaPlus } from "react-icons/fa6";

const HomeSec6 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "📚 ক্লাস শুরু-এ কী ধরনের কোর্স অফার করা হয়?",
      answer:
        "We offer specially designed courses for Board Exams, JEE Main, JEE Advanced & NEET UG. প্রত্যেকটা কোর্সেই রয়েছে live classroom sessions, doubt-solving support আর regular mock tests!",
    },

    {
      question: "📖 ক্লাসের সিলেবাস কেমন?",
      answer:
        "The syllabus is fully exam-oriented — সব গুরুত্বপূর্ণ topics covered থাকে JEE/NEET/Board অনুযায়ী।",
    },
    {
      question: "📦 পড়াশোনার উপকরণ কিভাবে ট্র্যাক করব?",
      answer:
        "আমাদের platform-এ সব study materials easily accessible, organized and progress-tracked থাকে।",
    },
    {
      question: "📝 কীভাবে ক্লাস শুরু-এ ভর্তি হব?",
      answer:
        "Just visit our website, register করে basic details submit করলেই enrollment complete!",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={Style.HomeSec6}>
      <div className={Style.headingSection4}>
        <span>প্রায়শই </span>জিজ্ঞাসিত প্রশ্ন (FAQ)
      </div>
      <div className={Style.HomeSec6faqsec}>
        {faqs.map((faq, index) => (
          <div key={index} className={Style.HomeSec6faqsec1}>
            <div
              onClick={() => toggleFAQ(index)}
              className={Style.HomeSec6faqQue}
            >
              {/* <h5>{activeIndex === index ? "×" : <FaPlus />}</h5> */}
              <FaPlus
                className={activeIndex === index ? Style.active : ""}
                style={{
                  transform: activeIndex === index ? "rotate(135deg)" : "none",
                  transition: "transform 0.3s ease",
                }}
              />
              {faq.question}
            </div>
            {/* {activeIndex === index && (
              <div className={Style.HomeSec6faqAns} >
                <h5>উত্তর :</h5>
                {faq.answer}
              </div>
            )} */}
            <div
              className={`${Style.HomeSec6faqAns} ${
                activeIndex === index ? Style.active : ""
              }`}
              style={{
                height: activeIndex === index ? "auto" : "0",
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}
            >
              <h5>উত্তর :</h5>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSec6;
