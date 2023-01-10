import axios from "axios";

const initialState = {
  user: null,
  chat: {
    selectedAtmosphere: "",
    selectedOccasion: "",
    selectedRelation: "",
    selectedRole: "",
    selectedReligion: "",
  },
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_CHANGED: {
      return { ...state, user: action.payload };
    }
    case QUERY_VARIABLE: {
      return { ...state, chat: action.payload };
    }
    default:
      return state;
  }
}

//selectors
export const getUser = (state) => state.user.user;
export const getQuery=(state)=>state.user.chat; 

//wow

export const USER_CHANGED = "user/userLogin";
export const QUERY_VARIABLE = "user/queryString";

//actions creator

export const userLogin = (credentails) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + "auth/login",
        credentails
      );
      // console.log(response, "<===== login");
      if (response.status === 200) {
        response.data.user.token = response.data.tokens.access.token;
        dispatch({ type: USER_CHANGED, payload: response.data.user });
      }
      return { status: response.status, message: response.data.message };
    } catch (e) {
      return { status: e.response.status, message: e.response.data.message };
    }
  };
};

//action

export const queryVariableChange = (chat) => {
  return { type: QUERY_VARIABLE, payload: chat };
};
