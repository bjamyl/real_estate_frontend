import React from "react";
import SearchBlock from "../../components/ListingsPageComponents/SearchBlock";
import Layout from "../../components/Layout/Layout";

export default function Listings() {
  return (
    <Layout>
      <section className="mt-28">
        <SearchBlock/>
      </section>
    </Layout>
  );
}
