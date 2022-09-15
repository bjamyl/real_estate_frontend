import Image from "next/image";
import Realtors from "./Realtors";

export default function AboutPageComponent({realtors}) {
  return (
    <section className="mt-28 xl:flex xl:justify-center">
      <div className="mx-4 xl:w-[1290px]">
        {/* upper section */}
        <div className="xl:flex xl:items-end">
          <h1 className="font-bold text-2xl xl:text-6xl mb-4">
            We help you search for the perfect home
          </h1>
          <p className="mb-4 xl:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis esse officia repudiandae ad saepe ex, amet neque quod
            accusamus rem quia magnam magni dolorum facilis ullam minima
            perferendis? Exercitationem at quaerat commodi id libero eveniet
            harum perferendis laborum molestias quia.
          </p>
        </div>
        {/* middle image section */}
        <div className="mb-4">
          <Image
            src="/about-image.jpg"
            alt="about-image"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        {/* bottom section */}
        <div className="w-auto h-1 bg-black my-8 xl:my-28"></div>
        <div className="xl:flex mt-4">
          <h1 className="font-bold text-2xl mb-4 xl:text-6xl">Together we are strong</h1>
          <div className="xl:w-3/4">
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis esse officia repudiandae ad saepe ex, amet neque quod
            </p>
            <p className="mt-8 mb-8 xl:mb-28">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis esse officia repudiandae ad saepe ex, amet neque quod
              accusamus rem quia magnam magni dolorum facilis ullam minima
              perferendis? Exercitationem at quaerat commodi id libero eveniet
              harum perferendis laborum molestias quia.
            </p>
          </div>
        </div>
        {/* last section */}
        <div>
          <Realtors realtors={realtors} />
        </div>
      </div>
    </section>
  );
}
