import * as action from "../actions/actionTypes";
import axios from "axios";

//----------Login--------
export function login(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post("http://localhost:3001/user/login", payload);
      localStorage.setItem("loggeduser", JSON.stringify(json.data)).then(
        dispatch({
          type: action.LOGIN,
          payload: json.data,
        })
      );

      return "Logged";
    } catch (error) {
      return "Server Error, try again later";
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
