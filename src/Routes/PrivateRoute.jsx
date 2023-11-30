/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    function temp() {
      if (!localStorage.getItem("user")) {
        navigate("/");
        return;
      }
    }
    temp();
  }, [navigate]);

  return <div>{children}</div>;
};
