import React, { useEffect } from "react";
import { selectLoggedInUser, singOutAsync } from "../features/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    dispatch(singOutAsync());
  }, [dispatch]);

  return (
    <>
      {!user && (
        <Navigate to="/" replace={true}>
          {" "}
        </Navigate>
      )}
    </>
  );
}

export default Logout;
