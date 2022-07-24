const FetchDeleteUser = async (id) => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  return fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { FetchDeleteUser };
