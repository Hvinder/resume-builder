import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleBuildStart = () => {
    navigate("/build");
  };

  const [resumes] = useState(
    JSON.parse(localStorage.getItem("resumes") || "[]"),
  );

  return (
    <div className="flex flex-col items-center justify-between h-36">
      {resumes.length ? <></> : <p>No Resume yet? we got you covered</p>}
      <div
        className="flex cursor-pointer justify-center items-center p-2 w-48 h-20 rounded-lg shadow-xl border-solid border-2 border-black"
        onClick={handleBuildStart}
      >
        Build one!
      </div>
    </div>
  );
};

export default Dashboard;
