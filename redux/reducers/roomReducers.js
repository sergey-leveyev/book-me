import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  ROOMS_DETAILS_SUCCESS,
  ROOMS_DETAILS_FAIL,
  CLEAR_ERROR,
} from "../constants/roomConstants";

//All rooms reducer
export const allRoomsReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
      };

    case ALL_ROOMS_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

//Rooms details reducer
export const roomDetailsReducer = (state = { room: {} }, action) => {
  switch (action.type) {
    case ROOMS_DETAILS_SUCCESS:
      return {
        room: action.payload,
      };

    case ROOMS_DETAILS_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
