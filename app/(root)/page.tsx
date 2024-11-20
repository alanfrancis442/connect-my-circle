import React from "react";
import Landing from "./sections/landing";
import Details from "./sections/details";
import Bento from "./sections/bento";
import Footer from "./sections/footer";
import Showcase from "./sections/showcase";
import Features from "./sections/features";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Landing />
      <Details />
      {/* <Bento /> */}
      <Features />
      <Showcase />
      <Footer />
    </div>
  );
};

export default Page;
