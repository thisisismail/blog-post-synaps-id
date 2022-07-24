const FetchSearchUser = async (name) => {
  return fetch(`https://gorest.co.in/public/v2/users?name=${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { FetchSearchUser };
