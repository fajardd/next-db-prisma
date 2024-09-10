"use client";
import { UserProvider } from "@/context/UserContext";
import DashboardPage from "@/components/Layouts/DashboardPage";

export default function Dashboard() {
  return (
    <UserProvider>
      <DashboardPage />
    </UserProvider>
  );
}
