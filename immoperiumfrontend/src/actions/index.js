import axios from 'axios';

export const GET_USERS_FETCHING = 'GET_USERS_FETCHING';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const url = process.env.REACT_APP_BACKEND_BASE_URL;

export const getUsers = () => dispatch => {
  dispatch({
    type: GET_USERS_FETCHING,
  });
  axios
    .get(`${url}/v1/users`)
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: err,
      });
    });
};

export const REGISTER_FETCHING = 'REGISTER_FETCHING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const sendRegistrationDetails = (first_name, last_name, email, password) => dispatch => {
  console.log("ACTION TRIGGERED", first_name, last_name, email, password)
  dispatch({
    type: REGISTER_FETCHING,
  });
  axios
    .post(`${url}/v1/users/register`, {
      "firstname": first_name,
      "lastname": last_name,
      "email_address": email,
      "password": password,
      "company": "",
      "phonenumber": "",
      "street": "",
      "streetnumber": "",
      "city": "",
      "zip": "",
      "country": "",
      "favorite_advertisements": "",
      "website": ""
    })
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log("ERROR", err)
      dispatch({
        type: REGISTER_FAILURE,
        payload: err,
      });
    });
  };








