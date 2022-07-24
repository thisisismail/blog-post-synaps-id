const FetchUpdateUser = async (user, id) => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  return fetch(`https://gorest.co.in/public-api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { FetchUpdateUser };
