import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center md:flex-row mb-9 md:mb-96">
      <div className="flex flex-col md:items-start items-center text-center md:text-left gap-6 md:gap-10">
        <h1 className="text-6xl  xl:text-9xl font-bold">
          Stand Out From The Crowd.
        </h1>
        <p className="text-gray-400">
          Kami Menyediakan One-Stop Solution dan End-to-End Solution untuk semua
          kebutuhan anda di era perkembangan digital.{" "}
        </p>
        <Link href="/about-us" className="xl:hidden">
          <button className="bg-hijau hover:bg-opacity-95 text-white p-4 rounded">
            Learn More
          </button>
        </Link>
      </div>

      <div>
        <Image
          src="https://mjsolution.co.id/wp-content/uploads/2022/10/astronaut-and-dog-in-space-suit-floating.png"
          alt="astronot"
          width={1200}
          height={911}
        />
      </div>
    </div>
  );
};

export default Hero;
