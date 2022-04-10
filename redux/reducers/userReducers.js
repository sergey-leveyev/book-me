import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERROR,
} from "../constants/userConstants";

//Auth reducer
export const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        location: true,
      };

    case REGISTER_USER_SUCCESS:
      return {
        location: false,
        success: true,
      };

    case REGISTER_USER_FAIL:
      return {
        location: false,
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
