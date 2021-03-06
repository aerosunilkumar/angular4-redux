import {
    applyMiddleware,
    Store,
    combineReducers,
    compose,
    createStore
  } from 'redux';

// import reduxLogger from 'redux-logger';
  
import { ITodo } from './ITodo'
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './actions'
export interface IAppState {
    todos: ITodo[],
    lastUpdated: Date
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdated: null
}

export function rootReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODO:
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdated: new Date()
            });
        case TOGGLE_TODO:
            var todo = state.todos.find(t => t.id === action.id);
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
                    ...state.todos.slice(index + 1)
                ],
                lastUpdated: new Date()
            })
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id != action.id),
                lastUpdated: new Date()
            })
        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdated: new Date()
            })
    }
    return state;
}

// export function rootReducer1(state=INITIAL_STATE, action) {
//     return Object.assign({}, state, {
//         todo:  action.todo
//     });
// }

const rootReducerCombine = combineReducers({
    rootReducer,
    // rootReducer1
  });

  export const store = createStore(
    rootReducer
    // compose(
    //   applyMiddleware(
    //     thunk,
    //     reduxLogger
    //   )
    // )
  ) as Store<IAppState>