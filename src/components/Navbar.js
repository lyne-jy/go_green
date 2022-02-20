/* This navbar requires Tailwind CSS v2.0+ */
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/outline";


export default function Navbar(props) {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-14">
              {
                props.backButton && 
                <div onClick={() => window.history.back()} className="absolute inset-y-0 left-0 flex items-center w-20">
                  <ChevronLeftIcon className="h-5 w-auto" />
                </div>
              }
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center font-semibold">
                  {/* <svg
                    className="h-8 w-8 text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <rect x="4" y="3" width="8" height="14" rx="4" />{" "}
                    <rect x="12" y="7" width="8" height="10" rx="3" />{" "}
                    <line x1="8" y1="21" x2="8" y2="13" />{" "}
                    <line x1="16" y1="21" x2="16" y2="14" />
                  </svg> */}
                  {props.title}
                </div>
              </div>


              {
                props.avatar &&
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                </div>
              }
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
