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
import { FetchDeleteUser } from "../../pages/api/deleteuserAPI";

export default function CardDeleteUser() {
  const [id, setId] = useState();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    console.log(id);
  }, [id]);

  const router = useRouter();

  const btnDeleteUser = () => {
    FetchDeleteUser(id)
      .then((res) => {
        console.log(res);
        if (res.ok === true) {
          setMessage("Succesfully delete user");
          setColor("green");
          router.push(`/users/`);
        } else {
          setMessage("Error ID not found");
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

  const inputHandler = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <Card style={{ minWidth: 300 }} className="border-0 h-min -mb-6">
        <CardBody className="flex flex-col gap-2">
          <h1 className="font-bold text-grey-700 mx-auto">Delete User</h1>
          <Input
            className="text-green-800 w-full outline outline-0 outline-green-200"
            label="User's ID"
            type="text"
            name="id" // should be the same as input we want to assign
            onChange={inputHandler}
            value={id ?? ""} // it is a good practice to add double question mark to prevent the error
            color="teal"
          />
        </CardBody>
        <CardFooter divider className="border-0 flex justify-center">
          <Button onClick={btnDeleteUser} color="red" className="w-40">
            Delete
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
