import { API_BASE, API_KEY, NOWPLAYING_ID, UPCOMING_ID, ACCESS_TOKEN } from '../utils/constants';
import queryString from 'query-string';

// const optionsGet = (params = {}) => ({
//   method: 'GET',
//   headers: {
//     // Accept: 'application/json, application/xml, text/plain, text/html, *.*',
//     'Authorization': ACCESS_TOKEN,
//     'Content-Type': 'application/json; charset=utf-8',
//     // 'pragma': 'no-cache',
//     // 'cache-control': 'no-cache',
//     ...params,
//   }
// });

// const optionsPost = (params = "") => ({
//   method: 'POST',
//   headers: {
//     // Accept: 'application/json, application/xml, text/plain, text/html, *.*',
//     'Content-Type': 'application/json; charset=utf-8',
//     'pragma': 'no-cache',
//     'cache-control': 'no-cache',
//   },
//   body: params,
// });

function parseJSON(response) {
  const contentType = response.headers.get("content-type");
  if (contentType.includes('json')) return response.json();
  else if (contentType.includes('html') || contentType.includes('pdf')) return response.text();
  return response.json();
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  return response.json().then((json) => {
    const error = new Error(json.message || response.statusText);
    error.response = response;
    throw error;
  });
}

function reportNetworkError(err) {
  console.warn(err);
  window.alert(`Network Error`, err);
  return Promise.reject(err);
}

function request(endpoint, options) {
  const url = `${API_BASE}${endpoint}`;
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(reportNetworkError);
}

export function getNowPlayingList(params = {}) {
  let queryParams = params;
  if (typeof params === 'object') {
    params.api_key = API_KEY;
    queryParams = queryString.stringify(params);
  }

  const endpoint = `/list/${NOWPLAYING_ID}?${queryParams}`;
  const options = {
    method: 'GET',
    headers: {
      'Authorization': ACCESS_TOKEN,
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  return request(endpoint, options);
}

export function getUpcomingList(params = {}) {
  let queryParams = params;
  if (typeof params === 'object') {
    params.api_key = API_KEY;
    queryParams = queryString.stringify(params);
  }

  const endpoint = `/list/${UPCOMING_ID}?${queryParams}`;
  const options = {
    method: 'GET',
    headers: {
      'Authorization': ACCESS_TOKEN,
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  return request(endpoint, options);
}
