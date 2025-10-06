import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const AboutUs = () => {

  const itemRefs = useRef([]);
  const dateRefs = useRef([]);
  const contentRefs = useRef([]);
  const imgRefs = useRef([]);
  const circleRefs = useRef([]);

  itemRefs.current = [];
  dateRefs.current = [];
  contentRefs.current = [];
  imgRefs.current = [];
  circleRefs.current = [];

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };


  // time line items array 
  const timelineItems = [
    {
      date: 'January 2010',
      content: ' Tesla introduces its first electric car, the Roadster, showing the world the potential of electric vehicles with a  range of over 200 miles.',
      imgSrc: 'https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39//960x0.jpg'
    },

    {
      date: 'January 2010',
      content: ' Tesla introduces its first electric car, the Roadster, showing the world the potential of electric vehicles with a  range of over 200 miles.',
      imgSrc: 'https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39//960x0.jpg'
    },

    {
      date: 'January 2010',
      content: ' Tesla introduces its first electric car, the Roadster, showing the world the potential of electric vehicles with a  range of over 200 miles.',
      imgSrc: 'https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39//960x0.jpg'
    },

    {
      date: 'January 2010',
      content: ' Tesla introduces its first electric car, the Roadster, showing the world the potential of electric vehicles with a  range of over 200 miles.',
      imgSrc: 'https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39//960x0.jpg'
    }

  ]

  // scroll to top after refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // animation logic
  useGSAP(() => {

    const handleLoad = () => {
      animate1();
    }

    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad)

  }, []);


  const animate1 = () => {
    itemRefs.current.forEach((item, i) => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          scroller: 'body',
          start: 'top 35%',
          end: 'bottom 100%',
          scrub: 1,
          // markers: true
        }
      });

      tl.from(dateRefs.current[i], {
        top: 50,
        opacity: 0,
        duration: 1,
        ease: 'power1.out'
      }, 'same')

      tl.from(contentRefs.current[i], {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power1.out'
      }, 'same')

      tl.from(imgRefs.current[i], {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power1.out'
      }, 'same')

      tl.from(circleRefs.current[i], {
        scale: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, 'same')
    });
  }

  return (<>

    <div className="bg-white w-full h-auto flex flex-col">

      {/* <div className="h-[25vh] w-full z-1 bg-white"></div> */}

      <h1 className="text-center text-8xl py-10 bg-white text-orange-500 z-1">About Us</h1>

      <div className="timeline_component flex flex-col gap-20   py-20">

        {/* progress bar */}

        <div className="timeline_progress fixed top-0  bg-sky-600 w-1 h-full left-[50%] -translate-x-1/2">

          <div className="timeline_progress-bar fixed h-[50vh] top-0 left-[50%] -translate-x-1/2 rounded  w-[calc(2px+0.2rem)] bg-[linear-gradient(360deg,rgba(255,98,31,1)0%,rgba(252,181,0,1)50%,rgba(255,255,0,1)100%)]"></div>

        </div>

        {/* timeline items  */}

        {timelineItems && timelineItems.map((item, idx) => (
          <div
            key={idx}
            ref={el => addToRefs(el, itemRefs)}
            className={`timeline_item flex gap-20 text-2xl relative ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className={`timeline_left  flex-1 relative flex ${idx % 2 === 0 ? "justify-end" : "justify-start"} items-center border p-5`}>
              <div className="timeline_date-text overflow-hidden text-black sticky top-[50vh] ">
                <span ref={el => addToRefs(el, dateRefs)} className="relative">{item.date}</span>
              </div>
            </div>

            <div ref={el => addToRefs(el, circleRefs)} className="timeline_circle size-4 bg-orange-500 rounded-full absolute left-1/2 -translate-x-1/2 top-[48%]"></div>

            <div className="timeline_right flex-1 p-5 flex flex-col items-center gap-10 border ">
              <div className="timeline_text overflow-hidden w-[480px]">
                <span ref={el => addToRefs(el, contentRefs)} className="relative text-black">
                  {item.content}
                </span>
              </div>
              <div className="timeline_image-wrapper overflow-hidden ">
                <img ref={el => addToRefs(el, imgRefs)} className="relative rounded-2xl" src={item.imgSrc} width="480" alt="Tesla Roadster" />
              </div>
            </div>
          </div>
        ))}


      </div>

      <div className="h-[25vh] w-full black bg-[linear-gradient(180deg,rgba(115,115,115,1)0%,rgba(26,26,26,1)50%,rgba(0,0,0,1)100%)] z-1"></div>

    </div>


  </>)
}

export default AboutUs;

