import * as action from "../actions/actionTypes";
import axios from "axios";
import { setAuthToken } from "../../components/BrowserHistory/setAuthToken";
//----------Login--------
export function login(payload) {
  return async function (dispatch) {
    try {
      console.log("payload", payload);
      await axios
        .post("http://localhost:3001/user/login", payload)
        .then((response) => {
          const token = response.data.data.token;
          const id = response.data.id.id;
          localStorage.setItem("token", token);
          localStorage.setItem("id", id);
          setAuthToken(token);
        });
      return dispatch({
        type: action.LOGIN,
        payload,
      });
    } catch (error) {
      return dispatch({
        type: action.LOGIN,
        payload: error.response.data,
      });
    }
  };
}

export function getUserProfile(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001/user/${id}`);
      return dispatch({
        type: action.GET_USER_PROFILE,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//------------GET ALL---------

export function getAllEmployees(token) {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/user/employees");
      dispatch({
        type: action.GET_ALL_EMPLOYEES,
        payload: json.data,
      });

      return "Success";
    } catch (error) {
      return "Server Error, try again later";
    }
  };
}

//-----------Create User---------
export function createUser(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post("http://localhost:3001/user/create", payload);

      dispatch({
        type: action.CREATE_USER,
        payload: json.data,
      });

      return "Created";
    } catch (error) {
      return "Server Error, try again later";
    }
  };
}
//-----------Edit User---------
export function patchUser(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.patch("http://localhost:3001/user/edit", payload);

      dispatch({
        type: action.PATCH_USER,
        payload: json.data,
      });

      return "Edited";
    } catch (error) {
      return "Server Error, try again later";
    }
  };
}
