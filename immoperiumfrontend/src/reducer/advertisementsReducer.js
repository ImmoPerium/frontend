import {
  GET_ALL_ADVERTISEMENTS_FETCHING,
  GET_ALL_ADVERTISEMENTS_SUCCESS,
  GET_ALL_ADVERTISEMENTS_FAILURE,
} from "../actions";

const initialState = {
  allAdvertisements: [],
  fetchingAllAdvertisements: false,
  fetchingAllAdvertisementsError: "",
};

const advertisementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ADVERTISEMENTS_FETCHING:
      return {
        ...state,
        fetchingAllAdvertisements: true,
        fetchingAllAdvertisementsError: "",
      };
    case GET_ALL_ADVERTISEMENTS_SUCCESS:
      return {
        ...state,
        allAdvertisements: [...action.payload],
        fetchingAllAdvertisements: false,
        fetchingAllAdvertisementsError: "",
      };
    case GET_ALL_ADVERTISEMENTS_FAILURE:
      return {
        ...state,
        fetchingAllAdvertisements: false,
        fetchingAllAdvertisementsError: action.payload,
      };
    default:
      return state;
  }
};

export default advertisementsReducer;
