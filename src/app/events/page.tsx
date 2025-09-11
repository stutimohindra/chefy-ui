"use client";
import React from "react";

function Events() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: { coords: any }) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err: { code: any; message: any }) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  //AIzaSyAPccqgA9VrS1A_lqyAjj580tYQkAuR68Y
  navigator.geolocation.getCurrentPosition(success, error, options);
  return <div>page</div>;
}

export default Events;
