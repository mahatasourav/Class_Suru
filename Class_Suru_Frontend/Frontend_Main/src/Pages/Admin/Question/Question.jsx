import React, { useMemo, useRef, useState } from "react";
import { Button } from "../../../Components";
import { FaArrowLeft } from "react-icons/fa";
import Style from "../../../css/createQuestionSet.module.css";
import { useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import apiCall from "../../../utils/apiCall";
import { createQuestionApi } from "../../../apis";

import toast, { Toaster } from "react-hot-toast";

const Question = () => {
  const { examName, subjectName,examId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState(1);
  const [correct, setCorrect] = useState(1);
  const [wrong, setWrong] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("None");



  const editor = useRef(null);
  const [questionBody, setQuestionBody] = useState("");

  const configQuestionBody = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: "Enter Question Body...",
    }),
    [questionBody]
  );

  const configOption = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: "Enter Option...",
    }),
    [option1, option2, option3, option4]
  );


  const handleSubmit = async(e)=>{
    e.preventDefault();
    const data = {
      exam_id: examId,
      question_text: questionBody,
      question_img_url: imgUrl, 
      option_1: option1,
      option_2: option2,
      option_3: option3,
      option_4: option4,
      correct_marks: correct, 
      correct_option: correctOption,
      wrong_marks: wrong
    }
    try {
      setLoading(true);
      const response = await apiCall.post(createQuestionApi, data);
      console.log(response);
      if(response.status === 201)
      {
        toast.success("Question Created Successfully");
          setTimeout(() => {
            navigate(-1);
          }, 2000);

        
      }
      
    } catch (error) {
      console.log(error);
      
    }
    finally
    {
      setLoading(false);
    }
    
  }

  return (
    <>
      <div className={Style.adminCreateQuestionSetContainerPage}>
        <div className={Style.backSection}>
          <Button
            text="Back"
            // isLink={true}
            // link={`/admin/list/${examName}/${subjectName}/createQuestionSet`}
            onClick={() => navigate(-1)}
            className={Style.backButton}
            onDualMode={true}
            isHollow={true}
          >
            <FaArrowLeft />
          </Button>
        </div>
        <form className={Style.createQuestionSetContainer} >
          {/* <div className={Style.inputSection}>
            <label htmlFor="questionSet">Question Title <span className={Style.required}>*</span></label>
            <input
              value={name}
              type="text"
              id="questionSet"
              name="questionSet"
              placeholder="Enter Question Title"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div> */}
          {/* <div className={Style.inputSection}>
            <label htmlFor="questionSetDescription">Question Image ( &lt; 2kb )</label>
            <input className={Style.chooseImage} type='file' placeholder='Choose Qusetion Image' onChange={()=>setImgUrl(e)} />
            <div className={Style.imagePreview}>
              {imgUrl && <img className={Style.image} src={imgUrl} alt='imageurl'  />}
            </div>
          </div> */}
          <div className={Style.inputSection}>
            <label htmlFor="questionSetDescription">Question Body <span className={Style.required}>*</span></label>
            <JoditEditor
              ref={editor}
              className={Style.questionBody}
              value={questionBody}
              config={configQuestionBody}
              tabIndex={1}
              onBlur={(newContent) => setQuestionBody(newContent)}
              onChange={(newContent) => {}}
              required
            />
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionOption1">
              <b>Option 1 <span className={Style.required}>*</span></b>
            </label>
            <JoditEditor
              ref={editor}
              value={option1}
              config={configOption}
              tabIndex={1}
              onBlur={(newContent) => setOption1(newContent)}
              onChange={(newContent) => {}}
              required
            />
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionOption1">
              <b>Option 2 <span className={Style.required}>*</span></b>
            </label>
            <JoditEditor
              ref={editor}
              value={option2}
              config={configOption}
              tabIndex={1}
              onBlur={(newContent) => setOption2(newContent)}
              onChange={(newContent) => {}}
              required
            />
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionOption1">
              <b>Option 3 <span className={Style.required}>*</span></b>
            </label>
            <JoditEditor
              ref={editor}
              value={option3}
              config={configOption}
              tabIndex={1}
              onBlur={(newContent) => setOption3(newContent)}
              onChange={(newContent) => {}}
              required
            />
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionOption1">
              <b>Option 4 <span className={Style.required}>*</span></b>
            </label>
            <JoditEditor
              ref={editor}
              value={option4}
              config={configOption}
              tabIndex={1}
              onBlur={(newContent) => setOption4(newContent)}
              onChange={(newContent) => {}}
              required
            />
          </div>

          <div className={Style.inputSection}>
            <label htmlFor="correct_question_set">Correct Question No. <span className={Style.required}>*</span></label>
            <input
              value={correctOption}
              type="number"
              id="correct_question_set"
              name="correct_question_set"
              placeholder="Enter Question Title"
              min={1}
              max={4}
              onChange={(e) => setCorrectOption(e.target.value)}
              required
            />
          </div>

          <div className={Style.inputSection}>
            <label htmlFor="correct_question_marks">Correct Marks(+) <span className={Style.required}>*</span></label>
            <input
              value={correct}
              type="number"
              id="correct_question_marks"
              name="correct_question_marks"
              placeholder="For Example 1 means +1"
              min={1}
              onChange={(e) => setCorrect(e.target.value)}
              required
            />
          </div>

          <div className={Style.inputSection}>
            <label htmlFor="wrong_question_set">Wrong Marks(-) <span className={Style.required}>*</span></label>
            <input
              value={wrong}
              type="number"
              id="wrong_question_set"
              name="wrong_question_set"
              placeholder="For Example 1 means -1"
              min={0}
              onChange={(e) => setWrong(e.target.value)}
              required
            />
          </div>

          <Button text="Submit" className={Style.createButton} isLoading={loading}  onClick={handleSubmit} isDisabled={loading} />
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default Question;
