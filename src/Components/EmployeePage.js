import React from "react";
import useFetch from "../utils/useFetch";
import EmployeeCard from "./EmployeeCard";
import { DEV_API } from "../utils/constants";
import { Link } from "react-router-dom";

const EmployeePage = () => {

    const employees = useFetch(DEV_API);
  if (employees == null) return <h1>Loading...</h1>;
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="font-extrabold rounded-xl p-4 border w-52 m-2 bg-gray-400 border-gray-400">
          Employess List
        </h1>
        <Link to="/">
          <button className="bg-green-300 border border-gray-400 rounded-lg m-3 p-3">
            Back
          </button>
        </Link>
      </div>
      <div>
        {employees.map((emp) => {
          return <EmployeeCard {...emp} key={emp.id} />;
        })}
      </div>
    </div>
  );
};

export default EmployeePage;
