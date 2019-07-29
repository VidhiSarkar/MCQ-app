import * as actionTypes from './actionTypes';

export const initWatchQuestions = () => {
    return {
        type: actionTypes.INIT_WATCH_QUESTIONS
    };
};

export const setQuestions = ( questions ) => {
    return {
        type: actionTypes.INIT_QUESTIONS,
        questions
    };
};

export const fetchQuestionsFailed = ( seats ) => {
    return {
        type: actionTypes.FETCH_QUESTIONS_FAILED
    };
};
