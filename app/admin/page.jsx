"use client";
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const AdminPage = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 flex-grow overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
