import axios from "axios";
import { server } from "./server";
import moment from "moment";
import api from "./axiosInstance";

// const accessToken = localStorage?.getItem('accessToken')

export const getCandidateSession = async (pagenumber, search,pageLimit) => {
  try {
    //  const accessToken = localStorage?.getItem('accessToken')
    const response = await api?.get(
      `${server}/v1/CandidateSession/get-candidate-session-by-business?pageNo=${
        search ? 1 : pagenumber
      }&search=${search || ""}&PageLimit=${pageLimit}&status=`
    );
    //  //console.log(response,"res");
    //     const canDat = response?.data?.CandidatesessionData[0]?.data?.map((candidate) => {
    //       const lastData = candidate?.applicationStatus?.length - 1;
    //       const lastStatus = candidate?.applicationStatus[lastData]?.job_application_status;
    //       const lastDataIndex = candidate?.applicationStatus?.length - 1;
    //       const lastDate = candidate?.applicationStatus[lastDataIndex]?.job_application_status_date;
    //       const offerdate = candidate?.offerLetterTimeLimitPeriod;

    //       const lastDateObj = moment(lastDate, "YYYY/MM/DD");
    //       const offerDateObj = moment(offerdate, "YYYY/MM/DD");

    //       const dif = offerDateObj?.diff(lastDateObj, 'days');
    //       // console?.log("Difference1:", dif,);
    //       let current = new Date();
    //       let due;
    //       if (isNaN(dif)) {
    //         due = "N/A";
    //       } else {

    //         const currentDate = moment(current, "YYYY/MM/DD");
    //         const c = offerDateObj?.diff(currentDate, 'days');

    //         due = (100 / dif) * c;
    //         // console?.log("Due:", due);
    //       }

    //   return {
    //     alldata: candidate,// all data passing here for passing props //
    //     name: candidate?.candidateName,
    //     email: candidate?.candidateEmail,
    //     phone: candidate?.candidatePhone,
    //     RefNo: candidate?.job_requisition_number,
    //     Due: candidate?.offerLetterTimeLimitPeriod == '' ? "N/A" : candidate?.offerLetterTimeLimitPeriod <= lastDate ? "N/A" : due,
    //     jobRoll: candidate?.jobRole,
    //     Duedate: candidate?.offerLetterTimeLimitPeriod,
    //     department: candidate?.department,
    //     skill: candidate?.jobSkills + "," + " ",
    //     applydate: candidate?.appliedDate,
    //     Acverified: candidate?.isAccountvarifed == true ? 'Verified' : 'Not Verified',
    //     applicationStaus: lastStatus,
    //     applicationStatusdate: lastDate,
    //     CandidateResponse: candidate?.accepted == true ? 'Accepted' : candidate?.rejected == true ? 'Rejected' : 'No Response',
    //     _id: candidate?._id,
    //     gostCompany: candidate?.ghosted_by_company,
    //     remark: candidate?.remark_by_company,
    //     ghostedDate_by_company: candidate?.ghostedDate_by_company?.substr(0, 10),
    //   }
    // });
    return response;

    // const meta = response?.data?.CandidatesessionData[0]?.metadata[0]?.total_page;
    // const userid = response?.data?.CandidatesessionData[0]?.data;
    // return { canDat, meta, userid };
  } catch (error) {
    //console.log('Error candidate session', error);
    throw error;
  }
};

export const addCandidateSession = async (body) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Refresh-Token": `${refreshToken}`,
        "Content-Type": `multipart/form-data`,
      },
    };
    const response = await axios.post(
      `${server}/v1/postcs/newpost-candidate-session`,
      body,
      config
    );
    console.log('result', response);

    return response;
  } catch (error) {
    console.log('Error candidate session', error);
    return error; // Return null or handle the error as needed
  }
};

export const updateGhost = async (gost, loacal, canid) => {
  try {
    //  const accessToken = localStorage?.getItem('accessToken')
    const rseponse = await axios?.patch(
      `${server}/v1/CandidateSession/ghosted-by-business`,
      {
        candidateSessionid: canid,
        ghosted_by_company: false,
        remark_by_company: gost,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage?.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console?.log(err);
  }
};

export const updateCandiadte = async (UpdateCan) => {
  // let loacal = localStorage?.getItem('accessToken');
  //  console?.log('update',UpdateCan);
  const accessToken = localStorage?.getItem("accessToken");
  // const {email,dueDate,id,status,updateDate} = UpdateCan
  // console?.log("email", email,"duedate",dueDate,"id",id,"status",status,"update",updateDate);
  try {
    const response = await axios?.patch(
      `${server}/v1/CandidateSession/update-by-candidate-business`,
      {
        id: UpdateCan?.id,
        email: UpdateCan?.email,
        status: UpdateCan?.status,
        date: `${moment(UpdateCan?.updateDate)?.format("YYYY/MM/DD")}`,
        duedate: UpdateCan?.dueDate
          ? `${moment(UpdateCan?.dueDate)?.format("YYYY/MM/DD")}`
          : "",
      },
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response) {
      return response?.data;
    }
  } catch (err) {
    console?.log("error", err);
    return err;
  }
};

//remove this

export const trust = async (uid, apikey) => {
  // const candidate = { candidate: [{ ...getdata }] };
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  let config;
  try {
    config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Refresh-Token": `${refreshToken}`,
        "x-api-key": `${apikey}`,
      },
    };
    const response = await axios.post(
      `${server}/v1/getapi/new-ts-data`,
      uid,
      config
    );
    return response;
  } catch (error) {
    //console.log('error', error);
    return error;
  }
};

// export const Orgnizationtrust = async (inputValue,apikey) => {

//   // const candidate = { candidate: [{ ...getdata }] };
//   const accessToken = localStorage.getItem('accessToken');
//   const refreshToken = localStorage.getItem("refreshToken");
// ////console.log("apikey123",apikey)
//   const uid="Matrix Digital"
//   let config;
//   try {

//      const apix = axios?.create({
//       baseURL: `${server}`, // Set your base URL
//       headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'Refresh-Token':`${refreshToken}`,
//         'x-api-key': `${apikey}`
//       },
//     });
//    // //console.log('inside try');
//     const response = await apix.post(`${server}/v1/getapi/search-org-trustscore?search=${inputValue}`,)
//    // //console.log('response',response);
//     return response;
//   } catch (error) {
//     //console.log('error', error);
//     return error;
//   }
// };

export const Orgnizationtrust = async (inputValue, ownerDomain, apikey) => {

  console.log("Test",inputValue, ownerDomain, apikey)
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  try {
    const apix = axios.create({
      baseURL: `${server}`, // Assuming 'server' is defined elsewhere
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Refresh-Token": refreshToken,
        "x-api-key": apikey,
      },
    });

    const response = await apix.post(
      `/v1/getapi/search-org-trustscore?search=${inputValue}&domain=${ownerDomain}`
    );
    return response; // Assuming you're interested in the data part of the response
  } catch (error) {
    console.error("Error in Orgnizationtrust:", error);
    // Handle the error more gracefully or throw it
    return error; // or return a controlled error message/object
  }
};

export const getMangeUser = async (pageNumber, search,PageLimit) => {
  ////console.log("page", page, "search", search)
  try {
    const response = await api?.get(
      `${server}/v1/EmploymentSession/get-all-employmentsession?pageNo=${
        search ? 1 : pageNumber
      }&search=${search || ""}&PageLimit=${PageLimit}&status=`
    );
    ////console.log("response", response?.data)
    return response?.data;
  } catch (error) {
    //console.log(error);
    throw error
  }
};

export const addEmployee = async (body) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    let config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Refresh-Token": `${refreshToken}`,
        "Content-Type": `multipart/form-data`,
      },
    };
    // const accessToken = localStorage?.getItem("accessToken");
    const response = await axios?.post(
      `${server}/v1/postes/newpost-employee-session`,
      body,
      config
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const signup = async (data) => {
  try {
    const response = await axios?.post(`${server}/auth/signup`, data);
    return response;
  } catch (error) {
    console?.log("error2", error?.response);
    return error?.response;
  }
};

export const checkNumber = async (data) => {
  try {
    const response = await axios?.post(`${server}/auth/find-phone`, data);
    //console.log("Response",response)
    return response;
  } catch (error) {
    console?.log("error2", error?.response);
    return error?.response;
  }
};

//remove this

//remove this

//remove this

// export const getTotalgoshtingCandidate = async () => {
//   try {
//     const response = await api?.get(`/auth/total-ghostedcandidates`)
//     console?.log('response', response);
//     return response?.data
//   } catch (error) {
//     return error?.message
//   }
// }

// export const getEmployementSesion=async()=>{
//   try {
//     const response=await api?.get(`v1/BusinessOwner/employment-session`)

export const getCity = async () => {
  var config = {
    // method: 'get',
    // url: 'https://api?.countrystatecity?.in/v1/countries/IN/cities',
    headers: {
      "X-CSCAPI-KEY":
        "NEZwVExrWFVoVlRjNWw0dHpnTVRST01MNUZHbE9tcWpPRHVlUlhTZg==",
    },
  };
  // ?.//const response = await api?.get(`/auth/total-companies`)
  // await axios(config)
  // ?.then(function (response) {
  //   console?.log(response?.data);
  //   return response?.data;
  // })
  // ?.catch(function (error) {
  //   console?.log(error);
  // });
  try {
    const response = await axios?.get(
      `https://api?.countrystatecity?.in/v1/countries/IN/cities`,
      config
    );
    // console?.log('response',response);
    return response?.data;
  } catch (error) {
    return error?.message;
  }
};

//remove from below
