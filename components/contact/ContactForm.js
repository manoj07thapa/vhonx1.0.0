import React from "react";

function ContactForm() {
  return (
    <div className="lg:w-2/3">
      <h4 className="text-2xl font-bold lg:text-4xl lg:font-extrabold lg:text-white text-gray-200 text-center border-b border-gray-400 pb-3 tracking-wide leading-5">
        Send your queries
      </h4>
      <form className="mt-9 space-y-10">
        <div className="space-y-4">
          <div className="space-y-2 flex flex-col">
            <label
              for="fullName"
              className="text-sm font-medium text-gray-400 tracking-wide leading-4"
            >
              FullName
            </label>
            <input
              type="text"
              name="fullName"
              value=""
              className="rounded-md bg-gray-400"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label
              for="email"
              className="text-sm font-medium text-gray-400 tracking-wide leading-4"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              value=""
              className="rounded-md bg-gray-400"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label
              for="phNumber"
              className="text-sm font-medium text-gray-400 tracking-wide leading-4"
            >
              Phone number
            </label>
            <input
              type="number"
              name="phNumber"
              value=""
              className="rounded-md bg-gray-400"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label
              for="query"
              className="text-sm font-medium text-gray-400 tracking-wide leading-4"
            >
              Query
            </label>
            <textarea
              type="text"
              name="query"
              value=""
              rows="6"
              className="rounded-md bg-gray-400"
            />
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md shadow bg-blue-600 text-white hover:bg-blue-800 transition ease-in-out w-full px-5 py-3 mt-12"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
