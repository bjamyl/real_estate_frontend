import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />

      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Real Estate | Find The Perfect Home For You",
  description:
    "Browse and search for property listings perfectly suited for you",
  keywords: "building, home, property, real estate",
};
