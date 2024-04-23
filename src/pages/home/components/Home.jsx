import React from "react";
import { useHome } from "@pages/home";

export const Home = () => {
  const { users } = useHome();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to Enlightez</h1>
      <ul>
        {users?.data?.map((user) => (
          <li key={user?.id}>{user?.name}</li>
        ))}
      </ul>
    </>
  );
};
