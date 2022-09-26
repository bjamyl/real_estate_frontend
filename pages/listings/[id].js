import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../../components/Layout/Layout";
import SingleListing from "../../components/ListingsPageComponents/SingleListingPageComponents/SingleListing";
import Modal from "../../components/Modal";
import AuthContext from "../../context/AuthContext";
export default function Listing({ listing }) {
  const orig = "http://localhost:8000";
  let { user } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted");
    // const res = await fetch()

    // const data = await res.json()
    setShowModal(!showModal);
  };

  return (
    <Layout title={`Real Estate | ${listing?.title} `}>
      <section className="">
        <div>
          {listing && (
            <SingleListing
              image={orig + listing.photo_main}
              bathrooms={listing.bedrooms}
              garage={listing.garage}
              price={listing.price}
              bedrooms={listing.bedrooms}
              realtor={listing.realtor}
              lotSize={listing.lot_size}
              sqft={listing.sqft}
              description={listing.description}
              address={listing.address}
              region={listing.region}
              city={listing.city}
              title={listing.title}
            />
          )}
        </div>
        <button
          onClick={() => setShowModal(!showModal)}
          className=" px-4 py-2 text-white bg-[#150F0A] xl:px-8 xl:py-2 xl:text-lg fixed bottom-[5%] right-4 xl:right-48"
        >
          Make Enquiry
        </button>
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          <Modal isVisible={showModal} onClose={() => setShowModal(!showModal)}>
            <div>
              <form
                className="flex flex-col gap-4 p-2 xl:p-4"
                onSubmit={handleSubmit}
              >
                <h1 className="font-bold text-2xl xl:text-4xl">
                  Make An Enquiry
                </h1>
                <div>
                  <label className="xl:text-lg">Listing Title</label>
                  <input
                    className="border p-2 w-full"
                    disabled
                    name="listing-title"
                    type="text"
                    value={listing.title}
                  />
                </div>
                <div>
                  <label className="xl:text-lg">Email</label>
                  <input
                    className="border p-2 w-full"
                    placeholder="janedoe@mail.com"
                    name="email"
                    type="email"
                    // value={user? user.first_name: null}
                  />
                </div>
                <div>
                  <label className="xl:text-lg">Message</label>
                  <textarea
                    className="w-full border p-2"
                    name="message"
                    cols="30"
                    rows="10"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="px-4 py-2 text-white bg-[#150F0A] xl:px-8 xl:py-2 xl:text-lg xl:w-1/4 place-self-center"
                >
                  Submit Enquiry
                </motion.button>
              </form>
            </div>
          </Modal>
        </AnimatePresence>
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
