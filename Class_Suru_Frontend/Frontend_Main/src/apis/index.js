const basApi = "https://class-suru-beta.vercel.app";

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

export { signupApi, loginApi, userDetailsApi };