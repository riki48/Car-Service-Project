import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension"
import thunk from 'redux-thunk';
import { wizardReducer } from './wizardReducer';

const rootReducer = combineReducers({
    wizard: wizardReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
