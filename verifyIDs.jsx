// import axios from 'axios';
// import { verifyPanKey } from './server';



// export const verifyPAN = async (id) => {
//     const options = {
//         method: 'POST',
//         url: 'https://pan-card-verification1.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_pan',
//         headers: {
//           'content-type': 'application/json',
//           'X-RapidAPI-Key': '4895bc09damsha686117fbb5cab8p12b5dejsn57a9f34fa4d0',
//           'X-RapidAPI-Host': 'pan-card-verification1.p.rapidapi.com'
//         },
//         data: {
//           task_id: '74f4c926-250c-43ca-9c53-453e87ceacd1',
//           group_id: '8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e',
//           data: {
//             id_number: id
//           }
//         }
//         };
// try {
//     // //console.log(id, 'id');
// 	const response = await axios.request(options);
// 	// //console.log(response.data);
//     return response;
// } catch (error) {
// 	console.error(error);
//     return error;
// }
// }

// // pan card verification at lowest price
// export const verifyPanLow = async (id) => {
// const options = {
//   method: 'GET',
//   url: `https://pan-card-verification-at-lowest-price.p.rapidapi.com/verifyPan/${id}`,
//   headers: {
//     'x-rapid-api': 'rapid-api-database',
//     'X-RapidAPI-Key': verifyPanKey,
//     'X-RapidAPI-Host': 'pan-card-verification-at-lowest-price.p.rapidapi.com'
//   }
//   //sinhakaran01235
//   // headers: {
//   //   'x-rapid-api': 'rapid-api-database',
//   //   'X-RapidAPI-Key': '391827dc79mshf9e9ce3c2409e9bp1dd437jsn251e462fe43d',
//   //   'X-RapidAPI-Host': 'pan-card-verification-at-lowest-price.p.rapidapi.com'
//   // }
//   //sinhakaran7701
//   // headers: {
//   //   'x-rapid-api': 'rapid-api-database',
//   //   'X-RapidAPI-Key': 'afe63a9470msh365dfd197d85067p135da1jsn89278330a4ac',
//   //   'X-RapidAPI-Host': 'pan-card-verification-at-lowest-price.p.rapidapi.com'
//   // }
//   // headers: {
//   //   'x-rapid-api': 'rapid-api-database',
//   //   'X-RapidAPI-Key': '643dd40ac4mshe48f6e873347b48p12bbc0jsn3d2f26c7b592',
//   //   'X-RapidAPI-Host': 'pan-card-verification-at-lowest-price.p.rapidapi.com'
//   // }
// };

// try {
// 	const response = await axios.request(options);
//   return response;
// } catch (error) {
// 	console.error(error);
//   return error
// }
// }
//wrong pan reponse
// response {
//  "@entity": "individual",
//  "pan": "itdps5630d"
//}
//correct response
//{
//   "@entity": "individual",
//   "pan": "itdps5630a",
//   "first_name": "KARAN",
//   "last_name": "SINHA"
// }
//----or---
// {
//   "@entity": "individual",
//   "pan": "FNLPM8635N",
//   "first_name": "TAZIM",
//   "middle_name": "KARIM",
//   "last_name": "MADRE"
// }
//----or-----
// {
//   "@entity": "company",
//   "pan": "abhcs4634d",
//   "last_name": "SUMERU DIGITAL SOLUTIONS PRIVATE LIMITED"
// }

import api from "./axiosInstance";

export const checkPanNumber = async (pan) => {
  console.log(pan);
  try{
    const res = await api.post('v1/plugin/check-pan',{pan})
    console.log(res)
    return res;
  }catch(error){
    console.log(error)
    return error
  }
}

export const checkcanidatePan = async (pan, userPan) => {
  try {
    const res = await api.get(`v1/Candidate/check-candidate-pan?search=${pan}&searchPan=${userPan}`)
    return res;
  } catch (error) {
    throw error
  }
}
//
export const addNewCandidatePan = async (body) => {
  try {
    const res = await api.post(`v1/Candidate/addNew-pan`, body)
    return res;
  } catch (error) {
    throw error
  }
}