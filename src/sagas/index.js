import {all} from 'redux-saga/effects';
import { watchGetAllCompetition, watchGetSingleCompetition, watchResetCompetitionAndError } from './competitionSaga'

export default function* rootSaga() {
    yield all([
        watchGetAllCompetition(),
        watchGetSingleCompetition(),
        watchResetCompetitionAndError()
    ]);
}