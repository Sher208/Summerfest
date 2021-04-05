import {success, fail} from '../utils/constAppend';
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
    case success(COMPETITION.LOAD):
      return {
        ...state,
        competitions: payload,
        loading: false
      };
    case fail(COMPETITION.LOAD):
        return {
            ...state,
            competition: null,
            error: payload,
            loading: false
    };
    case success(COMPETITION.GET_ONE_COMPETITION):
      return {
        ...state,
        competition: payload,
        loading: false
      };
    case fail(COMPETITION.GET_ONE_COMPETITION):
      return {
        ...state,
        error: payload,
        loading: false
      };
    case success(COMPETITION.RESET_COMPETITION):
      return {
          ...state,
          competition: null,
          loading:false
      };
    case success(COMPETITION.RESET_ERROR):
      return {
          ...state,
          error: null,
          loading:false
      };
    default:
      return state;
  }
};

export default competitionReducer;