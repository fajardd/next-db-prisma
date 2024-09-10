import React from "react";

const UserTable = (props) => {
  const { users } = props;
  return (
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
  );
};

export default UserTable;
