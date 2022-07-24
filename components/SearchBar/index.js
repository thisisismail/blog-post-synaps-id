import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { GoSearch } from "react-icons/go";
import { Input, Button } from "@material-tailwind/react";
import CardUser from "../CardUser/index";
// import { searchResult } from "../../store/Redux/action/index.js";
// import { FetchSearch } from "../../apiCall/index.ts";
import { FetchSearchUser } from "../../pages/api/searchuserAPI";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  // const hasil = useSelector((state) => state.searchResultReducer);
  // const dispatch = useDispatch();

  useEffect(() => {
    console.log(input);
  }, [input]);

  useEffect(() => {
    // dispatch(searchResult(result));
  }, [result]);

  // useEffect(() => {
  //   console.log("Show state from redux");
  //   // console.log(hasil);
  //   console.log("Finish show");
  // }, [hasil]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = () => {
    // FetchSearch(input)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     return data.items;
    //   })
    //   .then((data) => {
    //     setResult(data);
    //   })
    //   .then(() => {
    //     console.log("Redux Updated");
    //   });
    FetchSearchUser(input)
      .then((res) => {
        return res.json();
      })
      .then((data) => setResult(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{ maxWidth: 800 }}
      className="flex flex-col mx-auto mt-3 border-0 px-3"
    >
      <div className="w-full border-0 flex flex-col items-end justify-center">
        <Input
          className="text-green-800 w-full outline outline-0 outline-green-200"
          label="Search user's name"
          type="text"
          // should be the same as input we want to assign
          name="search"
          onChange={inputHandler}
          value={input ?? ""} // it is a good practice to add double question mark to prevent the error
          color="teal"
        />
        <Button
          color="green"
          onClick={submitHandler}
          className=" text-white w-8 relative -top-10 outline-green-200 rounded-l-none"
        >
          <GoSearch size={16} className="-mx-2 text-white" />
        </Button>
      </div>
      <div className="border-0 w-full -mt-10 mx-auto" style={{ minWidth: 300 }}>
        {result.map((data) => {
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
  );
}
