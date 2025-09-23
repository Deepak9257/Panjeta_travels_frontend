import { forwardRef } from "react";

const Circle = forwardRef(({ className }, ref) => {

  return (<>

    <div ref={ref} className={`${className} rounded-full bg-[#017DC1] size-[200vh]`}>
    </div>


  </>)

})

export default Circle;