import {success, fail} from '../utils/constAppend';
import { COMPETITION } from '../constants/constant';

const initialState = {
    competition: null,
    competitions: [],
    loading: false,
    error: null
};

const competitionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case COMPETITION.LOAD:
      return {
        ...state,
        loading: true
      };
    case success(COMPETITION.LOAD):
      return {
        ...state,
        competitions: payload,
        error: null,
        loading: false
      };
    case fail(COMPETITION.LOAD):
        return {
            ...state,
            competition: null,
            error: payload,
            loading: false
    };
    case COMPETITION.GET_ONE_COMPETITION:
      return {
        ...state,
        loading: true
      };
    case success(COMPETITION.GET_ONE_COMPETITION):
      return {
        ...state,
        competition: payload,
        error: null,
        loading: false
      };
    case fail(COMPETITION.GET_ONE_COMPETITION):
      return {
        ...state,
        error: payload,
        competition: null,
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