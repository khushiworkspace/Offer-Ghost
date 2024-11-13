import api from "./axiosInstance";
import { server } from "./server";
import axios from 'axios';



export const candidateGhostingapi = async (data) => {
    try {
      const response = await api.post(`${server}/v1/postcs/newreport-canidate-ghosting`,data)
      console.log('result', response);

      return response
    } catch (error) {
      console.log('error', error);
      return error

    }
  }
  


  export const employeeGhostingapi = async (data) => {
    
    try {
      const response = await api.post(`${server}/v1/postes/newreport-emp-ghosting`,data)
      return response
    } catch (error) {
      //console.log('error', error);
      return error

    }
  }


 




  export const orgnizationReportGhosting = async (body) => {
   ////console.log("Test",body)
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem("refreshToken");
  try {
    let config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Refresh-Token': `${refreshToken}`,
        'Content-Type': `multipart/form-data`
      }
    };
    const response = await axios.post(`${server}/v1/BusinessSession/report-org-ghosting`, body,config);
    return response
  } catch (error) {
    //console.log('Error candidate session', error);
    return error; // Return null or handle the error as needed
  }
};

export const orgnizationReportGhostingWithoutfile = async (data) => {
  try {
    const response = await api.post(`${server}/v1/BusinessSession/report-org-ghosting-withoutproof`,data)
    return response
  } catch (error) {
    console.log('error', error);
    return error

  }
}



export const findCSById = async (data) => {
  try {
    const response = await api.get(`${server}/v1/CandidateSession/session-byId/${data}`)
    return response
  } catch (error) {
    console.log('error', error);
    return error

  }
}

export const findESById = async (data) => {
  try {
    const response = await api.get(`${server}/v1/EmploymentSession/session-byId/${data}`)
    return response
  } catch (error) {
    console.log('error', error);
    return error

  }
}

