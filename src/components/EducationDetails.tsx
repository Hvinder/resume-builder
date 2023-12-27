import { useState } from "react";
import {
  removeEducationDetails,
  selectEducationDetails,
  setEducationDetails,
} from "../redux/features/resumeSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { EducationDetails } from "../types";
import { XCircle } from "react-feather";
import Input from "../common/Input";
import ExperienceDetails from "./ExperienceDetails";

const EducationDetailsContainer = () => {
  const educationDetails = useAppSelector(selectEducationDetails);
  const dispatch = useAppDispatch();

  const [experience, setExperience] = useState<Partial<EducationDetails>>();

  const handleSaveExperience = () => {
    if (
      !(
        experience?.organizationName &&
        experience.location &&
        experience.specialization
      )
    ) {
      return;
    }
    dispatch(setEducationDetails(experience as EducationDetails));
    setExperience(undefined);
  };

  const handleRemoveExperience = (index: number) => {
    dispatch(removeEducationDetails(index));
  };

  return (
    <div className="flex flex-col gap-5">
      {educationDetails.map((educationDetails, i) => (
        <div className="relative">
          <ExperienceDetails experience={educationDetails} />
          <XCircle
            className="absolute top-0 -right-5 cursor-pointer"
            onClick={() => handleRemoveExperience(i)}
          />
        </div>
      ))}
      <div className="border-b-2 pb-2">
        <div className="flex flex-col w-3/5">
          <Input
            type="text"
            value={experience?.organizationName}
            onChange={(ev) =>
              setExperience((exp) => ({
                ...exp,
                organizationName: ev.target.value,
              }))
            }
            placeholder="enter your organization name"
          />
        </div>
        <div className="flex flex-col w-3/5">
          <Input
            type="text"
            value={experience?.specialization}
            onChange={(ev) =>
              setExperience((exp) => ({
                ...exp,
                specialization: ev.target.value,
              }))
            }
            placeholder="enter your specialization"
          />
        </div>
        <div className="flex flex-col w-3/5">
          <Input
            type="text"
            value={experience?.location}
            onChange={(ev) =>
              setExperience((exp) => ({ ...exp, location: ev.target.value }))
            }
            placeholder="enter your location"
          />
        </div>
        <div className="flex flex-col w-3/5">
          <span>currently working?</span>
          <input
            type="checkbox"
            checked={!!experience?.isCurrent}
            onChange={(ev) =>
              setExperience((exp) => ({ ...exp, isCurrent: ev.target.checked }))
            }
          />
        </div>
      </div>
      <button
        className="bg-green-400 hover:bg-green-500 hover:outline-none w-fit"
        onClick={handleSaveExperience}
      >
        Save
      </button>
    </div>
  );
};

export default EducationDetailsContainer;
