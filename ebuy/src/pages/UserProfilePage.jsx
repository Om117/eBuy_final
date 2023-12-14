import React from "react";
import Navbar from "../components/Navbar";
import UserProfile from "../features/user/UserProfile";

function UserProfilePage() {
  return (
    <Navbar>
      <h1 className="mx-auto text-2xl">My Profile</h1>
      <UserProfile />
    </Navbar>
  );
}

export default UserProfilePage;
