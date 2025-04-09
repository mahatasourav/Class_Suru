import React, { useMemo, useRef, useState } from "react";
import { Button } from "../../../Components";
import { FaArrowLeft } from "react-icons/fa";
import Style from "../../../css/createQuestionSet.module.css";
import { useNavigate, useParams } from "react-router-dom";

import apiCall from "../../../utils/apiCall";
import { createExamApi } from "../../../apis";

const CreateQuestionSet = () => {
  const { examName, subjectName } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState();
  const [totalMarks, setTotalMarks] = useState(0);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // e.preventDefault();

    // console.log("Button Clicked");

    // console.log("Loading...");

    try {
      const data = {
        title: name,
        type: examName,
        exam_description: description,
        exam_duration: duration.toString(),
        exam_total_marks: totalMarks.toString(),
        exam_subject: subjectName,
      };

      // console.log(data);

      setLoading(true);

      const response = await apiCall.post(createExamApi, data);

      // console.log(response);

      if (response.status === 201) {
        console.log("Exam Created Successfully");
        // alert("Exam Created Successfully");
        console.log(response.data);
        navigate(
          `/admin/list/${examName}/${subjectName}/createQuestionSet/questionlist/${response.data.exam.id}`
        );
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={Style.adminCreateQuestionSetContainerPage}>
        <div className={Style.backSection}>
          <Button
            text="Back"
            isLink={true}
            link={`/admin/list/${examName}/${subjectName}`}
            className={Style.backButton}
            onDualMode={true}
            isHollow={true}
          >
            <FaArrowLeft />
          </Button>
        </div>
        <div className={Style.createQuestionSetContainer}>
          <div className={Style.inputSection}>
            <label htmlFor="questionSet">
              Question Set Name <span className={Style.required}>*</span>
            </label>
            <input
              value={name}
              type="text"
              id="questionSet"
              name="questionSet"
              placeholder="Enter Question Set Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionSetDescription">Description</label>
            <textarea
              name="description"
              id="questionSetDescription"
              placeholder="Enter a Short Description for this Question set..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionSetDuration">
              Exam Duration (hours:min:sec)
              <span className={Style.required}>*</span>
            </label>
            <input
              type="text"
              id="questionSetDuration"
              name="questionSetDuration"
              placeholder="00:00:00"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          <div className={Style.inputSection}>
            <label htmlFor="totalMarks">
              Total Marks<span className={Style.required}>*</span>
            </label>
            <input
              type="number"
              id="totalMarks"
              name="totalMarks"
              placeholder="Enter Total Marks"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
            />
          </div>

          <Button
            text="Submit"
            className={Style.createButton}
            onClick={handleSubmit}
            isDisabled={loading}
            isLoading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default CreateQuestionSet;
