// import Link from "next/link";
// import styles from "../styles/Home.module.css";
import Layout from "../components/layout/index";

export default function Home() {
  return (
    <Layout>
      <div className="grid h-screen place-content-center -mt-20">
        <h1 style={{ textSize: 24 }} className="text-bold text-2xl">
          Welcome
        </h1>
      </div>
    </Layout>
  );
}
