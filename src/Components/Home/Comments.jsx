import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Comments({ comment }) {
  const { text, username } = comment;
  const { users } = useSelector((state) => state.user);
  const commentByUser = users?.find((e) => e.username === username);
  const { firstName, lastName, profilePhoto } = commentByUser;
  return (
    <>
      <div className="flex gap-3">
        <img className="h-8 w-8 rounded-full" src={profilePhoto} />
        <div className="w-full bg-gray-200 grow flex flex-col rounded-md px-2 py-1">
          <p className="text-sm">
            {firstName} {lastName}
          </p>
          <p className="text-xs text-gray-500">{text}</p>
        </div>
      </div>
    </>
  );
}

export { Comments };
