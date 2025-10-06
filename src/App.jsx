import "./App.css"
import Home from "./pages/Home";

import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

const App = () => {


  useEffect(() => {
    // 1️⃣ Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // scroll speed
      smooth: true,

    });

    // lenis.on('scroll', (e)=>console.log(e))

    // 2️⃣ Create a raf loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 3️⃣ Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>



    <Home />



  </>
}

export default App;