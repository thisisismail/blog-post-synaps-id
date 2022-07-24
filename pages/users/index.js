import CardUser from "../../components/CardUser/index";
import CardCreateUser from "../../components/CardCreateUser";
import Layout from "../../components/layout/index";

export default function AllUsers(props) {
  const { jsonData } = props;
  console.log(jsonData);
  return (
    <Layout>
      <div
        className="flex border-0 justify-center gap-3 mx-auto px-3 flex-col md:flex-row"
        style={{ maxWidth: 1000 }}
      >
        <CardCreateUser />
        <div className="border-0 w-full" style={{ minWidth: 300 }}>
          {jsonData.map((data) => {
            return (
              <CardUser
                key={data.id}
                userId={data.id}
                userName={data.name}
                userEmail={data.email}
                userGender={data.gender}
                userStatus={data.status}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://gorest.co.in/public/v2/users");
  const jsonData = await data.json();
  return {
    props: {
      jsonData,
    },
  };
}
