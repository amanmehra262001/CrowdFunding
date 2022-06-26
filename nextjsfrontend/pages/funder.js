import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const funder = () => {
  return (
    <div>
      <Navbar />
      <p> Welcome funder</p>

      <Footer />
    </div>
  );
};

export default funder;
