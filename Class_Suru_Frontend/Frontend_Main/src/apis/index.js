const basApi = "https://class-suru-beta.vercel.app";

// const basApi = "http://localhost:5000";

/**
 * @description API for signup
 * @method POST
 * @param {string} username
 * @param {string} email
 * @param {string} phone_number
 * @param {string} password
 * @returns {object} { success, userId, token }
 */


const signupApi = `${basApi}/api/auth/signup`;
const loginApi = `${basApi}/api/auth/login`;
const userDetailsApi = `${basApi}/api/auth/user`;

// exam apis
const createExamApi = `${basApi}/api/auth/exam`;
const getExamsApi = `${basApi}/api/auth/exam`;
const deleteExamApi = `${basApi}/api/auth/exam/delete`;
const getExamByIdApi = `${basApi}/api/auth/exam`;
const updateExamApi = `${basApi}/api/auth/exam/update`;

// Question apis
const createQuestionApi = `${basApi}/api/auth/question/add`;
const getQuestionListApi = `${basApi}/api/auth/question/exam`;
const deleteQuestionApi = `${basApi}/api/auth/question/delete`;
const getQuestionByIdApi = `${basApi}/api/auth/question`;
const updateQuestionApi = `${basApi}/api/auth/question/update`;



export { signupApi, loginApi, userDetailsApi ,createExamApi,getExamsApi,createQuestionApi,getQuestionListApi,deleteQuestionApi,deleteExamApi,getExamByIdApi,getQuestionByIdApi,updateQuestionApi,updateExamApi};