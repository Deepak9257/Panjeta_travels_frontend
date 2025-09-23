import MyButton from "./MyButton";

const BookForm = (props) => {

  return (<>

    <div {...props} className={`${props.className} w-[25vw]  rounded-[18px]  min-w-[300px] flex flex-col gap-y-7 xl:gap-y-10 justify-center  p-5 bg-[linear-gradient(to_bottom,#006EFF,#00449C)]`}>

      <div className="flex justify-between text-nowrap gap-1 text-xs ">
        <span className=" w-[calc(5vw+2rem)] btn-hover flex items-center justify-center  border px-3 py-2 rounded-full min-w-[55px] min-h-[29px] text-center"> Oneway </span>
        <span className=" w-[calc(5vw+2rem)]  btn-hover flex items-center justify-center  border px-3 py-2 rounded-full min-w-[72px] min-h-[29px] text-center"> Round Trip </span>
        <span className=" w-[calc(5vw+2rem)] btn-hover flex items-center justify-center border px-3 py-2 rounded-full min-w-[55px] min-h-[29px] text-center"> MultiCity </span>
        <span className="  w-[calc(5vw+2rem)] btn-hover flex items-center justify-center border px-3 py-2 rounded-full min-w-[55px] min-h-[29px] text-center"> Local </span>
      </div>


      {/* input section */}

      <div className="flex flex-col gap-7 xl:gap-10 ">
        <div>
          <input
            type="text"
            placeholder="From City"
            className="bg-white  text-black caret-black w-full h-[40px] rounded-[15px] placeholder-gray-400 p-2 outline-none"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="To City"
            className="bg-white text-black caret-black w-full h-[40px] rounded-[15px] placeholder-gray-400 p-2 outline-none"
          />
        </div>

        <div>
          <input type="date" className="bg-white caret-black w-full h-[40px] rounded-[15px] p-2 outline-none text-black" />
        </div>

        <div>
          <input type="time" className="bg-white caret-black w-full h-[40px] rounded-[15px] p-2 outline-none text-black" />
        </div>

        <div className="w-full flex justify-center ">
        <MyButton className={"shadow-sm shadow-zinc-900"}>
          Book Ride
        </MyButton>
        </div>
      </div>

    </div>


  </>)
}
export default BookForm;