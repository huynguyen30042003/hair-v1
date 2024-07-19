"use client";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const StaffPage = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ padding: "20px", flexGrow: 1 }}>{children}</main>
      </div>
    </div>
  );
};

export default StaffPage;
