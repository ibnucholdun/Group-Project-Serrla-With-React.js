import axios from "axios";

export const GET_MODUL = "GET_MODUL";
export const FETCH_START = "FETCH_START";
export const GET_MODUL_SUCCESS = "GET_MODUL_SUCCESS";
export const GET_DETAIL_MODUL = "GET_DETAIL_MODUL";
export const SEARCH_MODUL = "SEARCH_MODUL";
export const FILTER_MODUL = "FILTER_MODUL";

const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

const getModulSuccess = (modul) => {
  return {
    type: GET_MODUL_SUCCESS,
    modul,
  };
};

export const getModul = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const modul = await axios.get(
      "https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/moduls?"
    );
    dispatch(getModulSuccess(modul.data));
  };
};

export const searchModul = (search) => {
  return {
    type: SEARCH_MODUL,
    search,
  };
};

export const getSearchedModul = (search) => {
  return async (dispatch) => {
    const searchModulData = await axios.get(
      `https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/moduls?title=${search}`
    );
    dispatch(searchModul(searchModulData.data));
  };
};

export const filterModul = (filter) => {
  return {
    type: FILTER_MODUL,
    filter,
  };
};

export const getFilteredModul = (category) => {
  const params = category ?? "";
  return async (dispatch) => {
    dispatch(fetchStart());
    const filterModulData = await axios.get(
      `https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/moduls?category=${params}`
    );
    console.log(filterModulData);
    dispatch(filterModul(filterModulData.data));
  };
};

const getDetailModulSuccess = (detailModul) => {
  return {
    type: GET_DETAIL_MODUL,
    detailModul,
  };
};

export const getDetailModul = (id) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const modul = await axios.get(
      `https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/moduls/${id}/content/${id}`
    );
    dispatch(getDetailModulSuccess(modul.data));
  };
};
