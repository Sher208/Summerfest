import {COMPETITION} from '../constants/constant';

export const loadCompetitions = () => ({
    type: COMPETITION.LOAD
});

export const loadCompetitionById = (id) => {
    return {type: COMPETITION.GET_ONE_COMPETITION, payload: id};
};
    
export const resetCompetition = () => ({
    type: COMPETITION.RESET_COMPETITION
});

export const resetError = () => ({
    type: COMPETITION.RESET_ERROR
});