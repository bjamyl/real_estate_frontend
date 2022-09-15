import React from "react";
import Layout from "../../components/Layout/Layout";
import FeaturesCardOne from "../../components/ListingsPageComponents/SingleListingPageComponents/FeaturesCard";
import SingleListing from "../../components/ListingsPageComponents/SingleListingPageComponents/SingleListing";

export default function Listing({ listing }) {
  const orig = "http://localhost:8000";

  return (
    <Layout title={`Real Estate | ${listing.title} `}>
      <section>
        <div>
          <SingleListing
            image={orig + listing.photo_main}
            bathrooms={listing.bedrooms}
            garage={listing.garage}
            price={listing.price}
            bedrooms={listing.bedrooms}
            realtor={listing.realtor}
            lotSize = {listing.lot_size}
            sqft={listing.sqft}
            description={listing.description}
            address={listing.address}
            region={listing.region}
            city={listing.city}
            title={listing.title}
          />
        </div>
      </section>
    </Layout>
  );
}
export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/listings/");
  const data = await res.json();

  const paths = data.map((listing) => {
    return {
      params: { id: listing.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://127.0.0.1:8000/api/listings/${id}`);
  const data = await res.json();

  return {
    props: { listing: data },
  };
};
