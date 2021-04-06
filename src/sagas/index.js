import {all} from 'redux-saga/effects';
import { watchGetAllCompetitionSaga, watchGetSingleCompetitionSaga, watchResetCompetitionSaga, watchResetErrorSaga} from './competitionSaga'

export default function* rootSaga() {
    yield all([
        watchGetAllCompetitionSaga(),
        watchGetSingleCompetitionSaga(),
        watchResetCompetitionSaga(),
        watchResetErrorSaga()
    ]);
}