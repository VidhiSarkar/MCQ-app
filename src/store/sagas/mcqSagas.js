import { put } from "redux-saga/effects";

import axios from "../../../axios-base";
import * as actions from "../actions";

export function* initQuestionsAvailableSaga() {

    try {
        const responseMovies = yield axios.get(
            "mcq"
        );
        yield put(actions.setQuestions(responseMovies));
    } catch (error) {
        yield put(actions.fetchQuestionsFailed());
    }
}