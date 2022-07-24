import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@material-tailwind/react";
import { GrClose } from "react-icons/gr";
import Layout from "../components/layout/index";
import CardPost from "../components/CardPost/index";
import PopUpPost from "../components/PopUpPost/index";

export default function posts({ dataPosts, dataUsers, dataComments }) {
  if (!dataPosts) {
    return null;
  }
  const [popUp, setPopUp] = useState();

  const router = useRouter();

  console.log(dataPosts);
  console.log(dataUsers);
  console.log(dataComments);

  const postsList = dataPosts?.map((item) => {
    const userInfo = dataUsers?.find((user) => {
      return user.id === item.user_id;
    });

    const commentInfo = dataComments?.find((comment) => {
      return comment.find((nestedComment) => {
        return nestedComment.post_id === item.id;
      });
    });

    let commentsNum = 0;

    const comments = commentInfo?.map((comment) => {
      commentsNum += 1;
      return (
        <div key={comment.email} className="mt-4">
          <div
            onClick={() => router.push(`/users/${comment.id}`)}
            className="cursor-pointer hover:text-grey-800 hover:duration-500"
          >
            <h1 className="font-bold ">{comment.name}</h1>
            <h1 className="border-0 line-clamp-1 text-xs ">{comment.email}</h1>
          </div>
          <h1 className="text-md">{comment.body}</h1>
        </div>
      );
    });

    const closePupUp = () => {
      console.log("close post pupup");
      setPopUp();
    };

    const openPopUp = (title, body) => {
      console.log("open post popup");
      setPopUp(
        <PopUpPost
          postComments={comments}
          postUser={userInfo?.name}
          postEmail={userInfo?.email}
          postTitle={title}
          postBody={body}
          closeButton={
            <Button
              onClick={closePupUp}
              className="h-full bg-transparent shadow-none drop-shadow-none hover:drop-shadow-none hover:shadow-none"
            >
              <GrClose size={24} />
            </Button>
          }
        />
      );
    };

    return (
      <div
        key={item.id}
        style={{ width: 400 }}
        onClick={() => openPopUp(item.title, item.body)}
        className="cursor-pointer"
      >
        <CardPost
          postTitle={item.title}
          postBody={item.body}
          postUser={userInfo?.name}
          postEmail={userInfo?.email}
          commentsNum={commentsNum}
        />
      </div>
    );
  });

  return (
    <Layout>
      <div>Posts</div>
      {popUp}
      <div
        className="border-0 gap-4 flex flex-wrap justify-center mx-auto px-4"
        style={{ maxWidth: 1400 }}
      >
        {postsList}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const dataPosts = await fetch("https://gorest.co.in/public/v2/posts").then(
    (res) => {
      return res.json();
    }
  );

  const dataUsers = await Promise.all(
    dataPosts.map((result) =>
      fetch(`https://gorest.co.in/public/v2/users/${result.user_id}`).then(
        (res) => {
          return res.json();
        }
      )
    )
  );

  const dataComments = await Promise.all(
    dataPosts.map((result) =>
      fetch(`https://gorest.co.in/public/v2/posts/${result.id}/comments`).then(
        (res) => {
          return res.json();
        }
      )
    )
  );

  return {
    props: {
      dataPosts,
      dataUsers,
      dataComments,
    },
  };
};
