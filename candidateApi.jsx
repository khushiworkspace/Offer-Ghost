import { server } from "./server";
import axios from "axios";
import api from "./axiosInstance";
import { checkAccessToken } from "../common/Token";

/* check this api is using or not */

export const getCndidate = async () => {
  try {
    const accessToken = localStorage?.getItem("accessToken");
    const response = await api.get(
      `${server}/v1/Candidate/candidate-byid-sessionhistory?pageNo=1`
    );
    const data = response?.data[0]?.data?.map((option) => ({
      cid: "",
      bussinesssname: option?.Candidatesession?.companyName,
      ref: option?.Candidatesession?.job_requisition_number,
      location: option?.Candidatesession?.location,
      jobRole: option?.Candidatesession?.jobRole,
      department: option?.Candidatesession?.department,
      skill: option?.Candidatesession?.jobSkills,
      applydate: option?.Candidatesession?.appliedDate,
      Appstatus:
        option?.Candidatesession?.applicationStatus[0]?.job_application_status,
      duedate: option?.Candidatesession?.joiningDate,
      goststatus:
        option?.Candidatesession?.ghosted_by_company == true
          ? "N/A"
          : "Ghosted",
      Respons:
        option?.Candidatesession?.accepted == true
          ? "Accepted"
          : option?.Candidatesession?.rejected == true
          ? "Rejected"
          : "N/A",
    }));

    const meta = response?.data[0]?.metadata[0]?.total_page;

    return { data, meta };
  } catch (error) {
    return error;
  }
};

export const createCandidateProfile = async (data) => {
  try {
    const response = await api.post(`${server}/v1/Candidate/add`, data);
    const response1 = checkAccessToken(response);
    return response1;
  } catch (error) {
    //console.log('error', error);
    return error?.message;
  }
};

export const createCandidateProfileResume = async (data) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    let config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Refresh-Token": `${refreshToken}`,
        "Content-Type": `multipart/form-data`,
      },
    };
    const response = await axios.post(
      `${server}/v1/Candidate/create-candidate-profile`,
      data,
      config
    );
      console.log('access', response);
    // const response1 = checkAccessToken(response);
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);

    return response;
  } catch (error) {
    //console.log('error', error);
    return error;
  }
};
export const getCandidateProfile = async (data) => {
  try {
    const response = await api.get(
      `${server}/v1/Candidate/get-candidate`,
      data
    );
    console.log('can',response);
    const response1 = checkAccessToken(response);
    return response1;
  } catch (error) {
    //console.log('error', error);
    return error;
  }
};

export const getCandidateReportdata = async (data) => {
  try {
    const response = await api.get(`${server}/v1/Candidate/get-can-statistics`);
    // //console.log('can',response);
    const response1 = checkAccessToken(response);
    return response1;
  } catch (error) {
    //console.log('error', error);
    return error;
  }
};

export const updateCandidateProfile = async (data) => {
  try {
    const response = await api.patch(
      `${server}/v1/Candidate/update-candidate`,
      data
    );
    ////console.log('can',response);
    const response1 = checkAccessToken(response);
    return response1;
  } catch (error) {
    //console.log('error', error);
    return error;
  }
};

export const getCandidateOgID = async (data) => {
  try {
    const response = await api.post(`${server}/v1/Candidate/search-ogId`, data);
    const response1 = checkAccessToken(response);
    return response1;
  } catch (error) {
    //console.log('error', error);
    return error;
  }
};

// const response = await api?.get(`${server}/v1/CandidateSession/get-candidate-session-by-business?pageNo=${pagenumber}&search=${search || ""}&status=`)
export const getGhostingOrgnizationlist = async (pageNumber, search,pageLimit) => {
  try {
    //let search = ""
    const response = await api.get(
      `${server}/v1/Candidate/get-ghostedreport?pageNo=${
        search ? 1 : pageNumber
      }&pageSize=5&search=${search || ""}&PageLimit=${pageLimit}`
    );
    const response1 = checkAccessToken(response);
    return response1;
  } catch (error) {
    //console.log('error', error);
    return error;
  }
};

export const copyReferralApi = async (id) => {
  try {
    const response = await api?.get(
      `${server}/v1/Candidate/generaterefferalcode/${id}`
    );
    return response;
  } catch (error) {
    //console.log("error",error)
  }
};

export const getViewProfileList = async (page) => {
  try {
    const response = await api?.get(
      `${server}/v1/MatchCandidate/getviewProfile?pageNo=${page}`
    );
    return response;
  } catch (e) {}
};


export const viewMyReports = async (
  candidateEmail,
  role,
  search,
  pageNumber
) => {
  //console.log("Test", candidateEmail, role, search, page)
  try {
    const response = await api.get(
      `${server}/v1/Candidate/getreport/ghostinglist?role=${role}`
    );
    return response;
  } catch (error) {
    console.log("error", error)
    return error
  }
};






