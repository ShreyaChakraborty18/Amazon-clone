import axios from "axios";

const instance = axios.create({
    baseURl: 'http://localhost:5001/clone-9d8d4/us-central1/api' // The API (cloud function) URl
});

export default instance;
