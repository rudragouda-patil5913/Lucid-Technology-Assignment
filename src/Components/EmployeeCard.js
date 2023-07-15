import React from "react";

const EmployeeCard = (props) => {
  const { name, username } = props;
  return (
    <div className="bg-gray-200 font-bold">
      <h1>{name}</h1>
      <h1>{username}</h1>
    </div>
  );
};

export default EmployeeCard;
