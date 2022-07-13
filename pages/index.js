import Head from "next/head";
import { Fragment } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>VhonX</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}
        />
      </Head>
      <div className="h-4/6">
        <div className="relative ">
          <img
            src="/vhonx1.0.0/topography.svg"
            className=" w-full  object-cover aspect-auto bg-gradient-to-r from-slate-900 to-slate-400"
          />
          <div className="absolute top-0 left-0 ">
            <h1 className="text-red-900 text-3xl font-bold">this is vhonx</h1>
          </div>
        </div>

        <h1 className="bg-gray-700 text-white px-4 py-2 mt-7 w-64 h-72 flex justify-center items-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h1>
      </div>
    </Fragment>
  );
}
