import Image from "next/image";
import About from "../components/About";
import TableUser from "../components/TableUser";
import Footer from "../components/Footer";
import ServicesHome from "../components/ServicesHome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const notify = () => {toast.success("Wow so easy!")
  };
  return (
    <>
      <button onClick={notify}>Notify!</button>
      <About />
      <ServicesHome />
      <Footer />
      <TableUser/>
    </>
  );
}
