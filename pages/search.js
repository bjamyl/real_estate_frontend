import Layout from "../components/Layout/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import {
  regions,
  bedrooms,
  max_price,
} from "../components/ListingsPageComponents/data";
import { useContext } from "react";
import SearchContext from "../context/SearchContext";
import Link from "next/link";
import ListingCard from "../components/HomepageComponents/ListingCard";
import SearchBlock from "../components/ListingsPageComponents/SearchBlock";

export default function Search() {
  let { listingsSearch, searchItems, values } = useContext(SearchContext);

  console.log(listingsSearch);

  return (
    <Layout title="Real Estate | Search Results">
      <section className="my-28 xl:mx-8 mx-4">
        <div className="xl:mx-8">
          <SearchBlock
            description={`Showing search results for "${
              searchItems ? searchItems : values.region
            }"`}
          />
          {listingsSearch ? (
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:space-y-0 xl:grid-cols-3 xl:gap-10">
                {listingsSearch.map((listing) => (
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
          ) : (
            <p className="bold text-lg xl:text-3xl text-center">
              Your search did not match any listings in our database. Please try a different search
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}
