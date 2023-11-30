import { legacy_createStore } from "redux";
import { datareducer } from "./reducer";

export const store = legacy_createStore(datareducer);
