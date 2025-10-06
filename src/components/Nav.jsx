import { useEffect, useRef, useState } from "react";
import CompanyLogo from "../icons/CompanyLogo";
import Cross from "../icons/Cross";
import MenuIcon from "../icons/MenuIcon";
import UserLogo from "../icons/UserLogo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Nav = () => {

  const [hide, setHide] = useState(true);
  const menuRef = useRef(null);

  const handleClick = () => {
    setHide((prev) => !prev);
  }


  useEffect(() => {
    
    const handleResize = () => {
      if (window.innerWidth >= 768 && !hide) {
        setHide(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    
  }, [hide]);

  // Animate when hide changes
  useGSAP(() => {
    if (!menuRef.current) return;

    if (!hide) {
      // show animation (slide in)
      gsap.to(
        menuRef.current,
        {
          right: 15,
          opacity: 1,
          display: "flex",
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      // hide animation (slide out)
      gsap.to(menuRef.current, {
        right: '-50vw',
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }



  }, [hide]);

  return (<>

    <div className="flex justify-between items-center py-1 text-black px-5 sm:px-15  w-full">

      <div className="rounded-full bg-white/50 px-3 py-1"> <CompanyLogo width={100} height={40} /> </div>

      <div className="md:block hidden min-w-[525px]">

        <ul className="flex gap-6">

          <li>Home</li>
          <li>About Us</li>
          <li> Services </li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Contact Us</li>
          <li>Other</li>

        </ul>

      </div>

      <div className=" rounded-full hover:cursor-pointer active:scale-[0.95] active:bg-blue-300 transition-all duration-300 ease-in-out">

        <span className="md:block hidden">
          <UserLogo fill="black" width="30" height="30"/>
        </span>

        <span onClick={handleClick} className="block md:hidden  p-1 size-[30px] justify-center items-center relative">

          {hide
            ? <MenuIcon className={'size-full text-black active:text-white'} />

            : <Cross fill="white" width={30} height={30} className='absolute bg-blue-300 rounded-full left-1/2 -translate-1/2 top-1/2' />
          }

        </span>

      </div>



      <ul
        ref={menuRef}
        className="w-1/2 min-w-[250px] rounded-2xl p-5 z-10 bg-zinc-500 -right-[50vw] md:hidden top-12 absolute text-center flex flex-col justify-between gap-0.5">

        {["Home", "About Us", "Services", "Blog", "FAQ", "Contact Us", "Other"].map(
          (item, i) => (
            <li
              key={i}
              className="active:bg-blue-500 active:scale-[0.9] active:text-white transition-all duration-300 ease-in-out w-full rounded-2xl p-2"
            >
              {item}
            </li>
          )
        )}

      </ul>



    </div>
  </>)
}

export default Nav;