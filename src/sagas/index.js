import {all} from 'redux-saga/effects';
import { watchGetAllCompetition, watchGetSingleCompetition, watchResetCompetition, watchResetError} from './competitionSaga'

export default function* rootSaga() {
    yield all([
        watchGetAllCompetition(),
        watchGetSingleCompetition(),
        watchResetCompetition(),
        watchResetError()
    ]);
}