import { Card, CardBody } from "@material-tailwind/react";
import CardUser from "../../components/CardUser/index";
import Layout from "../../components/layout/index";

export default function AllUsers(props) {
  const { jsonData } = props;
  console.log(jsonData);
  return (
    <Layout>
      <div className="border-2 w-80">
        <p className="mt-4">AllUsers</p>
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
      <Card style={{ width: 300 }}>
        <CardBody>Crete User</CardBody>
      </Card>
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
