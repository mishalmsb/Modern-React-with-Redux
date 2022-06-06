import React from "react";
import { PropsCardUser } from "./PropsCard";

type Props = {
  user: PropsCardUser;
};

const PropsCardCommentDetail = ({ user, ...props }: Props) => {
  return (
    <div className="content">
      <img
        className="right floated mini ui image"
        src={user.avatar}
        alt={user.author}
      />
      <div className="header">{user.author}</div>
      <div className="meta">{user.date}</div>
      <div className="description">{user.postTitle}</div>
    </div>
  );
};

export default PropsCardCommentDetail;
