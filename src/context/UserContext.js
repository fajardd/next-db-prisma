import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("../api/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch users", error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const newUser = { name, email };
      const response = await axios.post("../api/users", newUser);

      setUsers([...users, response.data]);
      setName("");
      setEmail("");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Email sudah digunakan, silahkan gunakan email lain");
      } else {
        console.error("Failed to add user", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <UserContext.Provider
      value={{ users, loading, name, email, handleChange, handleAddUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
