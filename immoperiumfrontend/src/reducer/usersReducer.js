import {
  GET_USERS_FETCHING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_REALESTATE_BY_USER_FETCHING,
  GET_REALESTATE_BY_USER_SUCCESS,
  GET_REALESTATE_BY_USER_FAILURE,
  DELETE_ACCOUNT_SUCCESS,
} from "../actions";

const initialState = {
  users: {},
  fetchingUsers: false,
  fetchingUsersError: "",
  fetchingRegister: false,
  fetchingRegisterError: "",
  LoggedInUser: {},
  LoggedInToken: "",
  fetchingLogIn: false,
  fetchingLogInError: "",
  realEstateOffersOfUser: [],
  fetchingRealEstateOffersOfUser: false,
  fetchingRealEstateOffersOfUserError: "",
  accountDeletion: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_FETCHING:
      return {
        ...state,
        fetchingUsers: true,
        fetchingUsersError: "",
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        fetchingUsers: false,
        fetchingUsersError: "",
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        fetchingUsersError: action.payload,
      };
    case REGISTER_FETCHING:
      return {
        ...state,
        fetchingRegister: true,
        fetchingRegisterError: "",
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        fetchingRegister: false,
        fetchingRegisterError: "",
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        fetchingRegister: false,
        fetchingRegisterError: action.payload,
      };
    case LOGIN_FETCHING:
      return {
        ...state,
        fetchingLogIn: true,
        fetchingLogInError: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        LoggedInUser: action.payload.user,
        LoggedInToken: action.payload.token,
        fetchingLogIn: false,
        fetchingLogInError: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        fetchingLogIn: false,
        fetchingLogInError: action.payload,
      };
    case GET_REALESTATE_BY_USER_FETCHING:
      return {
        ...state,
        fetchingRealEstateOffersOfUser: true,
        fetchingRealEstateOffersOfUserError: "",
      };
    case GET_REALESTATE_BY_USER_SUCCESS:
      return {
        ...state,
        realEstateOffersOfUser: action.payload,
        fetchingRealEstateOffersOfUser: false,
        fetchingRealEstateOffersOfUserError: "",
      };
    case GET_REALESTATE_BY_USER_FAILURE:
      return {
        ...state,
        fetchingRealEstateOffersOfUser: false,
        fetchingRealEstateOffersOfUserError: action.payload,
      };
    case DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        accountDeletion: true,
      };
    default:
      return state;
  }
};

export default usersReducer;
