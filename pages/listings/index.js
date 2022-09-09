import React from "react";
import SearchBlock from "../../components/ListingsPageComponents/SearchBlock";
import Layout from "../../components/Layout/Layout";
import { listingsData } from "../../components/ListingsPageComponents/listingData";
import ListingCard from "../../components/HomepageComponents/ListingCard";

export default function Listings() {
  return (
    <Layout>
      <section className="my-28 xl:mx-8 mx-4">
        <SearchBlock />
        <div>
          <div className="space-y-8 sm:grid md:gap-6 md:grid-cols-2 md:space-y-0 xl:grid-cols-3 xl:gap-10">
            {listingsData.map((listing) => (
              <ListingCard
                key={listing.id}
                title={listing.title}
                price={listing.price}
                location={listing.location}
                image={listing.image}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
