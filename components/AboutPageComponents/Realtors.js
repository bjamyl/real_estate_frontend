import Image from "next/image";
import React from "react";

// const realtors = [
//   { id: 2, name: "Rashad Tate", image: "/john_carter.png" },
//   { id: 1, name: "James Brown", image: "/michael_scott.png" },
//   { id: 1, name: "Jane Asante", image: "/emily_brown.png" },
// ];

export default function Realtors({ realtors }) {
  return (
    <section>
      <div>
        <h1 className="font-bold text-2xl mb-2 xl:text-6xl">Our Team</h1>
        <div className=" flex gap-4 xl:gap-x-40">
          {realtors.map((realtor) => (
            <div className="" key={realtor.id}>
              <Image
                className=""
                src={realtor.photo}
                width={1080}
                height={1920}
                objectFit="cover"
                alt="realtor"
              />
              <div className="mb-4">
                <h1 className="xl:text-2xl font-bold">{realtor.name}</h1>
                <p className="xl:text-xl text-gray-600">Realtor</p>
              </div>
            </div>
          ))}
        </div>
        {/* <Image
          src="/michael_scott.png"
          width={1080}
          height={1920}
          layout="responsive"
          objectFit="cover"
        /> */}
      </div>
    </section>
  );
}
