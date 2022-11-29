import axios from "axios";

export default axios.create({
  baseURL: "https://crudcrud.com/api/6f156439b090477e90b14486555da09a",
  headers: {
    "Content-type": "application/json"
  }
});