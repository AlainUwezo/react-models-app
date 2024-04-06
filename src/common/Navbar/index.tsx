import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FunctionComponent = () => {
  return (
    <div className="fixed z-50  px-5 py-3 rounded-3xl bottom-0 w-full">
      <div className="bg-white shadow-md border rounded-full flex flex-row justify-around p-3">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center flex-col font-bold"
              : "flex items-center flex-col text-gray-500"
          }>
          <span className="material-symbols-outlined">home</span>
          <span className="text-[14px]">Accueil</span>
        </NavLink>
        <NavLink
          to={"/gallery"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center flex-col font-bold"
              : "flex items-center flex-col text-gray-500"
          }>
          <span className="material-symbols-outlined">gallery_thumbnail</span>
          <span className="text-[14px] ">Gallerie</span>
        </NavLink>
        <NavLink
          to={"/casting"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center flex-col font-bold"
              : "flex items-center flex-col text-gray-500"
          }>
          <span className="material-symbols-outlined">event</span>
          <span className="text-[14px] ">Casting</span>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center flex-col font-bold"
              : "flex items-center flex-col text-gray-500"
          }>
          <span className="material-symbols-outlined">schedule</span>
          <span className="text-[14px]">A props</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
