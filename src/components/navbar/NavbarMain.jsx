
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[100%] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 ">
      <div className="flex justify-between w-full max-w-[100%] mx-auto  bg-lightGrey items-center p-6 rounded-r-full rounded-l-full  border-[0.5px] ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-lightGrey items-center justify-center rounded-full  border-cadetGray border-[0.5px] ">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
