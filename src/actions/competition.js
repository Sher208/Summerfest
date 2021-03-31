import {COMPETITION} from '../constants/constant';

export const loadCompetitions = () => ({
    type: COMPETITION.LOAD
});

export const loadCompetitionById = (id) => {
    return {type: COMPETITION.GET_ONE_COMPETITION, payload: id};
}
    
