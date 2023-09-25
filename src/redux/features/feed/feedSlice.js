import { createSlice } from "@reduxjs/toolkit";
import { requestSucceeded, startLoading, stopLoading } from "../app/app.slice";
import { GetAppartments, GetFeeds, GetResidents } from "./feed.api";

const initialState = {
  allFeed: {},
  allResident: {},
  allAppartment: {},
  selectedAppartmentId: null, // Add selectedAppartmentId
  selectedResidentId: null, // Add selectedResidentId
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setFeed(state = initialState, action) {
      state.allFeed = action.payload;
    },
    setAppartment(state, action) {
      state.allAppartment = action.payload;
    },
    setResident(state, action) {
      state.allResident = action.payload;
    },
    setSelectedAppartmentId(state, action) {
      // Add a new reducer to set selectedAppartmentId
      state.selectedAppartmentId = action.payload;
    },
    setSelectedResidentId(state, action) {
      // Add a new reducer to set selectedResidentId
      state.selectedResidentId = action.payload;
    },
  },
});
export const {
  setFeed,
  setAppartment,
  setResident,
  setSelectedAppartmentId,
  setSelectedResidentId,
} = feedSlice.actions;
export const allFeedData = (state) => state.feed.allFeed;
export const allResidentData = (state) => state.feed.allResident;
export const allAppartmentData = (state) => state.feed.allAppartment;
export const selectedAppartmentId = (state) => state.feed.selectedAppartmentId; // Add selector
export const selectedResidentId = (state) => state.feed.selectedResidentId; // Add selector

export const allFeedApi = (parems) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const res = await GetFeeds(parems);
    dispatch(setFeed(res));
    dispatch(requestSucceeded());
  } catch (err) {
    if (err) {
      dispatch(setFeed({}));
    }
  }
  dispatch(stopLoading());
};

export const allAppartmentApi = (params) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const res = await GetAppartments(params); // Replace with your API call
    dispatch(setAppartment(res));
    dispatch(requestSucceeded());
  } catch (err) {
    if (err) {
      dispatch(setAppartment({}));
    }
  }
  dispatch(stopLoading());
};

export const allResidentApi = (params) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const res = await GetResidents(params); // Replace with your API call
    dispatch(setResident(res));
    dispatch(requestSucceeded());
  } catch (err) {
    if (err) {
      dispatch(setResident({}));
    }
  }
  dispatch(stopLoading());
};

export default feedSlice;
