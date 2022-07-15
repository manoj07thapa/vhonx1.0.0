import { Fragment } from "react";
import { teamData } from "./teamData";

function TeamProfile() {
  return (
    <Fragment>
      <div className=" grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-32  ">
        {teamData.map((data) => (
          <div
            key={data.id}
            className="border-b border-green-600 sm:border-0 pb-4 flex flex-col sm:flex-none mt-32"
          >
            <img
              src={data.image}
              alt="team member"
              className="h-72 w-72 lg:h-72 lg:w-72  object-cover rounded-lg shadow-sm"
            />
            <div className=" pt-4 flex  justify-between">
              <div>
                <h6 className="text-gray-900 text-medium sm:text-lg font-medium">
                  {data.name}
                </h6>
                <p className="text-gray-500 text-sm sm:text-medium sm:leading-6 font-medium">
                  {data.designation}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default TeamProfile;
