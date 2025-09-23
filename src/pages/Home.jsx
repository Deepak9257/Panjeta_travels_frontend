import { useEffect, useRef, useState } from "react";
import Circle from "../components/Circle";
import HeroContent from "../components/HeroContent";
import Nav from "../components/Nav";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"
import MyButton from "../components/MyButton";
import PhoneIcon from "../icons/PhoneIcon";
import TickIcon from "../icons/TickIcon";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const circleRef = useRef(null);
  const section1Ref = useRef(null);
  const heroSectionRef = useRef(null);
  const heroSectionRef2 = useRef(null);
  const mainTextRef = useRef(null);
  const containerRef = useRef(null)
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //store the divs to animate 
  const sideDivsRef = useRef([]);
  sideDivsRef.current = []; // reset before mapping

  const addToRefs = (el) => {
    if (el && !sideDivsRef.current.includes(el)) {
      sideDivsRef.current.push(el);
    }
  };

  // animation logic
  useGSAP(() => {

    section1Animation();
    section2Animation();
  });

  const section1Animation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section1Ref.current,
        scroller: 'body',
        pin: true,
        scrub: 0.8,
        start: 'top 0',
        end: 'bottom -15',
        // markers: true,
      }
    })

    tl.to(circleRef.current, {
      scale: 4,
      ease: "none",
    }, 'same')

    tl.to(heroSectionRef.current, {
      y: -700,
      ease: "none",
    }, 'same')

    tl.to(heroSectionRef2.current, {
      yPercent: -250,
      ease: "none",
    }, 'same')

  }

  const section2Animation = () => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef2.current,
        scroller: 'body',
        start: 'top 70%%',
        end: 'bottom 100%',
        scrub: 1,
        // markers: true,
      }
    })

    tl2.from(mainTextRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut'

    }, 'anim')

    tl2.from(sideDivsRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut',
      stagger: 0.3,

    }, 'anim')


  }


  return (<>


    <div className="relative w-full h-screen">

      <div className="fixed top-0 z-100 w-full bg-white ">
        <Nav />
      </div>

      {/* section 1 */}
      <section ref={section1Ref} className="size-full  flex flex-col justify-center items-center overflow-hidden">

        <Circle ref={circleRef} className={'absolute -right-165 -top-15 '} />


        {/* hero section 1  */}

        <div ref={heroSectionRef} className="landingPage sticky top-0 flex items-center h-[75vh] w-full">
          <HeroContent />
        </div>

        {/* hero section 2  */}

        <div ref={heroSectionRef2} className="w-full flex items-center h-[50vh] absolute -bottom-150 px-40">

          <div className="flex justify-between rounded-2xl p-2  w-full items-center ">


            <div className="xl:w-80 w-50 overflow-hidden p-2 flex flex-col gap-5">
              <p ref={mainTextRef} className="xl:text-xl text-sm ">
                A leading B2B cab services company ensuring timely employee
                transportation to their workplaces. Trusted partner for
                companies seeking reliable and efficient solutions.
              </p>

              <span className="">
                <MyButton className={"shadow-sm shadow-zinc-900"}>
                  Book Now
                </MyButton>
              </span>

            </div>

            <div className="flex  h-fit gap-5 p-5 justify-between items-center">

              <div ref={addToRefs} className="bg-[#FF621F] h-fit rounded-md p-5 w-55">
                <h1>Employee Transport</h1>
                <p>ensuring your employees arrive
                  at work on time.</p>
              </div>

              <div ref={addToRefs} className="bg-[#FF621F] rounded-md p-5 w-55 h-fit ">
                <h1>Employee Transport</h1>
                <p>ensuring your employees arrive
                  at work on time.</p>
              </div>

              <div ref={addToRefs} className="bg-[#FF621F] rounded-md p-5 w-55 h-fit ">
                <h1>Employee Transport</h1>
                <p>ensuring your employees arrive
                  at work on time.</p>
              </div>

            </div>
          </div>

        </div>

      </section>


      {/* section 2 */}
      <section ref={section2Ref} className=" size-full py-20 px-30 flex justify-between items-center">

        <div className="imgDiv relative border w-1/2 h-full ">

          <span className="absolute top-0 size-full">
            <img src="/images/carImg.png" alt="car_image" className="h-full" />
          </span>

          <span className="absolute top-75 right-0">
            <img src="/images/taxiImg.png" alt="taxi_image" />
          </span>

          <span className="absolute right-0 top-10">
            <img src="/images/orange_bg.png" alt="orange_bg_image" />
          </span>

        </div>

        <div className="textDiv flex flex-col justify-between gap-5 w-1/2 border h-full ">

          <div className="text-[#FF621F]">Driving Excellence in Every Mile</div>

          <div className="text-black text-5xl font-extrabold">Your Trusted B2B Cab
            Service Partner
          </div>

          <div className=" ">
            Experience efficient, comfortable, and affordable transportation solutions
            tailored to your business needs
          </div>

          <div className="text-black font-bold text-2xl flex items-center justify-between">

            <span><TickIcon /></span>

            <span>Offering well-maintained fleet and experienced
              drivers to ensure safe and comfortable travel for your
              employees and clients.</span>

          </div>

          <div className="text-black font-bold text-2xl flex items-center justify-between">

            <span><TickIcon /></span>

            <span>Comprehensive corporate travel solutions- From
              airport transfers to employee transportation and fleet
              management
            </span>

          </div>

          <div className="flex gap-50 items-center border">

            <div>
              <MyButton>
                Discover More
              </MyButton>
            </div>

            <div className="flex gap-2 items-center">

              <span className="rounded-full p-3 shadow-2xl text-[#FF621F] bg-white hover:text-white hover:bg-[#FF621F] transition duration-300 ease-in hover:cursor-pointer ">

                <PhoneIcon width={'2.2vw'} height={'2.2vw'} />

              </span>

              <div className="flex flex-col">
                CALL ANYTIME
                <span className="text-black text-2xl font-bold">+91-9878880714</span>
              </div>
            </div>

          </div>
        </div>

      </section>


      {/* section 3 */}
      <section ref={section3Ref} className="bg-zinc-700 size-full">

      </section>



    </div>


  </>)
};

export default Home;
