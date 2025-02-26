import React, { useMemo, useRef, useState } from "react";
import { Button } from "../../../Components";
import { FaArrowLeft } from "react-icons/fa";
import Style from "../../../css/createQuestionSet.module.css";
import { useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

const Question = () => {
  const { examName, subjectName } = useParams();

  const [setName, setSetName] = useState("");
  const [setDuration, setSetDuration] = useState(0);
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState("");

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

  return (
    <>
      <div className={Style.adminCreateQuestionSetContainerPage}>
        <div className={Style.backSection}>
          <Button
            text="Back"
            isLink={true}
            link={`/admin/list/${examName}/${subjectName}/createQuestionSet`}
            className={Style.backButton}
            onDualMode={true}
            isHollow={true}
          >
            <FaArrowLeft />
          </Button>
        </div>
        <div className={Style.createQuestionSetContainer}>
          <div className={Style.inputSection}>
            <label htmlFor="questionSet">Question Title</label>
            <input
              value={setName}
              type="text"
              id="questionSet"
              name="questionSet"
              placeholder="Enter Question Title"
              onChange={(e) => setSetName(e.target.value)}
            />
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionSetDescription">Question Body</label>
            <JoditEditor
              ref={editor}
              className={Style.questionBody}
              value={questionBody}
              config={configQuestionBody}
              tabIndex={1}
              onBlur={(newContent) => setQuestionBody(newContent)}
              onChange={(newContent) => {}}
            />
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionOption1">
              <b>Option 1</b>
            </label>
            <JoditEditor
              ref={editor}
              value={option1}
              config={configOption}
              tabIndex={1}
              onBlur={(newContent) => setOption1(newContent)}
              onChange={(newContent) => {}}
            />
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionOption1">
              <b>Option 1</b>
            </label>
            <JoditEditor
              ref={editor}
              value={option1}
              config={configOption}
              tabIndex={1}
              onBlur={(newContent) => setOption1(newContent)}
              onChange={(newContent) => {}}
            />
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionOption1">
              <b>Option 1</b>
            </label>
            <JoditEditor

              ref={editor}
              value={option1}
              config={configOption}
              tabIndex={1}
              onBlur={(newContent) => setOption1(newContent)}
              onChange={(newContent) => {}}
            />
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionOption1">
              <b>Option 1</b>
            </label>
            <JoditEditor
              ref={editor}
              value={option1}
              config={configOption}
              tabIndex={1}
              onBlur={(newContent) => setOption1(newContent)}
              onChange={(newContent) => {}}
            />
          </div>
          

          <Button text="Submit" className={Style.createButton} />
        </div>
      </div>
    </>
  );
};

export default Question;
