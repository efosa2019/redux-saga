import { takeEvery, all } from 'redux-saga/effects';

import { GET_ALL_DATA } from '../types';
import { getAllDataSaga } from './data';

export function* watchData() {
    yield all([
        takeEvery(GET_ALL_DATA, getAllDataSaga)
    ]);
}