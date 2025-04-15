import React, { useState } from "react";
import Style from "../../css/Home.module.css";
import { FaPlus } from "react-icons/fa6";

const HomeSec6 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "ক্লাস শুরু-এ কী ধরনের কোর্স অফার করা হয়?",
      answer:
        "আমরা বোর্ড পরীক্ষা, JEE Main, JEE Advanced, NEET UG এবং UGC-NET-এর জন্য বিশেষভাবে ডিজাইন করা কোর্স অফার করি। প্রতিটি কোর্সে ক্লাসরুম, সমস্যা সমাধান, এবং মক টেস্ট অন্তর্ভুক্ত রয়েছে।",
    },
    {
      question: "ক্লাস মিস হলে কী হবে?",
      answer:
        "আপনি রেকর্ড করা ক্লাস দেখতে পারবেন এবং প্রয়োজনীয় সহায়তা পাবেন।",
    },
    {
      question: "ক্লাসের সিলেবাস কেমন হয়?",
      answer:
        "সিলেবাসটি সম্পূর্ণ এবং পরীক্ষার জন্য প্রয়োজনীয় সমস্ত বিষয় অন্তর্ভুক্ত করে।",
    },
    {
      question: "কীভাবে পড়াশোনার উপকরণ ট্র্যাক করা হয়?",
      answer:
        "আমাদের প্ল্যাটফর্মে সমস্ত উপকরণ সহজেই অ্যাক্সেসযোগ্য এবং ট্র্যাক করা যায়।",
    },
    {
      question: "কীভাবে ক্লাস শুরু-এ ভর্তি হওয়া যাবে?",
      answer:
        "আমাদের ওয়েবসাইটে গিয়ে নিবন্ধন করুন এবং প্রয়োজনীয় তথ্য প্রদান করুন।",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={Style.HomeSec6}>
        <div className={Style.headingSection4}>
          <span >প্রায়শই </span>জিজ্ঞাসিত প্রশ্ন
          (FAQ)
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
