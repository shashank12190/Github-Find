import React, { useContext } from "react";
import { GitHubContext } from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
  const { loading, users } = useContext(GitHubContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users?.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserResults;
