import ListingCard from "./ListingCard";
import Link from "next/link";
export default function FeaturedListings() {
  return (
    <section className="mt-14 flex justify-center xl:mt-32 ">
      <div className="mx-4 flex flex-col items-center gap-4 ">
        <h2 className="text-3xl font-bold xl:text-5xl">Featured Listings</h2>
        <p className="xl:w-2/4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          risus in mauris congue pharetra. Morbi tortor nulla, rutrum vitae
          ipsum at, maximus interdum turpis.
        </p>
        <Link href='/listings'>
          <button className="text-white bg-[#150F0A] px-8 py-2 text-lg">
            Show All Listings
          </button>
        </Link>
        <div className="space-y-8 sm:grid md:gap-6 md:grid-cols-2 md:space-y-0 xl:grid-cols-3 xl:gap-8">
          <ListingCard
            title="Large 4-room apartment with a beautiful terrace"
            price="$320,000"
            location="West Legon"
            image="/image-1.jpg"
          />
          <ListingCard
            title="5i large design apartment with terrace"
            price="$280,000"
            location="Tema Community 1"
            image="/image-3.jpg"
          />
          <ListingCard
            title="5i large design apartment with terrace"
            price="$280,000"
            location="Tema Community 1"
            image="/image-4.jpg"
          />
        </div>
      </div>
    </section>
  );
}
