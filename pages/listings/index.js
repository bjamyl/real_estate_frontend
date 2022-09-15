import React from "react";
import SearchBlock from "../../components/ListingsPageComponents/SearchBlock";
import Layout from "../../components/Layout/Layout";
import { listingsData } from "../../components/ListingsPageComponents/listingData";
import ListingCard from "../../components/HomepageComponents/ListingCard";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Listings({ listings }) {
  const orig = "http://localhost:8000";
  console.log(listings);

  return (
    <Layout>
      <section className="my-28 xl:mx-8 mx-4">
        <SearchBlock />
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:space-y-0 xl:grid-cols-3 xl:gap-10">
            {listings.map((listing) => (
              <Link key={listing.id} href={`/listings/${listing.id}`}>
                <a>
                  <ListingCard
                    title={listing.title}
                    price={listing.price}
                    location={listing.address}
                    image={orig + listing.photo_main}
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
  const res = await fetch("http://127.0.0.1:8000/api/listings");
  const listings = await res.json();
  console.log(listings);

  // Pass data to the page via props
  return { props: { listings } };
}
