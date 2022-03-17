import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  ROOMS_DETAILS_SUCCESS,
  ROOMS_DETAILS_FAIL,
  CLEAR_ERROR,
} from "../constants/roomConstants";

//Get all rooms
export const getRooms =
  (req, currentPageNo = 1, location = "") =>
  async (dispatch) => {
    try {
      const { origin } = absoluteUrl(req);
      const { data } = await axios.get(
        `${origin}/api/rooms?page=${currentPageNo}&location=${location}`
      );

      dispatch({
        type: ALL_ROOMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log("faild");
      dispatch({ type: ALL_ROOMS_FAIL, payload: error.response.data.message });
    }
  };

//Get room details
export const getRoomsDetails = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms/${id}`);
    dispatch({
      type: ROOMS_DETAILS_SUCCESS,
      payload: data.room,
    });
  } catch (error) {
    dispatch({
      type: ROOMS_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
