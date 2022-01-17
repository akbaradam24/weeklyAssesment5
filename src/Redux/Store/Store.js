import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../Reducer/index";
import thunk from "redux-thunk";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const globalStore = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default globalStore;
