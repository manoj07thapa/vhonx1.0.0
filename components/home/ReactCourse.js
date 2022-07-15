import { useRouter } from "next/router";

function ReactCourse() {
  const router = useRouter();
  return (
    <div className="  rounded-sm shadow-md py-12">
      <div className=" py-5 space-y-4 space-x-3 lg:flex items-center justify-between">
        <div className="space-y-24 ">
          <div className="py-9 space-y-4">
            <h3 className="text-white text-2xl lg:text-4xl font-bold ">
              Learn development with out industry experts.
            </h3>
            <p className="text-sm lg:text-lg font-medium px-2 leading-5 text-gray-400 ">
              Our tutors are not just tutors they are working professionals from
              top companies. So you are in safe hands who knows what they are
              doing.
            </p>
            <button
              onClick={() => router.push("/team")}
              type="submit"
              className="bg-blue-600 px-6 py-3 mt-12 rounded-md shadow hover:bg-blue-800 transition ease-in-out"
            >
              View Team
            </button>
          </div>
        </div>
        <img
          src="/vhonx1.0.0/group.jpg"
          alt="react course image"
          className="rounded-sm object-cover lg:w-[500px] "
        />
      </div>
    </div>
  );
}

export default ReactCourse;
