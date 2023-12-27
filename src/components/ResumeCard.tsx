import { useNavigate } from "react-router-dom";
import { ResumeState } from "../redux/features/resumeSlice";
import { localstorageKeys } from "../utils/localstorage";

const ResumeCard = ({ resumeDetails }: { resumeDetails: ResumeState }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-36 h-36 border rounded-md shadow-md cursor-pointer flex items-center justify-center"
      onClick={() => {
        localStorage.setItem(
          localstorageKeys.RESUMETEMP,
          JSON.stringify(resumeDetails),
        );
        setTimeout(() => {
          navigate("/build");
        }, 100);
      }}
    >
        {resumeDetails.personalDetails.name}
        </div>
  );
};

export default ResumeCard;
