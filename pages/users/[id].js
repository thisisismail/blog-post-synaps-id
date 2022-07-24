import { useRouter } from "next/router";
import Layout from "../../components/layout/index";

export default function UserInfo(props) {
  const router = useRouter();
  const { jsonData } = props;
  // since we fetch data from API, which is it's time-consuming
  // don't forget to return null when the data is not ready yet
  // if not, it will give an error as we build our project later
  if (!jsonData) return null;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  console.log(jsonData);
  return (
    <Layout>
      <div>
        <p>{jsonData.name}</p>
        <p>{jsonData.email}</p>
        <p>{jsonData.gender}</p>
        <p>Hello</p>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await fetch("https://gorest.co.in/public/v2/users").then(
    (res) => {
      return res.json();
    }
  );
  const paths = data.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

// should use params name it can't be done by another name
export const getStaticProps = async (whatever) => {
  const { id } = whatever.params;
  const data = await fetch(`https://gorest.co.in/public/v2/users/${id}`).then(
    (res) => {
      return res.json();
    }
  );
  const jsonData = data;
  return {
    props: {
      jsonData,
    },
  };
};
