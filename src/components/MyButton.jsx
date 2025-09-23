const MyButton = (props) => {

  return (<>

    <button className={`${props.className} bg-blue-600 w-[10vw] min-w-[112px] text-white px-4 py-2 rounded-full hover:bg-[#FF621F] hover:cursor-pointer active:scale-[0.98] transition-transform duration-300 ease-in-out`}>

      {props.children}

    </button>

  </>)
}

export default MyButton;