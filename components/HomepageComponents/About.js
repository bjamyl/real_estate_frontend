import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <section className="px-4 my-14 xl:my-32 flex justify-center">
      <div className="  flex-col justify-center space-y-4 items-center xl:w-[1280px]">
        <h1 className="font-bold text-3xl text-center xl:text-5xl xl:mb-8">About Us</h1>
        <div className="sm:grid md:grid-cols-2 md:gap-4">
          <div className="border">
            <Image
              src="/about-image.jpg"
              width={1920}
              height={1080}
              layout="responsive"
              alt="about-image"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col xl:mt-0 items-center justify-center gap-2  mt-2 xl:items-start">
            <p className="xl:text-xl ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              risus in mauris congue pharetra. Morbi tortor nulla, rutrum vitae
              ipsum at, maximus interdum turpis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec ac risus in mauris congue
              pharetra. Morbi tortor nulla, rutrum vitae ipsum at, maximus
              interdum turpis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Donec ac risus in mauris congue pharetra. Morbi
              tortor nulla, rutrum vitae ipsum at, maximus interdum turpis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              risus in mauris congue pharetra. Morbi tortor nulla, rutrum vitae
              ipsum at, maximus interdum turpis.
            </p>
            <Link href='/about'>
              <button className="text-white bg-[#150F0A] px-8 py-2 text-lg">
                Get to know us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
