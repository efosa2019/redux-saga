import { reject } from "q";
import { put } from 'redux-saga/effects';

import * as actions from '../actions';
import { getAllData } from '../../services/dataService';

export function* getAllDataSaga() {
    try {
        const resp = yield getAllData();
        yield put(actions.data.setAllData(resp));
    } catch (error) {
        reject(error);
    }
}
