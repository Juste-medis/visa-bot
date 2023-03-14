import Neter from '../Ressources/Neter';
import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = Neter.uri1;

export async function GetOffers(level, query) {
  let url = baseUrl + '/nexapi/royal/offers/getall';
  return await axios
    .request({
      baseURL: url,
      method: 'get',
      responseType: 'json',
      params: { ...(level ? { level } : {}), ...(query ? { query } : {}) },
      headers: {
        Accept: 'application/json'
      }
    })
    .catch(err => {
      toast.error(`${err}`);
      //document.location.href = '/errors/404';
    });
}

export async function GetUsers(option, consID, query) {
  let url = baseUrl + '/auth/users/user/list';
  return await axios
    .request({
      baseURL: url,
      method: 'get',
      responseType: 'json',
      params: { option, consID, ...(query ? { query } : {}) },
      headers: {
        Accept: 'application/json'
      }
    })
    .catch(err => {
      toast.error(`${err}`);
      //document.location.href = '/errors/404';
    });
}

export async function GetOffer(ID, level, userId) {
  let url = baseUrl + '/nexapi/royal/offers/getunity/' + ID;
  return await axios.request({
    baseURL: url,
    method: 'get',
    responseType: 'json',
    params: {
      level,
      ...(userId ? { userId } : {})
    },
    headers: {
      Accept: 'application/json'
    }
  });
}

export async function ApplyToOffer(data, ID, action) {
  let url = baseUrl + '/nexapi/royal/offers/applyto/' + ID;
  url += action ? '?action=' + action : '';

  return await axios.request({
    baseURL: url,
    method: 'post',
    responseType: 'json',
    data,
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export async function ApplyToUser(data, ID, action) {
  let url = baseUrl + '/nexapi/royal/offers/applyto/candidate/' + ID;
  url += action ? '?action=' + action : '';

  return await axios.request({
    baseURL: url,
    method: 'post',
    responseType: 'json',
    data,
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export async function RespondToDemand(data, ID, action) {
  let url = baseUrl + '/nexapi/royal/offers/respondto/candidate/' + ID;
  url += action ? '?action=' + action : '';
  return await axios.request({
    baseURL: url,
    method: 'post',
    responseType: 'json',
    data,
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

export async function RespondToApplication(data, ID, action) {
  let url = baseUrl + '/nexapi/royal/offers/respondto/offer/' + ID;
  url += action ? '?action=' + action : '';
  return await axios.request({
    baseURL: url,
    method: 'post',
    responseType: 'json',
    data,
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

export async function SearchText(data, src) {
  let url = baseUrl + '/nexapi/royal/search/term?term=' + data + '&src=' + src;
  let res = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  return await res.json();
}
