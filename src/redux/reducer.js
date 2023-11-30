const initialState = { questions: [] };
import { GETDATA } from "./actiontype";

export function datareducer(state = initialState, action) {
  switch (action.type) {
    case GETDATA:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
}
