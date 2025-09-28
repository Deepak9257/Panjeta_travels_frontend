import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const AboutUs = () => {

  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1.2,
        start: "top 0",
        end: "bottom 0",
        markers: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 → 1
          // Content 1: show between 20–40%
          if (progress == 0.5 && progress < 1) {
            gsap.to([content1Ref.current, content2Ref.current], {
              opacity: 1,
              y: 0,
              duration: 0.5
            });
          } else {
            gsap.to([content1Ref.current, content2Ref.current], { opacity: 0, y: -150, duration: 0.5 });
          }
        }
      },
    });

    tl.from(lineRef.current, {
      y: -5,
      height: 0,
      duration: 5,
      ease: "linear",
    });
  });

  return (<>
    <div ref={containerRef} className="bg-zinc-700 w-screen h-screen flex flex-col">

      <h1 className="text-center">About Us</h1>

      <div className="container flex flex-1 justify-between relative px-40 pt-5 border gap-10">

        {/* left container */}

        <div className="border flex flex-col flex-1 justify-center">

          <div ref={content1Ref} className=" border h-[20%]">
            left content
          </div>

        </div>

        {/* progress_bar */}

        <div className="border-1 px-5 h-full relative">

          <div className="overflow-hidden size-full rounded-full bg-linear-to-t from-blue-500 to-gray-600 flex justify-center relative">

            <div ref={lineRef} className="w-1.5 rounded-full border-2 border-orange-500 bg-orange-500 "></div>

          </div>

          <div className="size-4 rounded-full bg-orange-500 shadow-2xl absolute top-[50%] left-1/2 -translate-x-1/2">
          </div>



        </div>

        {/* right container */}
        <div className="border flex flex-col flex-1">

          <div className=" border h-[15%]">

          </div>

          <div ref={content2Ref} className=" border h-[20%]">
            right content 2
          </div>

        </div>

      </div>

    </div>

  </>)
}

export default AboutUs;

