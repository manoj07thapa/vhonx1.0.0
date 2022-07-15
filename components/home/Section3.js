import React from "react";

function Section3() {
  return (
    <div className="space-y-3 mt-4 pb-4 border-b border-white">
      <h2 className="text-2xl lg:text-4xl font-bold text-white">
        Get out of the tutorial hell.
      </h2>
      <div className="flex space-x-2">
        <p className="text-sm lg:text-lg font-medium px-2 leading-5 text-gray-400 ">
          Tutorials are cool but in no time it can turn in to a hell. It can
          easily make your learning curve way high, years in some cases and make
          you firstrated and want to give up.
          <span className="">
            {""} With our expert teachers we can make your learning fun plus you
            will be ready to go and work in months.
          </span>
        </p>
      </div>
      <div className="mt-7 pt-4 px-12 flex space-x-5 items-center">
        <img
          src="/vhonx1.0.0/manojpic.jpg"
          alt="founder pic"
          className="h-12 w-12 rounded-full shadow object-cover "
        />
        <div className="space-y-1">
          <p className="text-md font-semibold ">Manoj Thapa</p>
          <p className="text-xs font-semibold text-gray-500">
            Co-founder VhonX
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
