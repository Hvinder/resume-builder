import { useState } from "react";

import Input from "../common/Input";
import {
  selectWorkExperiences,
  setWorkDetails,
} from "../redux/features/resumeSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { WorkDetails } from "../types";
import ExperienceDetails from "./ExperienceDetails";

const WorkExperience = () => {
  const workExperiences = useAppSelector(selectWorkExperiences);
  const dispatch = useAppDispatch();

  const [experience, setExperience] = useState<Partial<WorkDetails>>();

  const handleSaveExperience = () => {
    if (
      !(
        experience?.organizationName &&
        experience.location &&
        experience.position
      )
    ) {
      return;
    }
    dispatch(setWorkDetails(experience as WorkDetails));
    setExperience(undefined);
  };

  return (
    <div className="flex flex-col gap-5 w-3/5">
      {workExperiences.map((workExperience) => (
        <ExperienceDetails workExperience={workExperience} />
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
            value={experience?.position}
            onChange={(ev) =>
              setExperience((exp) => ({ ...exp, position: ev.target.value }))
            }
            placeholder="enter your position"
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

export default WorkExperience;
