import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import MyButton from "./MyButton";
import TickIcon from "../icons/TickIcon";
import PhoneIcon from "../icons/PhoneIcon";

const Section2 = () => {

  const section2Ref = useRef(null)

  return (<>

    <section ref={section2Ref} className=" size-full relative bg-white z-2 py-20 px-30 flex justify-between items-center">

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

  </>)
}

export default Section2;