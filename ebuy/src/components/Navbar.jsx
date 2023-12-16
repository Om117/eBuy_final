import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import logo from "../images/eBuyNav.png";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../features/cart/CartSlice";
import { selectUserInfo } from "../features/user/UserSlice";

// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };
const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Trending", to: "/", current: false },
  { name: "Complaints", to: "/complaints", current: false },
];
const userNavigation = [
  { name: "My Profile", link: "/profile", user: true, admin: true },
  { name: "My Orders", link: "/myorders", user: true, admin: true },
  { name: "Admin", link: "/admin", admin: true },
  { name: "Admin Orders", link: "/admin/admin-orders", admin: true },
  { name: "Log out", link: "/logout", user: true, admin: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar({ children }) {
  const items = useSelector(selectItems);
  const user = useSelector(selectUserInfo);
  const logmeout = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to="/">
                        <img
                          className="h-12 w-12"
                          src={logo}
                          alt="Your Company"
                        />
                      </Link>
                    </div>

                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <Link to="/cart">
                        <button
                          type="button"
                          className=" rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <ShoppingCartIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                      </Link>
                      <span className="inline-flex items-center rounded-full  mb-7 -ml-2  bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        {items.length > 0 ? items.length : "0"}
                      </span>
                      {/* Profile dropdown */}
                      {/* hello paste your code starts */}

                      {/* <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.link}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu> */}

                      {user ? (
                        <Menu
                          as="div"
                          className="relative inline-block  ml-3 text-left"
                        >
                          <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                              {user ? (
                                <>
                                  <i class="fa-solid fa-user mt-1 mr-1" />
                                  {user.name.toUpperCase()}
                                </>
                              ) : (
                                "Guest"
                              )}
                              <ChevronDownIcon
                                className="-mr-1 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                {userNavigation.map((item) =>
                                  item[user.role] ? (
                                    item.name == "Log out" ? (
                                      <Menu.Item key={item.name}>
                                        <a
                                          href={item.link}
                                          className="block px-4 py-2 text-sm text-gray-700"
                                        >
                                          {item.name}
                                        </a>
                                      </Menu.Item>
                                    ) : (
                                      <Menu.Item key={item.name}>
                                        <Link
                                          to={item.link}
                                          className="block px-4 py-2 text-sm text-gray-700"
                                        >
                                          {item.name}
                                        </Link>
                                      </Menu.Item>
                                    )
                                  ) : null
                                )}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <Link to="/login">
                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-3 py-2 px-4 rounded-full">
                            Log In
                          </button>
                        </Link>
                      )}

                      {/* hello paste your code ends */}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden text-center ">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Link to={item.to}>
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    </Link>
                  ))}
                </div>
                {user ? (
                  <div className="border-t text-center border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          {user ? user.name : "Guest"}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-400">
                          {user ? user.email : null}
                        </div>
                      </div>
                      <div>
                        <Link to="/cart">
                          <button
                            type="button"
                            className=" ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          >
                            <ShoppingCartIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </Link>
                      </div>
                      <span className="inline-flex items-center rounded-full mb-7 -ml-2 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        {items.length > 0 ? items.length : "0"}
                      </span>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) =>
                        item[user.role] ? (
                          <Link to={item.link}>
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                              {item.name}
                            </Disclosure.Button>
                          </Link>
                        ) : null
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to="/login">
                    <button class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold  mb-3 py-2 px-4  rounded-md ">
                      Log In
                    </button>
                  </Link>
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              eBuy
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Your content */}
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

export default Navbar;
