import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar  />
      <main className="flex-1 bg-gray-100">
        <Outlet  />
      </main>
    </div>
  );
}
