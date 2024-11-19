import React from "react";
import Landing from "./sections/landing";
import Details from "./sections/details";
import Bento from "./sections/bento";
import Footer from "./sections/footer";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Landing />
      <Details />
      <Bento />
      <Footer />
    </div>
  );
};

export default Page;
