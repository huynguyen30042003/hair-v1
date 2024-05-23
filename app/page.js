import Image from "next/image";
import About from "../components/About"
import Footer from "../components/Footer";
import ServicesHome from "../components/ServicesHome";
import Navbar from "../components/Navbar"

export default function Home() {
  return (
<>
<Navbar/>
<About/>
<ServicesHome/>
<Footer/>
</>
  );
}
