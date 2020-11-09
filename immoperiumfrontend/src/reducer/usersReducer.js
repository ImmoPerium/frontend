import {
  GET_USERS_FETCHING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions';

const initialState = {
  users: [],  
  fetchingUsers: false,
  fetchingUsersError: '',
  fetchingRegister: false,
  fetchingRegisterError: ''
};

const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_FETCHING:
      return {
        ...state,
        fetchingUsers: true,
        fetchingUsersError: '',
      };
      case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        fetchingUsers: false,
        fetchingUsersError: '',
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
        fetchingRegisterError: '',
      };
      case REGISTER_SUCCESS:
      return {
        ...state,
        users: [...action.payload],
        fetchingRegister: false,
        fetchingRegisterError: '',
      };
      case REGISTER_FAILURE:
      return {
        ...state,
        fetchingRegister: false,
        fetchingRegisterError: action.payload,
      };
    default:
    return state;
  }
};

export default getUsersReducer;