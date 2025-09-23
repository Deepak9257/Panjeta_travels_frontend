import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Rough() {
  const containerRef = useRef(null);
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "200%", // scrolling distance
        scrub: true,
        pin: true,   // pin the container so page1 stays fixed
        markers: true, // for debugging
      },
    });

    // Step 1: Page1 stays pinned (background)
    // No animation needed, pin keeps it in place

    // Step 2: Page2 slides in from bottom
    tl.fromTo(
      page2Ref.current,
      { y: "100%" },   // start off-screen
      { y: "0%", duration: 1, ease: "power2.out" }, // slide to top
      0 // start immediately when scrolling
    );
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Page 1 (background) */}
      <div
        ref={page1Ref}
        className="absolute inset-0 bg-black text-white flex items-center justify-center text-4xl"
      >
        Page 1 — stays behind
      </div>

      {/* Page 2 (slides over) */}
      <div
        ref={page2Ref}
        className="absolute inset-0 bg-white text-black flex items-center justify-center text-4xl"
      >
        Page 2 — slides on top
      </div>
    </div>
  );
}
