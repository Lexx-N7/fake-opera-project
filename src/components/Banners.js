import React from "react";
import Banner from "./Banner";
import data from "../data";
import uuid from 'uuid'

export default function Banners() {

    return (
    <>
      {data.map(banner => (
        <Banner key={uuid.v4()} {...banner} />
      ))}
    </>
  );
}
