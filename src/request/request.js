import axios from 'axios';
import queryString from 'qs';

const request = axios.create({
  baseURL: 'api',
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) =>
    queryString.stringify(params, { arrayFormat: 'comma' }),
});

export const getRequest = (url, params = null, options = null) => 
  request.get(url, { params, ...options });

export const postRequest = (url, data, params = null, options = null) =>
  request.post(url, data, { params, ...options });

export const putRequest = (url, data, params = null, options = null) =>
  request.put(url, data, { params, ...options });

export const patchRequest = (url, data, params = null, options = null) =>
  request.patch(url, data, { params, ...options });

export const deleteRequest = (url, params = null, options = null) =>
  request.delete(url, { params, ...options });

export const apiDefaultUrl = request.defaults.baseURL;
