"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
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
      console.error("Failed to add user", error);
    }
  };

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
      <div className="border w-1/4 p-4 mb-5">
        <form onSubmit={handleAddUser} className="space-y-4">
          <div className="grid">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama"
              className="w-full border border-slate-300"
            />
          </div>
          <div className="grid">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              className="w-full border border-slate-300 text-blue-800"
            />
          </div>
          <button
            type="submit"
            className="w-full text-center bg-green-500 text-white"
          >
            Add user
          </button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th className="border px-10">No</th>
            <th className="border">Nama</th>
            <th className="border">Email</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td className="border px-10">{index + 1}</td>
                <td className="border px-10">{user.name}</td>
                <td className="border px-10">{user.email}</td>
                <td className="border px-10">UPDATE || DELETE</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-red-400">
                Belum ada data untuk ditampilkan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
