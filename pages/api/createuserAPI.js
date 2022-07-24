const FetchCreateUser = async (user) => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  return fetch("https://gorest.co.in/public-api/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { FetchCreateUser };
