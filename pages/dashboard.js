import {useContext} from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";


export default function Dashboard() {
    let {user} = useContext(AuthContext)
  return (
    <Layout title={`Real Estate | ${user ?user.first_name : ''} Dashboard`}>
      <section>
        <div></div>
      </section>
    </Layout>
  );
}
