import React from "react";

const UserForm = (props) => {
  const { handleAddUser, name, email, handleChange } = props;
  return (
    <div className="border w-1/4 p-4 mb-5">
      <form onSubmit={handleAddUser} className="space-y-4">
        <div className="grid">
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama"
            className="w-full border border-slate-300"
          />
        </div>
        <div className="grid">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            // onChange={(e) => setEmail(e.target.value)}
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
  );
};

export default UserForm;
