import {all} from 'redux-saga/effects';
import watchGetAllCompetition from './competitionSaga'

export default function* rootSaga() {
    yield all([
        watchGetAllCompetition()
    ]);
}