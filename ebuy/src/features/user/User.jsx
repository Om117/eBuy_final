import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUserAsync } from "./UserSlice";

export default function User() {
  const count = useSelector();
  const dispatch = useDispatch();

  return (
    <div>
      <div></div>
    </div>
  );
}
