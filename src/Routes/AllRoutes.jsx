import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { SignUp } from "../Pages/SignUp";
import { PrivateRoute } from "./PrivateRoute";
import { Forum } from "../Pages/Forum";
import { Answer } from "../Pages/Answer";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/forum"
        element={
          <PrivateRoute>
            <Forum />
          </PrivateRoute>
        }
      />
      <Route
        path="/answer/:id"
        element={
          <PrivateRoute>
            <Answer />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
