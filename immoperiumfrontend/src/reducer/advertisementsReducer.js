import {
  GET_ALL_ADVERTISEMENTS_FETCHING,
  GET_ALL_ADVERTISEMENTS_SUCCESS,
  GET_ALL_ADVERTISEMENTS_FAILURE,
  GET_SINGLE_ADVERTISEMENT_FETCHING,
  GET_SINGLE_ADVERTISEMENT_SUCCESS,
  GET_SINGLE_ADVERTISEMENT_FAILURE,
} from "../actions";

const initialState = {
  allAdvertisements: [],
  fetchingAllAdvertisements: false,
  fetchingAllAdvertisementsError: "",
  singleAdvertisement: {},
  fetchingSingleAdvertisement: false,
  fetchingSingleAdvertisementError: "",
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
    case GET_SINGLE_ADVERTISEMENT_FETCHING:
      return {
        ...state,
        fetchingSingleAdvertisement: true,
        fetchingSingleAdvertisementError: "",
      };
    case GET_SINGLE_ADVERTISEMENT_SUCCESS:
      return {
        ...state,
        singleAdvertisement: action.payload,
        fetchingSingleAdvertisement: false,
        fetchingSingleAdvertisementError: "",
      };
    case GET_SINGLE_ADVERTISEMENT_FAILURE:
      return {
        ...state,
        fetchingSingleAdvertisement: false,
        fetchingSingleAdvertisementError: action.payload,
      };
    default:
      return state;
  }
};

export default advertisementsReducer;
