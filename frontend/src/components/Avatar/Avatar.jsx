import React,{useState} from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";


const Avatar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };
  
  return (
    <div className="relative cursor-pointer items-center mt-2">
      <div
        className={`flex flex-col items-end  cursor-pointer ${
          userMenuOpen ? "active" : ""
        }`}
        onClick={toggleUserMenu}
      >
        <span className="uppercase">Rizwan</span>
        <img
          src="https://placebear.com/g/200/200"
          alt="Profile"
          className="rounded-full w-10 h-10 object-cover"
        />
        {userMenuOpen ? <BiChevronUp /> : <BiChevronDown />}
      </div>
      {userMenuOpen && (
        <ul className="absolute top-full right-0 bg-primary1 border border-solid border-gray-300 rounded-md shadow-lg p-4 block dark:bg-primary dark:text-primary hover:bg-red-400">
          <li className="hover:text-blue-500">
            <a href="#">Profile</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="/settings">Settings</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Avatar;
