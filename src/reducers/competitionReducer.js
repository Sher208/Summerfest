import { COMPETITION } from '../constants/constant';

const initialState = {
    competitions: [],
    loading: true,
    error: {}
};

const competitionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case COMPETITION.LOAD_SUCCESS:
      return {
        ...state,
        competitions: payload,
        loading: false
      };
    case COMPETITION.LOAD_FAIL:
      return {
          ...state,
          competitions: null,
          error: payload,
          loading: false
      };
    default:
      return state;
  }
};

export default competitionReducer;