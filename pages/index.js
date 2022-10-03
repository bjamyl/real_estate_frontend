import Layout from "../components/Layout/Layout";
import Hero from "../components/HomepageComponents/HeroComponents/Hero";
import FeaturedListings from "../components/HomepageComponents/FeaturedListings";
import About from '../components/HomepageComponents/About'

export default function Home({listings}) {
  return (
    <Layout>
      <div className=" items-center justify-center">
        <Hero />
        <FeaturedListings listings={listings}/>
        <About/>
      </div>
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

