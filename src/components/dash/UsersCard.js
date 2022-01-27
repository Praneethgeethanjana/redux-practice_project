import React from "react";
import "./UsersCard.css";
import Card from "./Card";

import { useSelector } from "react-redux";

const UsersCard = () => {
  const userList = useSelector((state) => state.signup.records);

  return (
    <div className="card">
      {userList.map((item) => (
        <Card
        key={item.email}
          item={{
            email: item.email,
            name: item.name,
            mobile: item.mobile,
          }}
        />
      ))}
    </div>
  );
};

export default UsersCard;
