import Layout from "../components/layout/index";

export default function blog(props) {
  const { jsonData } = props;
  const dataBlog = jsonData;
  const blogs = dataBlog?.map((blogitem) => {
    return (
      <div key={blogitem.id} className="mt-8">
        <h3 className="font-bold">{blogitem.title}</h3>
        <p>{blogitem.body}</p>
      </div>
    );
  });

  return <Layout>{blogs}</Layout>;
}

export const getServerSideProps = async () => {
  const data = await fetch("https://gorest.co.in/public/v2/posts").then(
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
