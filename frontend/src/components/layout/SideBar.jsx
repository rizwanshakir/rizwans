import { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  FiHome,
  FiSettings,
  FiUsers,
  FiChevronDown,
  FiChevronUp,
  FiLogOut,
  FiHelpCircle,
} from "react-icons/fi";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import logo from "../../assets/logo.png";
import Search from "../Search";
import ThemeToggle from "../../ThemeToggle";
// import Avatar from "../Avatar/Avatar";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const toggleSubMenu = () => setShowSubMenu(!showSubMenu);

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <div className="relative bg-primary text-primary dark:bg-primary dark:text-secondary">
      <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="mr-10 flex">
            <button
              onClick={toggleOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {/* <span className="sr-only">Open sidebar</span> */}
              <HiMenu
                className={open ? "hidden" : "block"}
                h-6
                w-6
                aria-hidden="true"
              />
              <HiX
                className={open ? "block" : "hidden"}
                h-6
                w-6
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-8 w-auto"
                src={logo}
                // src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-11 w-auto"
                src={logo}
                // src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="flex justify-center items-center px-4 py-3 invisible sm:visible ">
              <h1 className="text-primary font-bold text:base dark:text-secondary2">
                My App
              </h1>
            </div>
          </div>
          <div className="mr-4 invisible md:visible">
            <Search />
          </div>
          <div className="mr-4 invisible md:visible">
            <ThemeToggle />
          </div>

          <div className="mr-2 flex">
            <button className="inline-flex items-center justify-center text-gray-400 hover:text-white mr-4">
              <FiLogOut />
            </button>
          </div>

          <div className="cursor-pointer items-center mt-2 absolute left-3/4 md:relative md:left-0">
            <div
              className={`flex flex-col items-end  cursor-pointer ${
                userMenuOpen ? "active" : ""
              }`}
              onClick={toggleUserMenu}
            >
              <span className="uppercase">user</span>
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
                <li className="hover:text-blue-500">
                  <a href="/settings">
                    <FiLogOut />
                  </a>
                </li>
              </ul>
            )}
          </div>
          {/* <Avatar /> */}
        </div>
      </div>

      <Transition
        show={open}
        className="absolute mt-16 inset-y-0 left-0 w-64 bg-gray-900"
        enter="transition duration-1000 ease-in-out"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition duration-1000 ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <nav
          className="flex flex-col flex-1 h-screen pb-space-y-1 bg-primary text-secondary dark:bg-primary dark:text-primary"
          aria-label="Sidebar"
        >
          <div className="px-2 space-y-1">
            {/* <Link to="/"></Link> */}
            <a
              href="/"
              className="bg-primary text-secondary dark:bg-primary dark:text-primary py-2 flex items-center pl-4 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <AiOutlineDashboard className="mr-4" />
              Dashboard
            </a>
            <a
              href="/"
              className="bg-primary text-secondary dark:bg-primary dark:text-primary py-2 flex items-center pl-4 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <FiHome className="mr-4" />
              Home
            </a>
            {/*  */}
            <a
              href="#"
              onClick={toggleSubMenu}
              className="bg-primary text-secondary dark:bg-primary dark:text-primary py-2 flex items-center pl-4 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <FiUsers className="mr-4" />
              Users
              {showSubMenu ? (
                <FiChevronUp className="ml-2" />
              ) : (
                <FiChevronDown className="ml-2" />
              )}
            </a>
            {showSubMenu && (
              <div className="pl-11">
                <a
                  href="/users/admin"
                  className="bg-primary text-secondary dark:bg-primary dark:text-primary py-2 flex items-center pl-4 hover:bg-gray-700 hover:text-white rounded-md"
                >
                  <FiUsers className="mr-4" />
                  Admin
                </a>
                <a
                  href="/users/admin"
                  className="bg-primary text-secondary dark:bg-primary dark:text-primary py-2 flex items-center pl-4 hover:bg-gray-700 hover:text-white rounded-md"
                >
                  <FiUsers className="mr-4" />
                  Staff
                </a>
                <a
                  href="/users/admin"
                  className="bg-primary text-secondary dark:bg-primary dark:text-primary py-2 flex items-center pl-4 hover:bg-gray-700 hover:text-white rounded-md"
                >
                  <FiUsers className="mr-4" />
                  Customer
                </a>
              </div>
            )}

            {/*  */}
          </div>
          <div className="mt-auto px-2 space-y-1">
            <a
              href="/"
              className="bg-primary text-secondary dark:bg-primary dark:text-primary py-2 flex items-center pl-4 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <FiSettings className="mr-4" />
              Settings
            </a>

            <a
              href="/"
              className="bg-primary text-secondary dark:bg-primary dark:text-primary py-2 flex items-center pl-4 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <FiHelpCircle className="mr-4" />
              Help
            </a>
          </div>
        </nav>
      </Transition>
    </div>
  );
};

export default SideBar;
