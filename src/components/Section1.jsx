import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Circle from "./Circle";
import MyButton from "./MyButton";
import BookForm from "./BookForm";

const Section1 = () => {
  const section1Ref = useRef(null);
  const circleRef = useRef(null);
  const heroSectionRef = useRef(null);
  const heroSectionRef2 = useRef(null);
  const mainTextRef = useRef(null);
  const formRef = useRef(null);
  const personRef = useRef(null);
  const personRef2 = useRef(null);
  const carRef = useRef(null);

  //store the divs to animate 
  const sideDivsRef = useRef([]);
  const textRef = useRef([])
  sideDivsRef.current = []; // reset before mapping

  const addToRefs2 = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  // animation logic start here 
  useGSAP(() => {

    const handleLoad = () => {
      section1Animation();
      section2Animation();
    }

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    }

  });

  const section1Animation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section1Ref.current,
        scroller: 'body',
        pin: true,
        scrub: 1,
        start: 'top 0',
        end: 'bottom 50%',
        // markers: true,
      }
    })

    tl.to(circleRef.current, {
      scale: 1.6,
      ease: "none",
      duration: 1.5

    }, 'one')

    tl.to([formRef.current, ...textRef.current,], {
      y: '-100vh',
      ease: 'power1.out',
      duration: 1.5
    }, 'one')

    tl.to(personRef.current, {
      right: 10,
      ease: 'power1.out',
      duration: 1.5
    }, 'one')

    tl.to(personRef2.current, {
      right: -70,
      ease: 'power1.out',
      duration: 1.5
    }, 'one')

    tl.to(carRef.current, {
      x: -100,
      duration: 1.5,
      ease: 'power1.out',
    }, 'one')

    tl.to(circleRef.current, {
      scale: 4,
      duration: 2,
      ease: "none",

    }, 'two +=1')

    tl.to(heroSectionRef.current, {
      y: '-15vh',
      ease: "none",
      duration: 1.5

    }, 'two +=1')


  }

  const section2Animation = () => {

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef2.current,
        start: 'top 50%',
        end: 'bottom 75%',
        scrub: 1,
        // markers: true,
      }
    })

    tl2.from(mainTextRef.current, {
      y: -50,
      opacity: 0,
      duration: 2,
      ease: 'power1.out'

    }, 'anim')

    tl2.from(sideDivsRef.current, {
      y: 20,
      opacity: 0,
      duration: 2,
      ease: 'power1.out',
      stagger: 0.3,

    }, 'anim')


  }

  // animation logic end here 

  return (<>

    <section ref={section1Ref} className="w-screen  bg-white relative z-1 flex flex-col justify-center items-center overflow-hidden">

      <Circle ref={circleRef} className={'absolute -right-165 -top-15 -z-3'} />

      {/* hero section 1  */}

      <div ref={heroSectionRef} className=" w-screen h-screen relative">

        <div className="size-full flex px-20 py-20">

          <div className="leftDiv flex  flex-1 relative">

            <div ref={formRef} className="h-full flex">
              <BookForm />
            </div>

            <div ref={personRef} className="absolute -z-1 right-25 -bottom-15">
              <img src="/images/person1.svg" alt="person_img" className="w-[calc(2rem+15vw)]" />
            </div>

            <div ref={personRef2} className="absolute -z-2 right-10 bottom-10">
              <img src="/images/person2.svg" alt="person_img_2" className="w-[calc(2rem+12vw)]" />
            </div>

          </div>

          <div className="rightDiv flex-1 relative">

            <div ref={el => addToRefs2(el, textRef)} className="text-[calc(2.5vw+2rem)] absolute top-0 -left-10 text-black  xl:text-[calc(3.5rem+3vw)] md:text-7xl text-center  " >

              <span className="text-[#FF621F] pe-60 relative">Panjeta </span> <br />

              <span className="text-[#FF621F] ps-10"> Travels </span>

            </div>

            <div ref={carRef} className="absolute -right-90 -bottom-30">
              <img src="/images/HeroCar.png" alt="hero_car" className="w-[calc(3rem+60vw)] h-auto transform scale-x-[-1]" />
            </div>

          </div>



          <div ref={el => addToRefs2(el, textRef)} className="text-[calc(2.5vw+2rem)] absolute top-[100vh]  text-black  xl:text-[calc(1.5rem+2vw)] md:text-7xl  flex flex-col justify-center h-full" >

            <div className="text-center">
              Ride<span className="text-[#FF621F]">Easy</span>, <br />
              Arrive<span className="text-[#FF621F]">Happy</span>!
            </div>

          </div>

        </div>

      </div>

      {/* hero section 2  */}



    </section>

    <div  className="w-screen bg-[#017dc1] h-screen flex items-center relative z-1 px-40 ">

      <div ref={heroSectionRef2} className="flex justify-between rounded-2xl p-2  w-full items-center ">


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

          <div ref={el => (addToRefs2(el, sideDivsRef))} className="bg-[#FF621F] h-fit rounded-md p-5 w-55">
            <h1>Employee Transport</h1>
            <p>ensuring your employees arrive
              at work on time.</p>
          </div>

          <div ref={el => (addToRefs2(el, sideDivsRef))} className="bg-[#FF621F] rounded-md p-5 w-55 h-fit ">
            <h1>Employee Transport</h1>
            <p>ensuring your employees arrive
              at work on time.</p>
          </div>

          <div ref={el => (addToRefs2(el, sideDivsRef))} className="bg-[#FF621F] rounded-md p-5 w-55 h-fit ">
            <h1>Employee Transport</h1>
            <p>ensuring your employees arrive
              at work on time.</p>
          </div>

        </div>
      </div>

    </div>


  </>)
}

export default Section1;