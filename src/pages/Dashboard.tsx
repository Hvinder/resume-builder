import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResumeCard from "../components/ResumeCard";
import { ResumeState } from "../redux/features/resumeSlice";
import { localstorageKeys } from "../utils/localstorage";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleBuildStart = () => {
    navigate("/build");
  };

  const [resumes] = useState<ResumeState[]>(
    JSON.parse(localStorage.getItem(localstorageKeys.RESUMES) || "[]"),
  );

  return (
    <div className="flex flex-col items-center justify-between h-36 gap-10">
      {resumes.length ? (
        <>
          {resumes.map((resume, i) => (
            <ResumeCard key={i} resumeDetails={resume} />
          ))}
        </>
      ) : (
        <p>No Resume yet? we got you covered</p>
      )}
      <div
        className="flex cursor-pointer justify-center items-center p-2 w-48 h-20 rounded-lg shadow-xl border-solid border-2 border-black"
        onClick={handleBuildStart}
      >
        {resumes.length ? 'Build another one!' : 'Build one!'}
      </div>
    </div>
  );
};

export default Dashboard;
