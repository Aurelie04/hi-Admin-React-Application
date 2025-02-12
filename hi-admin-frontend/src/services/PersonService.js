import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/api/person';

export const listPersons = () => axios.get(REST_API_BASE_URL);

