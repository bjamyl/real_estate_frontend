import Image from "next/image";
import Realtors from "./Realtors";

export default function AboutPageComponent({ realtors }) {
  return (
    <section className="mt-28 xl:flex xl:justify-center">
      <div className="mx-4 xl:w-[1290px]">
        {/* upper section */}
        <div className="xl:flex xl:items-start">
          <h1 className="font-bold text-2xl xl:text-6xl mb-4">
            We help you search for the perfect home
          </h1>
          <p className="mb-4 xl:w-3/4">
            We have a wide portfolio of properties across the country and in
            major cities, ranging from luxury apartments to country homes. We
            take pride in our ability to help you find the perfect home or
            investment property for your needs. We understand the challenges of
            the housing market and work hard to ensure our clients get the most
            out of their investments.
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
          <h1 className="font-bold text-2xl mb-4 xl:text-6xl">
            Together we are strong
          </h1>
          <div className="xl:w-3/4">
            <p className="font-semibold">
              Our team is committed to providing our clients with the highest
              quality of service, from the initial consultation to the final
              closing. We are passionate about helping our clients find their
              dream home or investment property.
            </p>
            <p className="mt-8 mb-8 xl:mb-28">
              We understand that buying a home or investing in real estate can
              be a daunting task, which is why we are here to guide you every
              step of the way. Our team of professionals is available to answer
              any questions you may have and to provide you with all the
              information you need to make the best decision for your family.
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
