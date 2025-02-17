import axios from 'axios';

let countPost = 0;

const post = async(url, data) =>{
    try {
        const response = await axios.post(url, data);
        if(response)
        {
            return response;
        }
        else
        {
            throw new Error("Error in POST request");
        }
    } catch (error) {
        console.log(error);
        countPost++;
        if(countPost<3 || error.code === "ERR_NETWORK")
        {
            return post(url, data);
        }
        else
        {
            return error;
        }
    }
}

const apiCall = {
    post: post
}

export default apiCall;