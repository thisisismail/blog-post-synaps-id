import { Card, CardBody } from "@material-tailwind/react";
import { useRouter } from "next/router";

export default function CardUser(props) {
  const { userId, userEmail, userName, userGender, userStatus } = props;
  const router = useRouter();
  return (
    <Card
      key={userId}
      onClick={() => router.push(`/users/${userId}`)}
      className="cursor-pointer hover:bg-grey-200 hover:duration-500 mt-3"
    >
      <CardBody className="flex justify-between">
        <div className="border-0 border-red-200 rounded-xl ">
          <h1 className="font-bold text-grey-700">{userName}</h1>
          <h1 className="border-0 line-clamp-1 text-xs text-grey-700">
            {userEmail}
          </h1>
          <h1 className="border-0 line-clamp-1 text-xs text-grey-700">
            {userGender}
          </h1>
          <h1 className="border-0 line-clamp-1 text-xs text-grey-700">
            ID: {userId}
          </h1>
        </div>
        {userStatus === "active" ? (
          <h1 className="border-0 line-clamp-1 text-xs font-bold text-green-700 absolute right-5">
            {userStatus}
          </h1>
        ) : (
          <h1 className="border-0 line-clamp-1 text-xs font-bold text-red-700 absolute right-5">
            {userStatus}
          </h1>
        )}
      </CardBody>
    </Card>
  );
}
