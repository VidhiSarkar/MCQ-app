import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { initQuestionsAvailableSaga } from "./mcqSagas";

export function* watchMcqQuestions() {
    yield takeEvery(actionTypes.INIT_WATCH_QUESTIONS, initQuestionsAvailableSaga);
}