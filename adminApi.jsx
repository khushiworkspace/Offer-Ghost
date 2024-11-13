import { server } from "./server";
import api from "./axiosInstance";
import axios from "axios";
import { async } from "q";
export const addUserApi = async (data) => {
  try {
    const response = await api.post(`${server}/v1/admin/add-candidates`, data);
    return response;
  } catch (error) {
    //console.log("error", error)
    return error;
  }
};

export const getCandidateListApi = async (pagenumber, search) => {
  try {
    const response = await api?.get(
      `${server}/v1/admin/search-candidates?pageNo=${
        search ? 1 : pagenumber
      }&pageSize=10&search=${search || ""}`
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const addSkill = async (data) => {
  try {
    const response = await api?.post(`${server}/v1/admin/add-skills`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const editSkill = async (id, data) => {
  ////console.log("data",data);
  try {
    const response = await api?.patch(
      `${server}/v1/admin/edit-skill/${id}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteSkill = async (id, data) => {
  try {
    const response = await api?.delete(
      `${server}/v1/admin/delete-skill/${id}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getSkill = async (data, status) => {
  try {
    const response = await api?.get(
      `${server}/v1/global/fetch-skills?search=${data}&status=${status}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
//-------------industries------------------//
export const getIndustries = async (data, status) => {
  try {
    const response = await api?.get(
      `${server}/v1/global/fetch-industry?search=${data}&status=${status}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const addIndustry = async (data) => {
  ////console.log("api data",data);
  try {
    const response = await api?.post(`${server}/v1/admin/add-industry`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const editIndustry = async (id, data) => {
  // //console.log("data",data);
  try {
    const response = await api?.patch(
      `${server}/v1/admin/edit-industry/${id}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteIndustry = async (id, data) => {
  try {
    const response = await api?.delete(
      `${server}/v1/admin/delete-industry/${id}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

//-------------industries------------------//
export const getJobRole = async (data, status) => {
  try {
    const response = await api?.get(
      `${server}/v1/global/fetch-jobrole?search=${data}&status=${status}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const addJobRole = async (data) => {
  ////console.log("api data",data);
  try {
    const response = await api?.post(`${server}/v1/admin/add-jobrole`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const editJobRole = async (id, data) => {
  ////console.log("data",data);
  try {
    const response = await api?.patch(
      `${server}/v1/admin/edit-jobrole/${id}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteJobRole = async (id, data) => {
  try {
    const response = await api?.delete(
      `${server}/v1/admin/delete-jobrole/${id}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const sendMailCandidateApi = async (peopleInfoArray) => {
  try {
    const response = await api?.post(
      `${server}/v1/admin/send/promotional/canidate`,
      peopleInfoArray
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const deleteCandidateApi = async (id) => {
  try {
    const response = await api?.delete(
      `${server}/v1/admin/delete-candidate/` + id
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const deleteOrganizationApi = async (id) => {
  try {
    const response = await api?.delete(
      `${server}/v1/admin/delete-organization/` + id
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const addOrganiZationApi = async (data) => {
  try {
    const response = await api?.post(
      `${server}/v1/admin/add-organization`,
      data
    );
    return response;
  } catch (error) {
    //console.log("error", error)
    return error;
  }
};

export const getOrganiZationListApi = async (pagenumber, search) => {
  try {
    const response = await api?.get(
      `${server}/v1/admin/get-organization?pageNo=${
        search ? 1 : pagenumber
      }&pageSize=10&search=${search || ""}`
    );
    return response;
  } catch (error) {
    return error;
    //console.log("error", error)
  }
};

export const sendMailOrganizationApi = async (peopleInfoArray) => {
  try {
    const response = await api?.post(
      `${server}/v1/admin/send/promotional/organization`,
      peopleInfoArray
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const getGR_ByOrganizationListApi = async (
  companyId,
  role,
  search,
  pageNumber
) => {
  try {
    const response = await api?.get(
      `${server}/v1/admin/report-ghostingby-org?pageNo=${
        search ? 1 : pageNumber
      }&pageSize=10&role=${role}&search=${search || ""}&id=${companyId}`
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const getGR_ByCandidateList = async (company, search, pageNumber) => {
  try {
    const response = await api?.get(
      `${server}/v1/admin/report-ghostingby-can?pageNo=${
        search ? 1 : pageNumber
      }&pageSize=10&search=${search || ""}&companyName=${company}`
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const updateOrgnizationListApi = async (data, companyId) => {
  try {
    const response = await api?.patch(
      `${server}/v1/admin/edit-organizationprofile/${companyId}`,
      data
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const getRefrralList = async (Id) => {
  try {
    const response = await api?.get(`${server}/v1/global/veiw-referral/${Id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateCandidateListApi = async (data, candidateId) => {
  try {
    const response = await api?.patch(
      `${server}/v1/admin/edit-candidateprofile/${candidateId}`,
      data
    );
    // //console.log("response",response)
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const getTotalGhostingByCanListApi = async (
  candidateId,
  search,
  pageNumber
) => {
  try {
    const response = await api?.get(
      `${server}/v1/admin/getGhostedListOfCandidate?pageNo=${
        search ? 1 : pageNumber
      }&pageSize=10&id=${candidateId}&search=${search || ""}`
    );
    //console.log("response", response)
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const getTotalGhostingtoCanByOrg = async (
  candidateEmail,
  role,
  search,
  pageNumber
) => {
  //console.log("Test", candidateEmail, role, search, page)
  try {
    const response = await api?.get(
      `${server}/v1/admin/getghosting-list?pageNo=${
        search ? 1 : pageNumber
      }&pageSize=10&role=${role}&search=${search || ""}&email=${candidateEmail}`
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const addEmployee = async (data) => {
  try {
    const response = await api.post(`${server}/v1/global/addemployee`, data);
    return response;
  } catch (error) {
    //console.log("error", error)
    return error;
  }
};

export const registerAuth = async (data) => {
  try {
    const response = await api.post(`${server}/auth/register-auth`, data);
    return response;
  } catch (error) {
    //console.log("error", error)
    return error;
  }
};

export const addBulkCsv = async (data) => {
  try {
    const response = await api.post(`${server}/v1/admin/add-bulk-csv`, data);
    return response;
  } catch (error) {
    //console.log("error", error)
    return error;
  }
};
export const getAllRefrralList = async (search, pageNumber, start, end) => {
  console.log("search", search);
  //console.log("Testsfsdfsf", search, page, start, end,)
  try {
    const response = await api?.get(
      `${server}/v1/admin/getallreferral?pageNo=${
        search ? 1 : pageNumber
      }&pageSize=10&search=${search || ""}&start=${start || ""}&end=${
        end || ""
      }`
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const downloadAllReferralList = async (search, start, end) => {
  try {
    const response = await api.get(
      `${server}/v1/admin/download-Referral-list?search=${search || ""}&start=${
        start || ""
      }&end=${end || ""}`,
      {
        responseType: "blob",
      }
    );
    return response;
  } catch (error) {
    //console.log("error", error)
    return error;
  }
};

export const getAllEmployeeList = async (
  search,
  pageNumber,
  companyID,
  selectedItem,
  filterStatus
) => {
  const filter = filterStatus === "Select" ? "" : filterStatus;
  console.log("Test", selectedItem, filter);
  try {
    const response = await api.get(
      `${server}/v1/employee/getall?id=${companyID}&search=${
        search || filter || ""
      }&status=${selectedItem}&pageNo=${search ? 1 : pageNumber}&pageSize=5`
    );

    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const getDocumentLink = async (
  docID
) => {
  try {
    const response = await api.get(`${server}/v1/employee/get-employee-documentlink/${docID}`);

    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const getListFromLinkdinResume = async (upload) => {
  //console.log("upload", upload)
  try {
    let config = {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    };
    const response = await axios.post(
      `https://resume.offerghosting.com/upload`,
      upload,
      config
    );

    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const uploadInS3 = async (upload) => {
  try {
    let config = {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    };
    const response = await axios.post(
      `${server}/v1/file/upload-resume`,
      upload,
      config
    );
    return response;
  } catch (error) {}
};

export const addBulkResume = async (data) => {
  try {
    const response = await api.post(
      `${server}/v1/admin/add-resume-parse-candidates`,
      data
    );
    return response;
  } catch (error) {
    //console.log("error", error)
    return error;
  }
};

export const addEmailTemplateApi = async (data) => {
  try {
    const response = await api.post(`${server}/v1/admin/emailtemplate`, data);
    return response;
  } catch (error) {
    //console.log("error", error)
    return error;
  }
};

export const getEmailTemplateApi = async (emailType) => {
  try {
    const response = await api.get(
      `${server}/v1/admin/getemail-template?search=${emailType || ""}`
    );
    return response;
  } catch (error) {
    //console.log("error", error)
    return error;
  }
};

export const updateEmailTemplateApi = async (id, data) => {
  try {
    const response = await api.patch(
      `${server}/v1/admin/edit-emailtemplate/${id}`,
      data
    );
    return response;
  } catch (error) {
    //console.log("error", error)
    return error;
  }
};

export const DeleteEmailTemplateApi = async (id) => {
  //console.log("id",id)

  try {
    const response = await api.delete(
      `${server}/v1/admin/delete-emailtemplate/${id}`
    );

    return response;
  } catch (error) {
    //console.log("error", error)
    return error;
  }
};

export const getUnVerifiedOrgListApi = async (pagenumber, search) => {
  try {
    const response = await api?.get(
      `${server}/v1/admin/unverified/account?pageNo=${
        search ? 1 : pagenumber
      }&pageSize=10&search=${search || ""}`
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const updateUnVerifiedOrgListApi = async (
  value,
  status,
  rejectValue
) => {
  try {
    let data = {
      email: value.email,
      name: value.username,
      accepted: status.accepted,
      details: rejectValue.detail,
      reason: rejectValue.reason,
      solution: rejectValue.solution,
    };
    console.log("data", data);
    const response = await api?.patch(
      `/v1/admin/update/unverified-account/${value._id}`,
      data
    );
    return response;
  } catch (error) {
    //console.log("error", error)
  }
};

export const getUpdateTrustList = async () => {
  try {
    const response = await api?.get(`/v1/global/getOrgTrustScore`);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const addTrustList = async (data) => {
  try {
    const response = await api?.post(`/v1/global/addOrgTrustScore`, data);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
export const editTrustList = async (data) => {
  try {
    const response = await api?.post(`/v1/global/updateOrgTrustScore`, data);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const deleteTrustList = async (data) => {
  try {
    const response = await api?.post(`/v1/global/deleteTrustScore`, data);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
export const getEmailTemaplateForBothPromational = async (role) => {
  try {
    const response = await api.get(`/v1/admin/getemail-template?role=${role}`);
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const getListOfUploadedOrgFromCsv = async () => {
  try {
    const response = await api?.get(`/v1/global/getUploadedCsv`);
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const addHeaderAndFooter = async (data) => {
  try {
    const response = await api?.post(`/v1/admin/addheaderfooter`, data);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const getHeaderAndFooter = async () => {
  try {
    const response = await api?.get(`/v1/admin/getheaderfooter`);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const updateHeaderAndFooter = async (id, data) => {
  try {
    const response = await api?.patch(`/v1/admin/editheaderfooter/${id}`, data);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const addNotificationPreference = async (data) => {
  console.log("data", data);
  try {
    const response = await api?.post(`/v1/admin/notification/preference`, data);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const viewMoreDetails = async (id) => {
  console.log("can-id", id);
  try {
    const response = await api.get(`/v1/admin/viewmore/details/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const viewMoreEmployeeDetails = async (id) => {
  console.log("can-id", id);
  try {
    const response = await api.get(`/v1/employee/get-employee/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
export const deleteNotification = async(id)=>{
  try {
    console.log('id',id);
    const response = await api.delete(`v1/global/delete/preference/${id}`)
    return response
  } catch (error) {
    return error
  }
}


