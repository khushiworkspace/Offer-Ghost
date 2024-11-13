import { server } from "./server";

import api from "./axiosInstance";


export const getAllRegisteredOrganizationList = async(search) => {
   
    try {
        
        const response= await api?.get (`${server}/v1/global/organization-list?search=${search ||''}`)  
    
       return response
       
    } catch (error) {
        //console.log("error",error)  
    }
}


export const updateSubcriptionPlanValidity = async(role) => {
   
    try {
        console.log('role',{role});
        const response= await api?.patch (`${server}/v1/global/update/subscriptionplan`,{role})  
    
       return response
       
    } catch (error) {
        //console.log("error",error)  
    }
}

export const employmentList = async() => {
   
    try {

        const response= await api?.get (`${server}/v1/employee/experience`)  
    
       return response
       
    } catch (error) {
        //console.log("error",error) 
        throw error 
    }
}

export const updateIssue = async(id, msg) => {
   
    try {

        const response= await api?.post(`${server}/v1/employee/change-experience`,{id,msg})  
    
       return response
       
    } catch (error) {
        //console.log("error",error) 
        throw error 
    }
}

export const notificationCount = async() => {
   
    try {

        const response= await api?.get(`${server}/v1/BusinessOwner/total-notificationcout`,)  
    
       return response
       
    } catch (error) {
        //console.log("error",error) 
        throw error 
    }
}
export const NotificationUpdate = async() => {
   
    try {

        const response= await api?.patch(`${server}/v1/BusinessOwner/update/viewalert`,)  
    
       return response
       
    } catch (error) {
        //console.log("error",error) 
        throw error 
    }
}
