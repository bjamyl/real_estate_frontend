import Image from "next/image";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { MdOutlinePriceChange } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { FiTrello } from "react-icons/fi";
import { FiLayout } from "react-icons/fi";
import { BiBath } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";

export default function SingleListing({
  image,
  bathrooms,
  bedrooms,
  price,
  garage,
  realtor,
  lotSize,
  sqft,
  description,
  address,
  city,
  region,
  title
}) {
  return (
    <section className="mt-20">
      <div>
        {/* First block */}
        <div className="flex flex-col xl:items-center mx-4">
          <h1 className="font-bold text-[#150F0A] text-xl xl:text-5xl xl:w-[1280px] mb-4">
            {title}
          </h1>
          <div className="xl:w-[1280px]">
            <Image
              src={image}
              width={1920}
              height={1080}
              layout="responsive"
              objectFit="cover"
              alt="main-image"
              placeholder="blur"
            />
          </div>
          <div className="xl:w-[1280px] mt-2">
            <div className="">
              <h1 className="text-3xl xl:text-4xl font-semibold text-gray-700">{address}</h1>
              <h3 className="xl:text-xl">
                {city}, {region}
              </h3>
            </div>
            <div>
              <p className="font-semibold text-xl xl:text-2xl">GHC { price }</p>
              <p className="font-bold text-xl mt-4 xl:text-2xl">Description</p>
              <p className="xl:text-lg">{description}</p>
              <h1 className="font-bold text-xl mt-8 xl:text-2xl">Home Highlights</h1>

            </div>
          </div>
        </div>

        {/* Second block */}
        <div className="flex justify-center">
          <div className="px-2 xl:p-4 grid grid-cols-2 gap-2 xl:gap-8 md:grid-cols-4 border rounded-lg mb-8 xl:w-[1280px] w-full py-2 ">
            {/* Left side */}
            {/* <div > */}
            <div className="flex items-center justify-between">
              <p className="font-bold text-sm xl:text-xl flex items-center">
                <MdOutlinePriceChange size={25} />
                Price
              </p>
              <p className="text-sm font-semibold xl:text-lg text-gray-700">
                GHC{price}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-sm xl:text-xl flex items-center">
                <BiBed size={25} />
                Bedrooms
              </p>
              <p className="text-sm font-semibold xl:text-lg text-gray-700">
                {bedrooms}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-sm xl:text-xl flex items-center">
                <BiBath size={25} />
                Bathrooms
              </p>
              <p className="text-sm font-semibold xl:text-lg text-gray-700">
                {bathrooms}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-sm xl:text-xl flex items-center">
                <GiHomeGarage size={25} />
                Garage
              </p>
              <p className="text-sm font-semibold xl:text-lg text-gray-700">
                {garage}
              </p>
            </div>
            {/* </div> */}
            {/* <div> */}
            <div className="flex items-center justify-between">
              <p className="font-bold text-sm xl:text-xl flex items-center">
                <FiCalendar size={25} />
                Published
              </p>
              <p className="text-sm font-semibold xl:text-lg text-gray-700">
                Tuesday
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-sm xl:text-xl flex items-center">
                <BsPerson size={25} />
                Realtor
              </p>
              <p className="text-sm font-semibold xl:text-lg text-gray-700">
                {realtor}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold flex xl:text-xl items-center">
                <FiTrello size={25} />
                Lot Size
              </p>
              <p className="font-semibold xl:text-lg text-gray-700 text-sm">
                {lotSize}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold flex xl:text-xl items-center">
                <FiLayout size={25} />
                SQFT
              </p>
              <p className="font-semibold xl:text-lg text-gray-700 text-sm">
                {sqft}
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
