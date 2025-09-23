import CarSvg from "../icons/CarSvg";
import BookForm from "./BookForm";

const HeroContent = () => {

  return (<>
    <div className="leftDiv h-full flex ms-[10vw]">
      <BookForm />
    </div>

    <div className="text-[calc(2.5vw+0.2rem)] text-black xl:text-6xl right-80 top-0 text-center absolute">
      Ride <span className="text-[#FF621F]">Easy,</span> <br />
      Arrive <span className="text-[#FF621F]">Happy!</span> <br />
      with <br />
      <span className="text-[#FF621F]"> Panjeta Travels </span>
    </div>

    <div className="absolute right-40 -bottom-12">
      <CarSvg width={'50vw'} height={'100%'} />
    </div>


  </>)
}

export default HeroContent;