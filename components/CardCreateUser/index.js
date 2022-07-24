import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Input,
  CardFooter,
  Button,
  Alert,
} from "@material-tailwind/react";
import { FetchCreateUser } from "../../pages/api/createuserAPI";

export default function CardCreateUser() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    gender: "",
    status: "",
    // button: false,
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  const btnCreateUser = () => {
    FetchCreateUser(user)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const inputHandler = (v) => {
    const { name, value } = v.target;
    setUser({ ...user, [name]: value });
  };

  const genderOptions = [
    { value: "", text: "gender" },
    { value: "female", text: "female" },
    { value: "male", text: "male" },
  ];

  const statusOptions = [
    { value: "", text: "status" },
    { value: "active", text: "active" },
    { value: "inactive", text: "inactive" },
  ];

  return (
    <Card style={{ minWidth: 300 }} className="border-0 h-min mt-3 -mb-3">
      <CardBody className="flex flex-col gap-2">
        <h1 className="font-bold text-grey-700 mx-auto">Create User</h1>
        <Input
          className="text-green-800 w-full outline outline-0 outline-green-200"
          label="name"
          type="text"
          // should be the same as input we want to assign
          name="name"
          onChange={inputHandler}
          // it is a good practice to add double question mark to prevent the error
          value={user.name ?? ""}
          color="teal"
        />
        <Input
          className="text-green-800 w-full outline outline-0 outline-green-200"
          label="email"
          type="text"
          // should be the same as input we want to assign
          name="email"
          onChange={inputHandler}
          // it is a good practice to add double question mark to prevent the error
          value={user.email ?? ""}
          color="teal"
        />
        <select
          value={user.gender}
          name="gender"
          onChange={inputHandler}
          className="rounded-lg h-10 px-2 bg-white border-2 border-grey-400"
          label="gender"
        >
          {genderOptions.map((option) => (
            <option key={option.value} value={option.value} className="w-96">
              {option.text}
            </option>
          ))}
        </select>
        <select
          type="select"
          value={user.status}
          name="status"
          onChange={inputHandler}
          className="rounded-lg h-10 px-2 bg-white border-2 border-grey-400"
          label="status"
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </CardBody>
      <CardFooter divider className="border-0 flex justify-center">
        <Button onClick={btnCreateUser} color="green">
          Create user
        </Button>
      </CardFooter>
    </Card>
  );
}
