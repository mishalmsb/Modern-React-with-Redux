import React from "react";
import PropsCardActions from "./PropsCardActions";

export type PropsCardUser = {
  avatar?: string;
  author?: string;
  date?: string;
  postTitle?: string;
};

type Props = {
  user: PropsCardUser;
  children?: JSX.Element;
};

const PropsCard = ({ user, children, ...props }: Props) => {
  return (
    <div className="ui cards">
      <div className="card">
        {children ? <div className="content">{children}</div> : null}
        <div className="extra content">
          <PropsCardActions user={user} />
        </div>
      </div>
    </div>
  );
};

export default PropsCard;
