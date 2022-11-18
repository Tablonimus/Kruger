import * as action from "../redux/actions/actionTypes";

const initialState = {
  loggedUser: [],
  employees: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case action.LOGIN: {
      return {
        ...state,
        loggedUser: payload,
      };
    }

    case action.GET_ALL_EMPLOYEES: {
      return {
        ...state,
        employees: payload,
      };
    }

    case action.CREATE_USER: {
      return {
        ...state,
      };
    }
    case action.PATCH_USER: {
      return {
        ...state,
      };
    }

    case action.CLEAR_STATE: {
      return {
        ...state,
        loggedUser: {},
      };
    }

    default:
      return state;
  }
}
