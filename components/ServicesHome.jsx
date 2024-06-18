"use client";
import React from "react";
import Carlist from "./CardList"
import ServiceReview from "./ServiceReview"
export default function ServicesHome() {
  return (
    <div className="container m-auto">
      <ServiceReview/>
      <Carlist/>
    </div>
  );
}
