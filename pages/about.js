import Layout from "../components/Layout/Layout";
import AboutPageComponent from "../components/AboutPageComponents/AboutPageMain";

export default function About({realtors}) {
  return (
    <Layout title="Real Estate | About Us - We are a company dedicated to finding you the perfect home">
      <div className="">
        <AboutPageComponent realtors={realtors} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:8000/api/realtors");
  const realtors = await res.json();

  return { props: { realtors } };
}
