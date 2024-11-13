import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className="bottom-0">
        <div className="flex justify-around items-center gap-16 mb-4">
          <div className="flex flex-col justify-between items-center">
            <Image
              src="https://mjsolution.co.id/wp-content/uploads/2022/11/EA31479F-980A-477D-ADCB-B890D9C90A2C-e1668166216967.png"
              alt={"logo"}
              width={250}
              height={250}
            />
            <Image
              src="https://mjsolution.co.id/wp-content/uploads/2022/11/700CD8CA-54D9-4364-BB77-AAD6B41179C8.png"
              alt={"logo"}
              width={250}
              height={250}
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-8  w-1/2">
            <h4 className="text-xl md:text-2xl  text-gray-400 font-bold">
              <span> Lets </span>
              <span>
                <span>Colaborate</span>
              </span>

              <span> With Us!</span>
            </h4>
            <span className="text-gray-400 text-sm md:text-lg">
              Insert your email here and let us help you to bring the future to
              your client or your business.
            </span>
            <div className=" hidden md:flex flex-row gap-2">
              <input
                type="text"
                className="border border-gray-300 p-2  md:w-48 md:h-10 h-6 rounded focus:ring-gray-200"
                placeholder="Type your Email here!"
              />
              <button className="bg-hijau rounded w-12 md:w-16 md:h-10 h-6 text-white">
                send
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center mt-6">
          <div>
            <span className="text-gray-400">
              &copy; MJ Solution Indonesia 2024
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <Link
              href="https://www.facebook.com/Mjsolutionid/"
              className="w-10 h-10 flex items-center justify-center rounded  bg-[#316FF6] hover:bg-opacity-90"
            >
              <FaFacebook className="w-6 h-6 text-[#316FF6] fill-white" />
            </Link>

            <Link
              href="https://www.instagram.com/mjsolutionid/"
              className="w-10 h-10 flex items-center justify-center rounded  bg-zinc-900 hover:bg-opacity-90"
            >
              <FaInstagram className="w-6 h-6 text-[#316FF6] fill-white" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/mjsolution/"
              className="w-10 h-10 flex items-center justify-center rounded  bg-[#0077B5] hover:bg-opacity-90"
            >
              <FaLinkedin className="w-6 h-6 text-[#316FF6] fill-white" />
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
