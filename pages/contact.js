import React from "react";
import ContactInfo from "../components/contact/ContactInfo";
import Location from "../components/contact/Location";
import Footer from "../components/footer/Footer";

function contact() {
  return (
    <div>
      <div className="px-7 max-w-3xl lg:max-w-5xl mx-auto mt-36 h-screen">
        <div className="flex items-center ">
          <ContactInfo />
          <Location />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default contact;
