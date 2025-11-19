import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
	baseURL: "https://portfolio-server-gray-six.vercel.app"
})

const useAxiosInstance = () => {
	
	axiosInstance.interceptors.request.use((config) => {
		return config
	}, (error) => {
		console.log(error)
	})
	return axiosInstance;
}
export default useAxiosInstance;