import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERROR,
} from "../constants/roomConstants";

export const getRooms = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms`);
    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("faild");
    dispatch({ type: ALL_ROOMS_FAIL, payload: error.response.data.message });
  }
};

//Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
