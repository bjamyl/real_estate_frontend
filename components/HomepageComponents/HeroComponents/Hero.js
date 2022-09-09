import Image from "next/image";
import SearchBar from "./SearchBar";
export default function Hero() {
  return (
    <section className="px-4 w-screen xl:flex xl:justify-center mt-20 xl:mt-28 ">
      <div className="flex flex-col space-y-8 xl:w-[1280px] xl:flex-row ">
        <div className="space-y-8 xl:w-2/4">
          <div className="flex gap-2">
            <div className="h-auto w-1 bg-[#150F0A] xl:w-2"></div>
            <h1 className="font-bold text-4xl xl:text-7xl">
              Find <br /> The Perfect <br /> Home For You
            </h1>
          </div>
          <p className="text-base font-light xl:text-xl xl:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            risus in mauris congue pharetra. Morbi tortor nulla, rutrum vitae
            ipsum at, maximus interdum turpis.
          </p>
          <SearchBar placeholderText='Search a location' />
          <div className="flex gap-6 xl:gap-16 xl:pt-40">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-xl xl:text-4xl">5</h1>
                <p className="text-gray-500 text-center">Awards Won</p>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-xl xl:text-4xl">500+</h1>
                <p className="text-gray-500 text-center">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-xl xl:text-4xl">500+</h1>
                <p className="text-gray-500 text-center">Properties Sold</p>
            </div>
            
          </div>
        </div>
        <div className="xl:w-2/4">
          <Image
            alt="hero-image"
            src="/hero.jpg"
            layout="responsive"
            height={534}
            width={356}
          />
        </div>
      </div>
    </section>
  );
}
