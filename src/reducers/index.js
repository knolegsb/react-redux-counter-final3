import { INCREMENT, DECREMENT, SET_INIT } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    value: [],
    initial: 1
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value.concat(state.initial)
                
            });
      
        case SET_INIT:
            return Object.assign({}, state, {
                initial: action.initial               
            });
        default:
            return state;
    }
};

const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const counterApp = combineReducers({
    counter,
    extra
});

export default counterApp;
