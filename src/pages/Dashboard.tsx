import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleBuildStart = () => {
    navigate("/build");
  };

  return (
    <div className="flex flex-col items-center justify-between h-36">
      <p>No Resume yet? we got you covered</p>
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
