import queryString from 'query-string';
import {
  // API_BASE, NOWPLAYING_ID, UPCOMING_ID,
  API_KEY, ACCESS_TOKEN
} from '../utils/constants';

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
  const contentType = response.headers.get('content-type');
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
  window.alert('Network Error', err);
  return Promise.reject(err);
}

function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(reportNetworkError);
}

export function getNowPlayingList(params = {}) {
  let queryParams = params;
  if (typeof params === 'object') {
    queryParams.api_key = API_KEY;
    queryParams = queryString.stringify(params);
  }

  // const endpoint = `/list/${NOWPLAYING_ID}?${queryParams}`;
  // const url = `${API_BASE}${endpoint}`;
  const url = `http://api.themoviedb.org/3/movie/now_playing?${queryParams}`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: ACCESS_TOKEN,
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}

export function getUpcomingList(params = {}) {
  let queryParams = params;
  if (typeof params === 'object') {
    queryParams.api_key = API_KEY;
    queryParams = queryString.stringify(params);
  }

  // const endpoint = `/list/${UPCOMING_ID}?${queryParams}`;
  // const url = `${API_BASE}${endpoint}`;
  const url = `http://api.themoviedb.org/3/movie/upcoming?${queryParams}`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: ACCESS_TOKEN,
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}

export function getConfiguration() { // TODO: https://api.themoviedb.org/3/configuration?api_key=
  return Promise.resolve();
}

export function getGenre() { // TODO: https://api.themoviedb.org/3/genre/movie/list
  return Promise.resolve();
}
