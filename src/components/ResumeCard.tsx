import { useNavigate } from "react-router-dom";
import { ResumeState, setResumeDetails } from "../redux/features/resumeSlice";
import { useAppDispatch } from "../redux/hooks";

const ResumeCard = ({ resumeDetails }: { resumeDetails: ResumeState }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div
      className="w-36 h-36 border rounded-md shadow-md cursor-pointer flex items-center justify-center"
      onClick={() => {
        dispatch(setResumeDetails(resumeDetails))
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
