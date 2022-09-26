import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import * as cookie from "cookie";
import Link from "next/link";

export default function Dashboard({ enquiries }) {
  let { user } = useContext(AuthContext);

  return (
    <Layout title={`Real Estate | ${user ? user.first_name : ""} Dashboard`}>
      <section className="pt-28 flex flex-col items-center justify-center">
        <div className="mx-3 xl:w-[1280px]">
          <h1 className="font-bold text-2xl xl:text-4xl">Hi, {user.first_name}</h1>
          {enquiries ? (
            <p className="xl:text-lg">
              Here are the list of properties you have made enquiries about.
            </p>
          ) : (
            <p className="xl:text-lg">
              You are yet to make any enquiries. Go to the <Link>Listings</Link>{" "}
              and choose from our most advantageous offers!{" "}
            </p>
          )}
          {enquiries && (
            <div>
              <div className="grid grid-cols-2 xl:text-2xl font-bold text-lg">
                <p>#</p>
                <p>Properties</p>
              </div>
              {enquiries.map((inquiry) => (
                <div key={inquiry.id} className="grid grid-cols-2 xl:text-lg">
                  <p>{inquiry.id}</p>
                  <p>{inquiry.listing}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* {user && <h1>This is {user.first_name} Dashboard</h1>}
        <div className="border">
          <div className="grid grid-cols-2">
            <p>#</p>
            <p>Property</p>
          </div>
          {enquiries ? (
            enquiries.map((inquiry) => (
              <div key={inquiry.id} className="grid grid-cols-2">
                <p>{inquiry.id}</p>
                <p>{inquiry.listing}</p>
              </div>
            ))
          ) : (
            <h1>You have not made any enquiries yet</h1>
          )}
        </div> */}
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const verify = cookie.parse(
    (context.req && context.req.headers.cookie) || ""
  );
  console.log(verify);

  let tokens = {};
  if (verify.access) {
    tokens = verify.access;
  }

  console.log(tokens);

  const response = await fetch("http://127.0.0.1:8000/api/enquiries/", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokens.slice(1, -1),
    },
  });
  let data = await response.json();
  if (response.status === 200) {
    console.log("All good");
  } else {
    console.log("An error occured");
  }

  return { props: { enquiries: data } };
}
