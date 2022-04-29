import axios from 'axios';
import createAuthRefreshInterceptor from "axios-auth-refresh";

export const axiosInstance = axios.create({
    baseURL: "https://baseAPIUrl",
    timeout: 10000,
    withCredentials: true,
    headers: {
        accessControlAllowOrigin: '*',
        crossDomain: true,
        'content-type': 'application/json',
        accept: 'application/json',
    },

});

export const refreshAuthLogic = (failedRequest: any)=>axiosInstance.post("/refresh_token_path");

createAuthRefreshInterceptor(axiosInstance,refreshAuthLogic)