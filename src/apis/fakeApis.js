import axios from "axios";

export const fetchCountries = () => {
    return axios.get(`${process.env.PUBLIC_URL}/api/data.json`);
};