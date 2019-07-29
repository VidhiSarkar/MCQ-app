import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    questions: []
};

const setQuestions = ( state, action ) => {
    return {...state, questions: action.questions};
};

const fetchQuestionsFailed = (state) => {
    return {...state, ...{ error: true }};
};

const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case actionTypes.INIT_QUESTIONS: return setQuestions( state, action );
        case actionTypes.FETCH_QUESTIONS_FAILED: return fetchQuestionsFailed( state, action );
        default: return state;
    }
};

export default reducer;