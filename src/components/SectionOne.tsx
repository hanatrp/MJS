import Image from "next/image";
import React from "react";

const SectionOne = () => {
  return (
    <div  className="h-full flex flex-col gap-10 mb-20">
      <div className="flex flex-col items-start md:mx-32">
        <div className="flex justify-between gap-52 md:gap-96 text-hijau font-bold mb-12">
          <h4>01</h4>
          <h4> Who Are We</h4>
        </div>

        <h4 className="font-bold text-5xl md:text-8xl mb-10">
          We Explore, Create, and Inspire
        </h4>
        <p className="text-gray-500 text-sm md:text-lg">
          Kami adalah Distributor Perakngat Elektronik Perkantoran dan
          Perusahaan Konsultasi Transformasi Digital dan Pengembangan Perangkat
          Lunak yang menyediakan solusi teknik Terbaik untuk semua masalah anda
          selama perjalanan evolusi digital. Kami telah menjadi produsen dan
          mitra rekayasa perangkat lunak yang andal dan visioner untuk merek
          kelas Multinasional sejak tahun 2015
        </p>
      </div>
      <div className="flex flex-col gap-6 xl:mx-32">
        <h2 className="text-2xl font-bold">Our Happy Client</h2>
        <div>
          <Image src='https://mjsolution.co.id/wp-content/uploads/2022/10/F97775CA-0D20-49D7-8827-DB6A5B593B43-1536x519.jpeg' alt="client" width={1536} height={519}/>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
