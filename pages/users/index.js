import { Card, CardBody } from "@material-tailwind/react";
import CardUser from "../../components/CardUser/index";
import CardCreateUser from "../../components/CardCreateUser";
import CardDeleteUser from "../../components/CardDeleteUser";
import CardUpdateUser from "../../components/CardUpdateUser";
import Layout from "../../components/layout/index";

export default function AllUsers(props) {
  const { jsonData } = props;
  console.log(jsonData);
  return (
    <Layout>
      <div className="flex flex-col w-full gap-3">
        <div
          className="flex border-0 justify-center gap-3 mx-auto px-3 flex-col md:flex-row"
          style={{ maxWidth: 1000 }}
        >
          <div className="flex flex-col gap-6">
            <CardCreateUser />
            <CardDeleteUser />
            <CardUpdateUser />
          </div>
          <Card className="border-0 w-full mt-3">
            <CardBody>
              <h1 className="font-bold text-grey-700 mx-auto text-center">
                Read User
              </h1>
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
            </CardBody>
          </Card>
        </div>
        {/* <div
          className="flex border-0 justify-center gap-3 mx-auto px-3 flex-col md:flex-row"
          style={{ maxWidth: 1000 }}
        >
          <Card style={{ minWidth: 300 }} className="">
            <CardBody>Update User</CardBody>
          </Card>
        </div> */}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await fetch("https://gorest.co.in/public/v2/users");
  const jsonData = await data.json();
  return {
    props: {
      jsonData,
    },
  };
}
