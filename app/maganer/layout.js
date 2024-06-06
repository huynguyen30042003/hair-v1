import { Inter } from "next/font/google";
import Navbar from "components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Secondary Layout",
  description: "A secondary layout for specific pages",
};

export default function SecondaryLayout({ children, session }) {
  return (
    <>
        <Sidebar/>
            <div className="ml-[320px] pt-[52px] ">
                {children }
            </div>
        <ToastContainer />
    </>
  );
}
