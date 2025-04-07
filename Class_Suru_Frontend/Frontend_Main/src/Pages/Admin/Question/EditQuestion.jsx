import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../../../Components";
import { FaArrowLeft } from "react-icons/fa";
import Style from "../../../css/createQuestionSet.module.css";
import { useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import apiCall from "../../../utils/apiCall";
import {
  createQuestionApi,
  getQuestionByIdApi,
  updateQuestionApi,
  uploadImageApi,
  deleteImageApi,
} from "../../../apis";

import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { deleteImage, uploadImage } from "../../../utils/image";

const EditQuestion = () => {
  const { examName, subjectName, questionId } = useParams();
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
  const [question_ans, setQuestionAns] = useState("");
  const [question_ans_img, setQuestionAnsImg] = useState("None");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      question_text: questionBody,
      question_img_url: imgUrl,
      option_1: option1,
      option_2: option2,
      option_3: option3,
      option_4: option4,
      correct_marks: correct,
      correct_option: correctOption,
      wrong_marks: wrong,
      question_ans: question_ans,
      question_ans_img: question_ans_img,
    };
    try {
      setLoading(true);
      const response = await apiCall.put(
        `${updateQuestionApi}/${questionId}`,
        data
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Question updated Successfully");
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getQuestionData = async () => {
    try {
      const response = await apiCall.get(`${getQuestionByIdApi}/${questionId}`);
      console.log(response);
      if (response.status === 200) {
        const data = response.data.question[0];
        // setName(data.question_text);
        setOption1(data.option_1);
        setOption2(data.option_2);
        setOption3(data.option_3);
        setOption4(data.option_4);
        setCorrectOption(data.correct_option);
        setCorrect(data.correct_marks);
        setWrong(data.wrong_marks);
        setQuestionBody(data.question_text);
        setImgUrl(data.question_img_url);
        setQuestionAns(data.question_ans);
        setQuestionAnsImg(data.question_ans_img);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestionData();
  }, []);

  const handleImgUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    if (file.size > 100 * 1024) {
      toast.error("File size should be less than 100kb");
      return;
    }

    const loadingToastId = toast.loading("Loading...");
    try {
      if (imgUrl !== "None") {
        const response_delete = await deleteImage(imgUrl);
        if (response_delete.status === 200) {
          console.log("Previous Image deleted successfully");
        }
      }
      const response = await uploadImage(file,"Question");
      console.log(response);

      if (response.status === 200) {
        setImgUrl(response.data.imageUrl);
        toast.dismiss(loadingToastId);
        toast.success("Image uploaded successfully");
      } else {
        toast.dismiss(loadingToastId);
        toast.error("Image upload failed, Please try again later");
        console.log("Image upload failed", response.status);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error("Image upload failed, Please try again later");
      console.log(error);
    }
  };

  const handleImgUploadAns = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    if (file.size > 100 * 1024) {
      toast.error("File size should be less than 100kb");
      return;
    }

    const loadingToastId = toast.loading("Loading...");
    try {
      if (imgUrl !== "None") {
        const response_delete = await deleteImage(imgUrl);
        if (response_delete.status === 200) {
          console.log("Previous Image deleted successfully");
        }
      }
      const response = await uploadImage(file,"Ans");
      console.log(response);

      if (response.status === 200) {
        setQuestionAnsImg(response.data.imageUrl);
        toast.dismiss(loadingToastId);
        toast.success("Image uploaded successfully");
      } else {
        toast.dismiss(loadingToastId);
        toast.error("Image upload failed, Please try again later");
        console.log("Image upload failed", response.status);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error("Image upload failed, Please try again later");
      console.log(error);
    }
  };

  return (
    <>
      <div className={Style.adminCreateQuestionSetContainerPage}>
        <div className={Style.backSection}>
          <Button
            text="Back"
            // isLink={true}
            // link={`/admin/list/${examName}/${subjectName}/createQuestionSet`}
            onClick={() => {
              const confirmGoBack = window.confirm(
                "If you go back, all the unsaved changes will be lost. Do you want to continue?"
              );
              if (confirmGoBack) {
                navigate(-1);
              }
            }}
            className={Style.backButton}
            onDualMode={true}
            isHollow={true}
          >
            <FaArrowLeft />
          </Button>
        </div>
        <form className={Style.createQuestionSetContainer}>

          <div className={Style.inputSection}>
            <label htmlFor="questionSetDescription">
              Question Body <span className={Style.required}>*</span>
            </label>
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
            <label htmlFor="questionSetDescription">
              Question Image ( &lt; 100 kb )
            </label>
            <input
              className={Style.chooseImage}
              type="file"
              placeholder="Choose Qusetion Image"
              onChange={handleImgUpload}
            />
            
            <div className={Style.imagePreview}>
              {imgUrl && imgUrl != "None" ? (
                <img className={Style.image} src={imgUrl} alt="imageurl" />
              ) : (
                "No image uploaded"
              )}
            </div>
            {
              imgUrl && imgUrl !== "None" ? (<Button
                text="Remove Image"
                type="button"
                onClick={async () => {
                  const removeImageloadingToastId = toast.loading("Loading...");
                  if (imgUrl !== "None") {
                    const confirmImageDelete = window.confirm(
                      "Do you really want to remove the image?"
                    );
                    if (confirmImageDelete) {
                      const response_delete = await deleteImage(imgUrl);
                      console.log(response_delete);
                      
                      if (response_delete.status === 200) {
                        toast.dismiss(removeImageloadingToastId);
                        toast.success("Image removed successfully");
                        setImgUrl("None");
                      } else {
                        toast.dismiss(removeImageloadingToastId);
                        toast.error("Image removal failed, Please try again later");
                      }
                      setImgUrl("None");
                    }
                  } else {
                    toast.error("No image to remove");
                  }
                }
                }
                />): ""
            }
            
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionOption1">
              <b>
                Option 1 <span className={Style.required}>*</span>
              </b>
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
              <b>
                Option 2 <span className={Style.required}>*</span>
              </b>
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
              <b>
                Option 3 <span className={Style.required}>*</span>
              </b>
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
              <b>
                Option 4 <span className={Style.required}>*</span>
              </b>
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
            <label htmlFor="correct_question_set">
              Correct Option No. <span className={Style.required}>*</span>
            </label>
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
            <label htmlFor="correct_question_marks">
              Correct Marks(+) <span className={Style.required}>*</span>
            </label>
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
            <label htmlFor="wrong_question_set">
              Wrong Marks(-) <span className={Style.required}>*</span>
            </label>
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

          <div className={Style.inputSection}>
            <label htmlFor="questionOption1">
              <b>
                Answer Explanation <span className={Style.required}>*</span>
              </b>
            </label>
            <JoditEditor
              ref={editor}
              value={question_ans}
              config={configOption}
              tabIndex={1}
              onBlur={(newContent) => setQuestionAns(newContent)}
              onChange={(newContent) => {}}
              required
            />
          </div>
          <div className={Style.inputSection}>
            <label htmlFor="questionSetDescription">
              Question Image ( &lt; 100 kb )
            </label>
            <input
              className={Style.chooseImage}
              type="file"
              placeholder="Choose Qusetion Image"
              onChange={handleImgUploadAns}
            />
            
            <div className={Style.imagePreview}>
              {question_ans_img && question_ans_img != "None" ? (
                <img className={Style.image} src={question_ans_img} alt="question_ans_img" />
              ) : (
                "No image uploaded"
              )}
            </div>
            {
              question_ans_img && question_ans_img !== "None" ? (<Button
                text="Remove Image"
                type="button"
                onClick={async () => {
                  const removeImageloadingToastId = toast.loading("Loading...");
                  if (imgUrl !== "None") {
                    const confirmImageDelete = window.confirm(
                      "Do you really want to remove the image?"
                    );
                    if (confirmImageDelete) {
                      const response_delete = await deleteImage(question_ans_img);
                      console.log(response_delete);
                      
                      if (response_delete.status === 200) {
                        toast.dismiss(removeImageloadingToastId);
                        toast.success("Image removed successfully");
                        setQuestionAnsImg("None");
                      } else {
                        toast.dismiss(removeImageloadingToastId);
                        toast.error("Image removal failed, Please try again later");
                      }
                      setQuestionAnsImg("None");
                    }
                  } else {
                    toast.error("No image to remove");
                  }
                }
                }
                />): ""
            }
            
          </div>

          <Button
            text="Update Question"
            className={Style.createButton}
            isLoading={loading}
            onClick={handleSubmit}
            isDisabled={loading}
          />
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default EditQuestion;
