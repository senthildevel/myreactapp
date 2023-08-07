import axios, {CanceledError} from "axios";

// Axios cinfiguration 
export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"    
})

export {CanceledError};

