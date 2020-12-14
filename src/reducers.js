import { combineReducers } from 'redux';
import { ADD_TASK, COMPLETE_TASK, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function tasks(state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, {
                name: action.name,
                desc: action.desc,
                completed: false
            }];
        case COMPLETE_TASK:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: !state[action.index].completed
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

const taskApp = combineReducers({
    visibilityFilter,
    tasks
});

export default taskApp;