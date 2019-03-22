import { createStore } from "redux";
import state from "./state.js";
import reducer from "./reducers";

export default createStore(reducer, state);
