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

export const GET_USERS_BY_ID_FETCHING = "GET_USERS_BY_ID_FETCHING";
export const GET_USERS_BY_ID_SUCCESS = "GET_USERS_BY_ID_SUCCESS";
export const GET_USERS_BY_ID_FAILURE = "GET_USERS_BY_ID_FAILURE";

export const getUserById = (user_id, token) => (dispatch) => {
  dispatch({
    type: GET_USERS_BY_ID_FETCHING,
  });
  axios
    .get(`${url}/v1/users/${user_id}`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      console.log("GOT SINGLE USER", res.data);
      dispatch({
        type: GET_USERS_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USERS_BY_ID_FAILURE,
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
      localStorage.setItem("user", JSON.stringify(res.data));
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

export const GET_SINGLE_ADVERTISEMENT_FETCHING =
  "GET_SINGLE_ADVERTISEMENT_FETCHING";
export const GET_SINGLE_ADVERTISEMENT_SUCCESS =
  "GET_SINGLE_ADVERTISEMENT_SUCCESS";
export const GET_SINGLE_ADVERTISEMENT_FAILURE =
  "GET_SINGLE_ADVERTISEMENT_FAILURE";

export const getSingleAdvertisement = (offer_id, token) => (dispatch) => {
  console.log("ACCEPTED ", offer_id);
  dispatch({
    type: GET_SINGLE_ADVERTISEMENT_FETCHING,
  });
  axios
    .get(`${url}/v1/realestate/${offer_id}`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      dispatch({
        type: GET_SINGLE_ADVERTISEMENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_SINGLE_ADVERTISEMENT_FAILURE,
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

export const GET_FAVORITE_REALESTATE_BY_USER_FETCHING =
  "GET_FAVORITE_REALESTATE_BY_USER_FETCHING";
export const GET_FAVORITE_REALESTATE_BY_USER_SUCCESS =
  "GET_FAVORITE_REALESTATE_BY_USER_SUCCESS";
export const GET_FAVORITE_REALESTATE_BY_USER_FAILURE =
  "GET_FAVORITE_REALESTATE_BY_USER_FAILURE";

export const getFavoriteRealEstateById = (user_id, token) => (dispatch) => {
  dispatch({
    type: GET_FAVORITE_REALESTATE_BY_USER_FETCHING,
  });
  axios
    .get(`${url}/v1/users/${user_id}/realestatefavorites`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      dispatch({
        type: GET_FAVORITE_REALESTATE_BY_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      dispatch({
        type: GET_FAVORITE_REALESTATE_BY_USER_FAILURE,
        payload: err,
      });
    });
};

export const DELETE_OFFER_FETCHING = "DELETE_OFFER_FETCHING";
export const DELETE_OFFER_SUCCESS = "DELETE_OFFER_SUCCESS";
export const DELETE_OFFER_FAILURE = "DELETE_OFFER_FAILURE";

export const deleteOffer = (offer_id, token) => (dispatch) => {
  dispatch({
    type: DELETE_OFFER_FETCHING,
  });
  axios
    .delete(`${url}/v1/realestate/${offer_id}`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      dispatch({
        type: DELETE_OFFER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      dispatch({
        type: DELETE_OFFER_FAILURE,
        payload: err,
      });
    });
};

export const DELETE_ACCOUNT_FETCHING = "DELETE_ACCOUNT_FETCHING";
export const DELETE_ACCOUNT_SUCCESS = "DELETE_ACCOUNT_SUCCESS";
export const DELETE_ACCOUNT_FAILURE = "DELETE_ACCOUNT_FAILURE";

export const deleteAccount = (account_id, token) => (dispatch) => {
  dispatch({
    type: DELETE_ACCOUNT_FETCHING,
  });
  axios
    .delete(`${url}/v1/users/${account_id}`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      dispatch({
        type: DELETE_ACCOUNT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      dispatch({
        type: DELETE_ACCOUNT_FAILURE,
        payload: err,
      });
    });
};

export const UPDATE_ACCOUNT_FETCHING = "UPDATE_ACCOUNT_FETCHING";
export const UPDATE_ACCOUNT_SUCCESS = "UPDATE_ACCOUNT_SUCCESS";
export const UPDATE_ACCOUNT_FAILURE = "UPDATE_ACCOUNT_FAILURE";

export const updateAccount = (account_id, changes, token) => (
  dispatch,
  getState
) => {
  console.log("UPDATING", account_id);
  console.log("UPDATING", changes);
  console.log("UPDATING", token);
  dispatch({
    type: UPDATE_ACCOUNT_FETCHING,
  });
  axios
    .put(`${url}/v1/users/${account_id}`, changes, {
      headers: { Authorization: token },
    })
    .then((res) => {
      dispatch({
        type: UPDATE_ACCOUNT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      dispatch({
        type: UPDATE_ACCOUNT_FAILURE,
        payload: err,
      });
    });
  /* const value = getState().fetchingUserByID;
  while (!value) {
    console.log("WAS TRUE");
  }
  return true; */
};

export const REMOVE_USER_FAVORITE_FETCHING = "REMOVE_USER_FAVORITE_FETCHING";
export const REMOVE_USER_FAVORITE_SUCCESS = "REMOVE_USER_FAVORITE_SUCCESS";
export const REMOVE_USER_FAVORITE_FAILURE = "REMOVE_USER_FAVORITE_FAILURE";

export const removeFavoriteOffer = (user_id, favorite_id, token) => (
  dispatch
) => {
  dispatch({
    type: REMOVE_USER_FAVORITE_FETCHING,
  });
  axios
    .get(`${url}/v1/users/${user_id}/removefavorite/${favorite_id}`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      dispatch({
        type: REMOVE_USER_FAVORITE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      dispatch({
        type: REMOVE_USER_FAVORITE_FAILURE,
        payload: err,
      });
    });
};

export const ADD_USER_FAVORITE_FETCHING = "ADD_USER_FAVORITE_FETCHING";
export const ADD_USER_FAVORITE_SUCCESS = "ADD_USER_FAVORITE_SUCCESS";
export const ADD_USER_FAVORITE_FAILURE = "ADD_USER_FAVORITE_FAILURE";

export const addFavoriteOffer = (user_id, favorite_id, token) => (dispatch) => {
  dispatch({
    type: ADD_USER_FAVORITE_FETCHING,
  });
  axios
    .get(`${url}/v1/users/${user_id}/addfavorite/${favorite_id}`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      dispatch({
        type: ADD_USER_FAVORITE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      dispatch({
        type: ADD_USER_FAVORITE_FAILURE,
        payload: err,
      });
    });
};

export const CREATE_REAL_ESTATE_FETCHING = "CREATE_REAL_ESTATE_FETCHING";
export const CREATE_REAL_ESTATE_SUCCESS = "CREATE_REAL_ESTATE_SUCCESS";
export const CREATE_REAL_ESTATE_FAILURE = "CREATE_REAL_ESTATE_FAILURE";

export const createRealEstate = (state, token, user_id) => (dispatch) => {
  dispatch({
    type: CREATE_REAL_ESTATE_FETCHING,
  });
  axios
    .post(
      `${url}/v1/realestate/add`,
      {
        user_id: user_id,
        street: state.street,
        streetnumber: state.streetnumber,
        country: state.country,
        city: state.city,
        zip: state.zip,
        level: 1,
        lot_area: "1",
        house_area: state.house_area,
        rental_price_basic: "0",
        rental_price_total: state.purchase_type === "Miete" ? state.price : 1,
        rental_deposit: state.rental_deposit,
        purchase_price: state.purchase_type === "Kaufen" ? state.price : 1,
        courtage_percent: 1,
        building_type: "Nicht angegeben",
        overall_condition: state.overall_condition,
        furnishing_condition: "Nicht angegeben",
        construction_date: "2020-10-20T22:00:00.000Z",
        renovation_date: "2020-10-20T22:00:00.000Z",
        number_of_floors: 1,
        rooms: state.rooms,
        bedrooms: 2,
        livingrooms: 1,
        bathrooms: 2,
        basement: state.basement === "Ja" ? true : false,
        basement_area: "1",
        pets_allowed: state.pets_allowed === "Ja" ? true : false,
        barrier_free: state.barrier_free === "Ja" ? true : false,
        heating: "Zentralheizung",
        pool: false,
        offstreet_parking: state.offstreet_parking === "Ja" ? true : false,
        vacancy: "2020-10-20T22:00:00.000Z",
        object_number: Math.floor(Math.random() * 10000) + 1,
        advertisement_purpose: state.advertisement_purpose,
        advertisement_title: "Hier steht Ihr Titel",
        advertisement_description: state.advertisement_description,
        furnishing_description: "Nicht angegeben",
        location_description: "Nicht angegeben",
        other_description: "https://i.imgur.com/LUDl3os.png",
        photo_1: null,
        photo_2: null,
        photo_3: null,
        photo_4: null,
        photo_5: null,
        photo_6: null,
        photo_7: null,
        photo_8: null,
        photo_9: null,
        photo_10: null,
        is_public: true,
        is_location_public: false,
      },
      {
        headers: { Authorization: token },
      }
    )
    .then((res) => {
      dispatch({
        type: CREATE_REAL_ESTATE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
      dispatch({
        type: CREATE_REAL_ESTATE_FAILURE,
        payload: err,
      });
    });
};
