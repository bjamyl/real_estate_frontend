import Image from "next/image";
import { MdLocationOn } from "react-icons/md";

export default function ListingCard({ image, title, price, location }) {
  return (
    <div className="rounded-2xl shadow hover:cursor-pointer">
      <div>
        <Image
        className="rounded-2xl"
          alt="listing-image"
          src={image}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit='cover'
        />
        <div className="p-2">
          <h2 className="font-bold text-xl">{title}</h2>
          <div className="mt-10">
            <p className="font-semibold">GHC {price}.00</p>
            <p className="text-light flex gap-1">
              {" "}
              <MdLocationOn color="#B0BAD5" size={24} />
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
