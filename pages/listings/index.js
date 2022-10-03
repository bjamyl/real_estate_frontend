import React from "react";
import SearchBlock from "../../components/ListingsPageComponents/SearchBlock";
import Layout from "../../components/Layout/Layout";
import ListingCard from "../../components/HomepageComponents/ListingCard";
import Link from "next/link";

export default function Listings({ listings }) {

  return (
    <Layout title='Real Estate | All Listings'>
      <section className="my-28 xl:mx-8 mx-4">
        <SearchBlock  description='Choose from the most advantageous offers' />
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:space-y-0 xl:grid-cols-3 xl:gap-10">
            {listings.map((listing) => (
              <Link key={listing.id} href={`/listings/${listing.id}`}>
                <a>
                  <ListingCard
                    title={listing.title}
                    price={listing.price}
                    location={listing.address}
                    image={listing.photo_main}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://realestate.up.railway.app/api/listings/");
  const listings = await res.json();

  // Pass data to the page via props
  return { props: { listings } };
}
