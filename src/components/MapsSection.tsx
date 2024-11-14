/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Wrapper from "./Wrapper";
import {
  FaVrCardboard,
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const MapsSection = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: -6.14767,
        lng: 106.85488,
      };

      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };

      // setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return (
    <Wrapper>
      <div className="flex flex-col xl:flex-row gap-10 justify-start items-start mb-20 mt-48">
        {/* section maps */}
        <div className="h-1/2" ref={mapRef} />

        {/* heading */}
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-5 md:mx-20 ">
            <h4 className="font-bold text-4xl text-gray-700">
              Let's Create Something new
            </h4>
            <p className="text-gray-400">
              Mari kita berkolaborasi dan menciptakan hal-hal yang baru dan
              visioner
            </p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-10">
            <div className="flex flex-col gap-4 items-start md:mx-20 ">
              <FaBuilding className="text-hijau md:text-6xl text-4xl" />
              <h1 className="font-semibold text-xl">Headquarter</h1>
              <p className="text-gray-400 text-start">
                The Mansion Bougenville Tower Fontana Lantai 50 Jakarta Utara
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start md:mx-20">
              <FaVrCardboard className="text-hijau md:text-6xl text-4xl" />
              <h1 className="font-semibold text-xl">Showroom</h1>
              <p className="text-gray-400 text-start">
                Celebration AA15/25, Grand Wisata, Bekasi, Jawa Barat
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start md:mx-20">
              <FaPhoneAlt className="text-hijau md:text-6xl text-4xl" />
              <h1 className="font-semibold text-xl">Phone</h1>
              <p className="text-gray-400 text-start">(+62) 811-1122-492</p>
            </div>
            <div className="flex flex-col gap-4 items-start md:mx-20">
              <FaEnvelope className="text-hijau md:text-6xl text-4xl" />
              <h1 className="font-semibold text-xl">Email</h1>
              <p className="text-gray-400 text-start">
                Sales@Mjsolution.co.id
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MapsSection;
