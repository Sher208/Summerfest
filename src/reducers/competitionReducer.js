import { COMPETITION } from '../constants/constant';

const initialState = {
    competition: null,
    competitions: [],
    loading: true,
    error: null
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
            competition: null,
            error: payload,
            loading: false
    };
    case COMPETITION.GET_ONE_COMPETITION_SUCCESS:
      return {
        ...state,
        competition: payload,
        loading: false
      };
    case COMPETITION.GET_ONE_COMPETITION_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case COMPETITION.RESET_SUCCESS:
      return {
          ...state,
          competition: null,
          error: null,
          loading: true
      };
    default:
      return state;
  }
};

export default competitionReducer;