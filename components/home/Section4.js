import React from "react";

function Section4() {
  return (
    <div className="py-4 space-y-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-pink-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
      <h5 className="text-pink-400 text-lg font-semibold pl-3 ">
        Build anything
      </h5>
      <h2 className="text-2xl lg:text-4xl pl-3 font-bold">
        Build whatever you want, seriously.
      </h2>
      <p className="pl-3 text-gray-400 text-sm lg:text-lg font-medium leading-5">
        Because we provide array of courses regarding web-development you can
        then build any kind of software with the acquired knowledge.
      </p>
    </div>
  );
}

export default Section4;
