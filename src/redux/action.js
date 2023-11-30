const url = "https://stackoverflow-1rz2.onrender.com/questions";
import { GETDATA } from "./actiontype";

export async function getdata(dispatch) {
  try {
    let res = await fetch(url);
    res = await res.json();
    console.log(res);
    dispatch({ type: GETDATA, payload: res });
  } catch (error) {
    console.log(error);
  }
}
