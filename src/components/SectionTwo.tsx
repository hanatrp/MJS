"use client";
import Image from "next/image";
import React, { useState } from "react";

type SectionKey = 'virtualExhibition' | 'website' | 'mobileApp' | 'miniGame';

interface Section {
  list :string,
  heading: string;
  description: string;
  imageSrc: string;
}

const Sections : Record<SectionKey, Section> = {
  virtualExhibition: {
    list: "Virtual Exhibition",
    heading: "Create your own Metaverse Exhibition",
    description:
      "Kembangkan Brand & Bisnis anda dengan menciptakan Metaverse & Dunia Digital untuk menggaet lebih banyak Traffic dan Customer.",
    imageSrc:
      "https://mjsolution.co.id/wp-content/uploads/2022/10/EA827DAB-FAFB-4700-B7EE-14810FB104BB.png",
  },
  website: {
    list: "Website",
    heading: "A Creative Platform to Promote your Business",
    description: "Dengan Website yang ditambah kreatifitas, kita bisa membuat platform yang sangat pas untuk anda mempromosikan bisnis, program, dan juga diri anda. ",
    imageSrc:
      "https://mjsolution.co.id/wp-content/uploads/2022/10/06890E3C-60C8-4F95-8D05-557EBB82FEB2-e1665833467607.png",
  },
  mobileApp: {
    list: "Mobile App",
    heading: "Personalized Mobile Application for every needs.",
    description:
      "Dengan Mobile App, Kita bisa mewujudkan segala keinginan dan kebutuhan anda. Kami bisa mewujudkan Mobile App impian anda untuk berbagai platform yaitu Android, IOS, dan juga Windows.",
    imageSrc:
      "https://mjsolution.co.id/wp-content/uploads/2022/11/C769F567-0D61-4E1A-ADA9-27BE2D08BCC8.png",
  },
  miniGame: {
    list: "Mini Game",
    heading: 'Fully Customizable Mini Games to energize your Events',
    description: "Dengan Mini Games yang bisa menyesuaikan kebutuhan, Kami bisa menghibur para pendatang platform anda mulai dari platform Offline seperti Exhibition, Seminar, dan Concert dan juga platform Digital seperti Website.",
    imageSrc:
      "https://mjsolution.co.id/wp-content/uploads/2022/11/228F0BD0-55F5-420A-94E7-9E964387A1E6.png",
  },
};

const SectionTwo: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<SectionKey>("virtualExhibition");

  const handleClick = (section: SectionKey) => {
    setSelectedSection(section);
  };

  const { heading, description, imageSrc, } = Sections[selectedSection];

  return (
    <div className="h-full flex flex-col gap-10 mt-20 mb-72 ">
      {/* 02 heading */}
      <div className="flex flex-col items-start md:mx-32">
        <div className="flex justify-between gap-52 md:gap-96 text-hijau font-bold mb-12 md:text-lg text-sm">
          <h4>02</h4>
          <h4> Solution We Create</h4>
        </div>
        <h1 className="font-bold text-5xl md:text-8xl mb-10">
          We Provide Solution that Lead and Inspire.
        </h1>
      </div>

      {/* show product */}
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-40">
        {/* list */}
        <div className="link-list flex flex-col items-start gap-6 w-1/2">
          {Object.keys(Sections).map((section) => (
            <button
              key={section}
              onClick={() => handleClick(section)}
              className={selectedSection === section ? "active" : ""}
            >
              {Sections[section as SectionKey].list}
            </button>
          ))}
        </div>

        {/* imagenya & Tulisan */}
        <div className="flex flex-col gap-20">
          {/* Image */}
          <div>
            <Image src={imageSrc} alt="-" width={1200} height={487} />
          </div>

          {/* tulisan */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-700 md:text-3xl text-xl">{heading}</h4>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
