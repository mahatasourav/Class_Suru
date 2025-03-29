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
        // if(countPost<3 || error.code === "ERR_NETWORK")
        // {
        //     return post(url, data);
        // }
        // else
        // {
        //     return error;
        // }
    }
}

let countGet = 0;

const get = async(url) => {
    try {
        const response = await axios.get(url);
        if(response)
        {
            return response;
        }
        else
        {
            throw new Error("Error in GET request");
        }
    } catch (error) {
        console.log(error);
        countGet++;
        // if(countGet<3 || error.code === "ERR_NETWORK")
        // {
        //     return get(url);
        // }
        // else
        // {
        //     return error;
        // }
    }
}

let countDelete = 0;

const del = async(url) => {
    try {
        const response = await axios.delete(url);
        if(response)
        {
            return response;
        }
        else
        {
            throw new Error("Error in DELETE request");
        }
    } catch (error) {
        console.log(error);
        countDelete++;
        // if(countDelete<3 || error.code === "ERR_NETWORK")
        // {
        //     return del(url);
        // }
        // else
        // {
        //     return error;
        // }
    }
}

let countPut = 0;

const put = async(url, data) => {
    try {
        const response = await axios.put(url, data);
        if(response)
        {
            return response;
        }
        else
        {
            throw new Error("Error in PUT request");
        }
    } catch (error) {
        console.log(error);
        countPut++;
        // if(countPut<3 || error.code === "ERR_NETWORK")
        // {
        //     return put(url, data);
        // }
        // else
        // {
        //     return error;
        // }
    }
}


const apiCall = {
    post: post,
    get: get,
    delete: del,
    put: put
}

export default apiCall;