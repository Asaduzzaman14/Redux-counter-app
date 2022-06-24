import { createStore } from "redux";
import CounterReducer from "../CounterReducr/CounterReducer";

export const store = createStore(CounterReducer);


