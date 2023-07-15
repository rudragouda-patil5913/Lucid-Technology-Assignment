import React from "react";

const JobCard = (props) => {
  const { name, bs } = props.company;
  return (
    <div className="bg-gray-200 font-bold border-b-2 border-green-300">
      <h1>Company : {name}</h1>
      <h1>Type : {bs}</h1>
    </div>
  );
};

export default JobCard;
