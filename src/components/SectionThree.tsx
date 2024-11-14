"use client";
import Image from "next/image";
import React, { useState } from "react";

type SectionKey = 'interactiveWhiteboard' | 'videoWall' | 'ledPanel' | 'digitalSignage';

interface Section {
  list :string,
  heading: string;
  description: string;
  imageSrc: string;
}

const Sections : Record<SectionKey, Section> = {
  interactiveWhiteboard : {
    list: "Interactive Whiteboard",
    heading: "The “Interactive way to present” with our All in One Display for Conference.",
    description:
      "Say “Goodbye” to your old Writing Board, Projector, PC, Projection Screen, And Speaker and replace it with an Intelligent All in One Board. KMI Smart Board includes all of the feature of PC, Projector, Writing Pad, Camera, and more.",
    imageSrc:
      "https://mjsolution.co.id/wp-content/uploads/2022/10/uhd.5afd2ab8693496832a45370294aca878bad02664e013f4bf30eae841315951a4.gif",
  },
  videoWall: {
    list: "Video Wall",
    heading: "Seamless and Flexible Sized Display for every purposes",
    description: "With Deeper visual impact and thinner bezel width, KMI VideoWall able to deliver content with resizable size and High definition screen resolution. ",
    imageSrc:
      "https://mjsolution.co.id/wp-content/uploads/2022/11/VIDEO-WALL_KMI8000-768x615.png",
  },
  digitalSignage: {
    list: "Digital Signage",
    heading: "We Provide Various way to Deliver your Information",
    description:
      "With our various size & type of digital signage. We can help you find the most compatible display for your Information, Advertisement, and more.",
    imageSrc:
      "https://mjsolution.co.id/wp-content/uploads/2022/11/2C94C5DE-C629-4F56-A8C5-B6A5D4687829-1536x1073.png",
  },
  ledPanel: {
    list: "LED Panel",
    heading: 'Robust display panel for Indoor, Outdoor, and Floor',
    description: "We have various type of LED Panel starting from The Indoor Smallest Pixel Pitch until The Outdoor Highest Pixel Pitch and also LED Floor panel to support your creative ideas.",
    imageSrc:
      "https://mjsolution.co.id/wp-content/uploads/2022/11/16F5EF86-65C1-468E-981A-A0E693DA6ADC-1536x1073.png",
  },
};

const SectionThree: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<SectionKey>("interactiveWhiteboard");

  const handleClick = (section: SectionKey) => {
    setSelectedSection(section);
  };

  const { heading, description, imageSrc, } = Sections[selectedSection];

  return (
    <div className="h-full flex flex-col gap-10 mt-20 mb-72">
      {/* 02 heading */}
      <div className="flex flex-col items-start md:mx-32">
        <div className="flex justify-between gap-52 md:gap-96 text-hijau font-bold mb-12 md:text-lg text-sm">
          <h4>03</h4>
          <h4>Product We Provide</h4>
        </div>
        <h1 className="font-bold text-5xl md:text-8xl mb-10">
        We Distribute Leading and Innovative Product.
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

export default SectionThree;
