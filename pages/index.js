import Layout from "../components/Layout/Layout";
import Hero from "../components/HomepageComponents/HeroComponents/Hero";
import FeaturedListings from "../components/HomepageComponents/FeaturedListings";
import About from '../components/HomepageComponents/About'

export default function Home() {
  return (
    <Layout>
      <div className=" items-center justify-center">
        <Hero />
        <FeaturedListings/>
        <About/>
      </div>
    </Layout>
  );
}
