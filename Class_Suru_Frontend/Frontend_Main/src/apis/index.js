// const basApi = "https://class-suru-beta.vercel.app";

const basApi = "http://localhost:5000";

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
const updateUserDetailsApi = `${basApi}/api/auth/user/update`;

// Admin Apis
const adminLoginApi = `${basApi}/api/auth/admin/login`;
const adminLoginOTPApi = `${basApi}/api/auth/admin/login/otp`;

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

// Upload Image
const uploadImageApi = `${basApi}/api/auth/upload-image`;
const deleteImageApi = `${basApi}/api/auth/delete-image`;



export { signupApi, loginApi, userDetailsApi ,createExamApi,getExamsApi,createQuestionApi,getQuestionListApi,deleteQuestionApi,deleteExamApi,getExamByIdApi,getQuestionByIdApi,updateQuestionApi,updateExamApi,adminLoginApi,adminLoginOTPApi,updateUserDetailsApi,uploadImageApi,deleteImageApi};