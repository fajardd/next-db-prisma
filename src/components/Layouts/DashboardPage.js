import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import UserForm from "../Fragments/UserForm";
import UserTable from "../Fragments/UserTable";

const DashboardPage = () => {
  const { users, loading, name, email, handleChange, handleAddUser } =
    useContext(UserContext);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1>users</h1>
      <UserForm
        name={name}
        email={email}
        handleChange={handleChange}
        handleAddUser={handleAddUser}
      />
      <UserTable users={users} />
    </div>
  );
};

export default DashboardPage;
