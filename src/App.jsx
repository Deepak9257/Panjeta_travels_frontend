import "./App.css"
import Home from "./pages/Home";

import Lenis from 'lenis'
import { useEffect, useRef, useState } from 'react'

const App = () => {

  const [loading, setLoading] = useState(false)

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

    // loading effect
    const handleLoading = () => {
      setLoading(false)
    }

    // if (document.readyState === 'complete') {
    //   setLoading(false)
    // } else {
    //   window.addEventListener('load', handleLoading)

    // }

    // 3️⃣ Cleanup
    return () => {
      lenis.destroy();
      window.removeEventListener('load', handleLoading)

    };
  }, []);

  return <>



    {loading
      ? <div className="w-screen h-screen bg-zinc-500">Loading...</div>
      : <Home />
    }



  </>
}

export default App;