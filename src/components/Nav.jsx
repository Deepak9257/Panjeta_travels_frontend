import CompanyLogo from "../icons/CompanyLogo";
import UserLogo from "../icons/UserLogo";


const Nav = () => {

  return (<>

    <div className="flex justify-between items-center py-2 text-black px-15 w-full">

      <div className=""> <CompanyLogo width={100} height={40} /> </div>

      <div className="flex">

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

      <div className="border-2 rounded-full me-2">
        <UserLogo fill="black" width="30" height="30" />
      </div>
    </div>
  </>)
}

export default Nav;