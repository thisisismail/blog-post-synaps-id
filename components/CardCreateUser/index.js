import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  const router = useRouter();

  const btnCreateUser = () => {
    FetchCreateUser(user)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        console.log(result.code);
        return result;
      })
      .then((res) => {
        if (res.code === (201 || 200)) {
          setMessage("Succesfully create new user");
          setColor("green");
          router.push(`/users/`);
        } else {
          setMessage("Error create new user");
          setColor("red");
        }
        setShow(true);
      })
      .catch((error) => {
        console.log("error", error);
        setMessage(error);
        setShow(true);
      });
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
    <div>
      <Card style={{ minWidth: 300 }} className="border-0 h-min mt-3 -mb-3">
        <CardBody className="flex flex-col gap-2">
          <h1 className="font-bold text-grey-700 mx-auto">Create</h1>
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
          <Button onClick={btnCreateUser} color="green" className="w-40">
            Create user
          </Button>
        </CardFooter>
      </Card>
      {show === true ? (
        <div className="z-50 border-0 bg-grey-700 bg-opacity-80 backdrop-blur-sm h-full w-screen px-0 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
          <Alert
            color={color}
            show={show}
            dismissible={{
              onClose: () => setShow(false),
            }}
            className="max-w-sm mx-3"
          >
            {message}
          </Alert>
        </div>
      ) : null}
    </div>
  );
}
