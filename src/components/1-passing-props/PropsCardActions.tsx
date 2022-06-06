import React from "react";
import { PropsCardUser } from "./PropsCard";

type Props = {
  user?: PropsCardUser;
};

const PropsCardActions = ({ user, ...props }: Props) => {
  return (
    <div className="ui two buttons">
      <div className="ui basic green button">Approve</div>
      <div className="ui basic red button">Decline</div>
    </div>
  );
};

export default PropsCardActions;
