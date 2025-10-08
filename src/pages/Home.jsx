import { useEffect, useRef, useState } from "react";
import Circle from "../components/Circle";
import Nav from "../components/Nav";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"
import MyButton from "../components/MyButton";
import PhoneIcon from "../icons/PhoneIcon";
import TickIcon from "../icons/TickIcon";
import GlobeScene from "./GlobeScene";
import AboutUs from "./AboutUs";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (<>

    <div className="fixed top-0 z-100 w-full bg-white/30 backdrop-blur-[30px]">
      <Nav />
    </div>

    <Section1 />

    <div className="w-screen h-screen ">
      <Section2 />
    </div>

    <div>
      <AboutUs />
    </div>

    <div className="relative bg-black">
      <GlobeScene />
    </div>

    {/* next section */}

    <section className="bg-zinc-500 w-screen h-screen relative"></section>

  </>)
};

export default Home;
