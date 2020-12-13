import axios from "axios";

const url = process.env.REACT_APP_BACKEND_BASE_URL;

// USERS

export const GET_USERS_FETCHING = "GET_USERS_FETCHING";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const getUsers = () => (dispatch) => {
  dispatch({
    type: GET_USERS_FETCHING,
  });
  axios
    .get(`${url}/v1/users`)
    .then((res) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: err,
      });
    });
};

export const REGISTER_FETCHING = "REGISTER_FETCHING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const sendRegistrationDetails = (
  first_name,
  last_name,
  email,
  password
) => (dispatch) => {
  dispatch({
    type: REGISTER_FETCHING,
  });
  axios
    .post(`${url}/v1/users/register`, {
      firstname: first_name,
      lastname: last_name,
      email_address: email,
      password: password,
      company: "",
      phonenumber: "",
      street: "",
      streetnumber: "",
      city: "",
      zip: "",
      country: "",
      favorite_advertisements: "",
      website: "",
    })
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      dispatch({
        type: REGISTER_FAILURE,
        payload: err,
      });
    });
};

// ADVERTISEMENTS

export const GET_ALL_ADVERTISEMENTS_FETCHING =
  "GET_ALL_ADVERTISEMENTS_FETCHING";
export const GET_ALL_ADVERTISEMENTS_SUCCESS = "GET_ALL_ADVERTISEMENTS_SUCCESS";
export const GET_ALL_ADVERTISEMENTS_FAILURE = "GET_ALL_ADVERTISEMENTS_FAILURE";

export const getAllAdvertisements = () => (dispatch) => {
  dispatch({
    type: GET_ALL_ADVERTISEMENTS_FETCHING,
  });
  axios
    .get(`${url}/v1/realestate/public`)
    .then((res) => {
      console.log("ADVERTISEMENT RES", res.data.real_estate_advertisements);
      dispatch({
        type: GET_ALL_ADVERTISEMENTS_SUCCESS,
        payload: res.data.real_estate_advertisements,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_ADVERTISEMENTS_FAILURE,
        payload: err,
      });
    });
};

/* axios
    .get(`${url}/v1/advertisements`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJlbWFpbF9hZGRyZXNzIjoiMjIyMmZha2VtYWlsQGdtYWlsLmNvbSIsImlhdCI6MTYwNjY2NjA5OSwiZXhwIjoxNjA2NzA5Mjk5fQ.HUyiaxi8Df-WDcWCeMSohAl_ffd5hFHQqDOxema8ZHk",
      },
    })
*/

export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const sendLogin = (email, password) => (dispatch) => {
  console.log("ACTION TRIGGERED", email, password);
  dispatch({
    type: LOGIN_FETCHING,
  });
  axios
    .post(`${url}/v1/users/login`, {
      email_address: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      dispatch({
        type: LOGIN_FAILURE,
        payload: err,
      });
    });
};

export const GET_REALESTATE_BY_USER_FETCHING =
  "GET_REALESTATE_BY_USER_FETCHING";
export const GET_REALESTATE_BY_USER_SUCCESS = "GET_REALESTATE_BY_USER_SUCCESS";
export const GET_REALESTATE_BY_USER_FAILURE = "GET_REALESTATE_BY_USER_FAILURE";

export const getRealEstateById = (user_id, token) => (dispatch) => {
  console.log("ACTION TRIGGERED", user_id);
  console.log("Token TRIGGERED", token);
  dispatch({
    type: GET_REALESTATE_BY_USER_FETCHING,
  });
  axios
    .get(`${url}/v1/users/${user_id}/realestate`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      dispatch({
        type: GET_REALESTATE_BY_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      dispatch({
        type: GET_REALESTATE_BY_USER_FAILURE,
        payload: err,
      });
    });
};
