import axiosInstance from "./axiosInstance";
import { server } from "./server";
import axios from "axios";

//used for login
export const globalLogin = async (email, password) => {
  try {
    const response = await axios.post(`${server}/auth/usersignin`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    //console.log("error", error);
    return error;
  }
};

export const emailVerification = async (data) => {
  try {
    const response = await axios.post(`${server}/auth/emailverify`, data);
    return response;
  } catch (error) {
    //console.log("error:", error);
    return error;
  }
};

export const updatePassword = async (data) => {
  try {
    const response = await axios.patch(`${server}/auth/reset-password`, data);
    return response;
  } catch (error) {
    return error?.message;
  }
};

export const verifyOtp = async (data) => {
  try {
    const response = await axios.post(`${server}/auth/otp-verify`, data);
    return response;
  } catch (error) {
    //console.log("error", error);
    return error;
  }
};

export const forgotPassword = async (data) => {
  try {
    const response = await axios.post(`${server}/auth/forgot-password`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const resendOtp = async (data) => {
  try {
    const response = await axios?.post(`${server}/auth/resendotp`, data);
    return response;
  } catch (error) {
    return error?.message;
  }
};

/* this api is not using anymore */
export const emailCheck = async (data) => {
  try {
    const signup = "signup";
    const response = await axios?.get(
      `${server}/v1/global/email-exist?email=${data}&userType=${signup}`
    );
    return response?.data;
  } catch (error) {
    console?.log("no data", error);
    return error?.message;
  }
};

export const logOUt = async () => {
  try {
    const response = await axios.get(`${server}/auth/logout`, {
      withCredentials: true // Ensure cookies are sent with the request
    });
    return response;
  } catch (error) {
    return error;
  }
};


export const registration = async (data) => {
  try {
    const referralCode = localStorage.getItem("referralCode");
    let response;
    if (referralCode) {
      ////console.log('register with refer');
      response = await axios?.post(
        `${server}/auth/usersignup?referralCode=${referralCode}`,
        data
      );
      if (response?.status === 201) {
        localStorage.removeItem("referralCode");
      }
    } else {
      response = await axios?.post(`${server}/auth/usersignup`, data);
    }

    return response;
  } catch (error) {
    //console.log("error", error);
    return error;
  }
};

export const fetchSocialAuthUser = async () => {
    try {
      const fetchUser = await axiosInstance.get(`${server}/auth/social-login/success`, {
        withCredentials: true,
      }); // browser to include cookies in the request when making cross-origin requests.
      //console.log('fetchUser',fetchUser);
      return fetchUser;
    } catch (error) {
      //console.log("error", error);
      return error;
    }
  };



