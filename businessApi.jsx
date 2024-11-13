import axios from "axios";
import { checkAccessToken, configHeader } from "../common/Token";
import api from "./axiosInstance";
import { server } from "./server";

export const getCompanyProfile = async () => {
  try {
    const response = await api.get(`${server}/v1/BusinessOwner/get-company`);
    const response1 = checkAccessToken(response);
    // console.log("business saga data",response1);
    //"companyName": "Sumeru Digital Solutions",
    // "industry": "Education and Training",
    //console.log('jname', response1);
    localStorage.setItem(
      "companyNameRedux",
      response1?.data?.data?.companyName
    );
    localStorage.setItem(
      "companyLocationRedux",
      response1?.data?.data?.location
    );
    return response1;
  } catch (error) {
    //console.log("error", error);
    return error;
  }
};

export const updateRating = async (feedbacks) => {
  const userType = localStorage.getItem("userType");

  const id = localStorage.getItem("userId");
  let url;
  // let id = '64f70d0429ef7b7e60e7766e';
  try {
    userType === "business"
      ? (url = "/v1/BusinessOwner/update-business-profile")
      : (url = "/v1/Candidate/update-candidate");
    const response = await api.patch(`${server}${url}`, feedbacks);
    const response1 = checkAccessToken(response);
    return response1;
  } catch (error) {
    //console.log("Rating Error", error);
    return error;
  }
};

export const createBusinessProfile = async (data) => {
  try {
    const response = await api.post(`${server}/v1/BusinessOwner/add`, data);
    checkAccessToken(response);

    return response;
    // //console.log('response', response);
    // return response?.data
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export const accountVerifyOtp = async (data) => {
  try {
    const response = await api.post(
      `${server}/v1/BusinessOwner/workemail-verify`,
      data
    );
    return response;
  } catch (error) {
    //console.log('error', error);
    return error;
  }
};

export const otpVerify = async (data) => {
  try {
    const response = await api.post(
      `${server}/v1/BusinessOwner/workemail-optverify`,
      data
    );
    return response?.data;
  } catch (error) {
    //console.log('error', error);
    return error;
  }
};

export const editBusinessProfile = async (data) => {
  try {
    const response = await api.patch(
      `${server}/v1/BusinessOwner/update-business-profile`,
      data
    );
    return response;
  } catch (error) {
    //console.log("error", error);
    return error;
  }
};

// export const getAllRegisteredEmplyee = async (
//   search,
//   pageNumber,
//   company_Id
// ) => {
//   try {
//     const response = await api?.get(
//       `${server}/v1/BusinessOwner/employeelist?pageNo=${
//         search ? 1 : pageNumber
//       } &pageSize=10&search=${search || ""}&id=${company_Id}`
//     );
//     return response;
//   } catch (error) {
//     //console.log("error", error);
//     return error;
//   }
// };
export const updateEmployeeStatus = async (id, status) => {
  try {
    console.log("Test", id, status);
    const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
let config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Refresh-Token": `${refreshToken}`,
    "Content-Type": `multipart/form-data`,
  },
};
    const response = await axios?.patch(
      `${server}/v1/employee/edit/status/${id}`,
      status,
      config
    );
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
export const fetchtNotificationAlert= async () => {
  try {
    
    const response = await api?.get(`/v1/BusinessOwner/notification/preference`);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const addEmployeeInOrg = async (body) => {
  try {
    const response = await api?.post('v1/employee/add', body)
    return response;
  }catch(e){
    console.log('error while add employee', e);
    return e
  }
}

export const addBulkEmployee = async (data) => {
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
    const response = await axios?.post(`${server}/v1/admin/addEmployee-xs`,  data,config)
    return response;
  } catch (error) {
    console.log('error while add employee', error);
    throw error
  }
}


export const moonlight = async(id)=> {
  try {
    console.log('id-32r32',id);
    const response = await api.get(`/v1/BusinessOwner/employee/moonlighting/${id}`);
    console.log("Response Data:", response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: "Failed to fetch data" };
  }
};

export const addDocumentsForEmployee = async (data) => {
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
    const response = await axios?.post(`${server}/v1/employee/post-emp-docs`, data,config)
    return response;
  }catch(e){
    console.log('error', e);
    throw e
  }
}


export const getAddedDocuments = async(id)=> {

  console.log("id " , id );

  try {
    const response = await api.get(`${server}/v1/employee/get-employee-docs/${id}`);
    console.log("Response Data:nikhil", response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: "Failed to fetch data" };
  }
};






// VIEW LIST /*  */

export const ViewListEmp = async (pageNo, pageSize,type) => {
  console.log(pageNo , "pageNo");
  console.log(pageSize , "pageSize");
  try {
    const response = await api.get(`/v1/BusinessOwner/view/ghositngalert?notificationType=${type}&pageNo=${pageNo}&pageSize=${pageSize}`);
    // console.log("response" , response.data.data);
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching business owner data:', error);
  }
}

export const fetchFile = async (dataField , id) => {
  console.log('data', dataField);
  console.log('id', id);
  try {
    const response = await api.patch(`${server}/v1/employee/edit/status-file-upload/${id}`, dataField);
    console.log(response, "responseee");
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};




export const SearchCall = async(data) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    let config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Refresh-Token": `${refreshToken}`,
        "Content-Type": `application/json`,
      },
    };
    const response = await api.post(`v1/BusinessOwner/add/connection` ,data, config);
    console.log('Redwedfwewe:', response.data); 
    return response.data;
  } catch (error) {
    console.log('Error while adding employee:', error);
    return error;
  }
}

export const OurConnection = async (search) => {
  try {
    const response = await api.get(`v1/BusinessOwner/search/connections?search=${search}`);
    console.log(response , '32r5423');
    return response; 
  } catch (error) {
    console.log("error", error);
    return error; 
  }
};




export const RequestConnection = async(filters,page) => {
  console.log("filters",filters)
  try {
    const response = await api.get(`v1/BusinessOwner/connection/request?requestType=${filters}&pageNo=${page}&pageSize=5'`);
    // console.log(response, "nikhil");
    return response 
  } catch (error) {
    console.log("error", error);
    throw error; 
  }
};



export const AcceptConnection = async(datas,id) => {

  console.log("datas,id",datas,id)

  try {
    console.log("DGJHDH",id,datas)
    const response = await api.patch(`v1/BusinessOwner/accept/connections/${id}`,datas);
    // console.log(response, "nikhil");
    return response; 
  } catch (error) {
    console.log("error", error);
    throw error; 
  }
};


export const getAcceptedConnectionList = async(page,serach) => {

  try {
    
    const response = await api.get(`v1/BusinessOwner/get/connections?pageNo=${page}&pageSize=5&search=${serach ||""}`,);
    console.log(response, "nikhil");
    return response; 
  } catch (error) {
    console.log("error", error);
    throw error; 
  }
};

export const ghostedCandidate = async () => {
  try {
    const response = await api.get(`${server}/v1/CandidateSession/count-cs`);
    return response?.data;

  } catch (error) {
    return error?.message;
  }
};
export const ghostedEmployee = async () => {
  try {
    const response = await api.get(`${server}/v1/EmploymentSession/count-cs`);
    return response?.data;

  } catch (error) {
    return error?.message;
  }
};
export const totalEmpRegister = async () => {
  try {
    const response = await api.get(`${server}/v1/employee/count-emp`);
    return response?.data;

  } catch (error) {
    return error?.message;
  }
};
export const Moonlighting = async () => {
  try {
    const response = await api.get(`${server}/v1/employee/count-moon`);
    return response?.data;

  } catch (error) {
    return error?.message;
  }
};
// export const TotalConnection = async () => {
//   try {
//     const response = await api.get(`${server}/v1/BusinessOwner/count-connections`);
//     // console.log("1123",response);
//     return response?.data;

//   } catch (error) {
//     return error?.message;
//   }
// };
// export const pendingConnection = async () => {
//   try {
//     const response = await api.get(`${server}/v1/BusinessOwner/connection-statistics`);
//     // console.log("1123",response);
//     return response

//   } catch (error) {
//     return error?.message;
//   }
// };
export const getConnectionStatstics = async () => {
  try {
    const response = await api.get(`${server}/v1/BusinessOwner/connection-statistics`);
    // console.log("1123",response);
    return response

  } catch (error) {
    return error?.message;
  }
};
// export const recievedConnection = async () => {
//   try {
//     const response = await api.get(`${server}/v1/BusinessOwner/count-reciev-connections`);
//     // console.log("1123",response);
//     return response?.data;

//   } catch (error) {
//     return error?.message;
//   }
// };


export const sendReffrelEmailforConnection = async (data) => {
  try {
    console.log('data',data);
    const response = await api.post(`/v1/BusinessOwner/send/invitation`,data);
    console.log("1123",response);
    return response;

  } catch (error) {
    return error?.message;
  }
};

// Remove the Data 

export const DeleteRequest = async (value ) => {
const companyId=value?.connections?.companyId
const  pendingRequestId= value?.pendingRequests?._id

  
  try {
    const response = await api.patch(`v1/BusinessOwner/cancel/request/${pendingRequestId}`, {companyId});
    console.log(response, "3r4werfwe"); // Log response data
    return response;
  } catch (error) {
    return error?.message;
  }
};



  export const DeleteConnectionApi= async (data) => {
    console.log("Data123",data) 
     try {
       let companyId = data?.companyId
       const response = await api.patch(`v1/BusinessOwner/remove/connections/${data?._id}`,{companyId});
       console.log('res',response); // Log response data
       return response;
     } catch (error) {
       return error?.message;
     }
   };

