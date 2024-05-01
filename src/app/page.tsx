import Image from "next/image";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Stacks from "./components/Stacks/Stacks";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

export default function Main() {
  return (
    <>
    <About/>
    <Project/>
    <Stacks/>
    <Contact/>
    <Footer/>
    </>
  );
}
