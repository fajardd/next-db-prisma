import React from "react";
import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <h1>users</h1>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index}>
            <p>{user.name}</p>
          </div>
        ))
      ) : (
        <div className="text-red-400">Belum ada data untuk ditampilkan</div>
      )}
    </div>
  );
}
