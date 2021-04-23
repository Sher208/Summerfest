import {all} from 'redux-saga/effects';
import { watchGetAllCompetitionSaga, watchGetSingleCompetitionSaga, watchResetCompetitionSaga, watchResetErrorSaga} from './competitionSaga'
import {watchRegisterSaga, watchLoadUserSaga, watchLoginSaga, watchLogoutSaga} from './authSaga';

export default function* rootSaga() {
    yield all([
        watchGetAllCompetitionSaga(),
        watchGetSingleCompetitionSaga(),
        watchResetCompetitionSaga(),
        watchResetErrorSaga(),
        watchRegisterSaga(),
        watchLoadUserSaga(),
        watchLoginSaga(),
        watchLogoutSaga()
    ]);
}