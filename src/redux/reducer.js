import { GET_DESTINATIONS } from "./actions";

const initialState = {
  Destinations: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DESTINATIONS:
      return {
        ...state,
        Destinations: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
