import React from "react";
import { Link } from "react-router-dom";
import { DEV_API } from "../utils/constants";
import JobCard from "./JobCard";
import useFetch from "../utils/useFetch";
const JobsPage = () => {
  const jobs = useFetch(DEV_API);
  if (jobs == null) return <h1>Loading...</h1>;
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="font-extrabold rounded-xl p-4 border w-52 m-2 bg-gray-400 border-gray-400">
          Jobs List
        </h1>
        <Link to="/">
          <button className="bg-green-300 border border-gray-400 rounded-lg m-3 p-3">
            Back
          </button>
        </Link>
      </div>
      <div>
        {jobs.map((emp) => {
          return <JobCard {...emp} key={emp.id} />;
        })}
      </div>
    </div>
  );
};

export default JobsPage;
