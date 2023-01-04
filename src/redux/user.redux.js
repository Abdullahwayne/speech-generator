import axios from "axios";

const initialState = {
  user: {
    email: "",
    token: "",
    isLoggedIn:false,
  },
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_CHANGED:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

//selectors
export const getUser = (state) => state.user.user;

//wow

export const USER_CHANGED = "user/userLogin";


//actions creator

export const userLogin = (credentails) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + "auth/login",
        credentails
      );
      console.log(response, "<===== login");
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

