import { createSlice } from "@reduxjs/toolkit";
import { statusConst } from "../../../constants/constants";

const initialState = {
  loading: false,
  status: statusConst.IDLE,
  errorMessage: [],
  currentUser: {},
  isUserAuthenticated: false,
  userToken: "",
  otpAccess: false,
  userEmail: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    startLoading: (state = initialState) => {
      state.loading = true;
    },
    stopLoading: (state = initialState) => {
      state.loading = false;
    },
    requestFailed: (state = initialState, action) => {
      state.status = statusConst.ERROR;
      state.errorMessage = action.payload;
    },
    requestSucceeded: (state = initialState) => {
      state.status = statusConst.SUCCESS;
      state.otpAccess = true;
      state.errorMessage = [];
    },
    refreshApiStates: (state = initialState) => {
      state.loading = false;
      state.status = statusConst.IDLE;
      state.errorMessage = "";
    },
    setCurrentUser: (state = initialState, action) => {
      state.currentUser = action.payload;
    },
    setUserToken: (state = initialState, action) => {
      state.userToken = action.payload;
      state.isUserAuthenticated = true;
    },
    setUserEmail: (state = initialState, action) => {
      state.userEmail = action.payload;
    },
    setAllStates: (state = initialState) => {
      state.errorMessage = [];
    },
  },
});

export const {
  startLoading,
  stopLoading,
  setUserToken,
  setCurrentUser,
  refreshApiStates,
  requestSucceeded,
  requestFailed,
  setUserEmail,
  setAllStates,
} = appSlice.actions;

export const loading = (state) => state.app.loading;
export const token = (state) => state.app.userToken;
export const user = (state) => state.app.currentUser;
export const errorMessage = (state) => state.app.errorMessage;
export const status = (state) => state.app.status;
export const otpAccess = (state) => state.app.otpAccess;
export const userEmail = (state) => state.app.userEmail;

export default appSlice;
