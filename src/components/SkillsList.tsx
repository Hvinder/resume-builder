import { XCircle } from "react-feather";
import { removeSkills, selectSkills } from "../redux/features/resumeSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const SkillsList = ({ allowDelete = false }: { allowDelete?: boolean }) => {
  const skills = useAppSelector(selectSkills);
  const dispatch = useAppDispatch();

  return (
    <span className="flex flex-row flex-wrap gap-5 w-3/5">
      {skills.map((skill, i) => (
        <span className="relative" key={i}>
          <span className="px-5 py-2 border rounded">{skill}</span>
          {allowDelete ? (
            <XCircle
              className="absolute top-0 -right-5 cursor-pointer"
              onClick={() => dispatch(removeSkills(i))}
            />
          ) : null}
        </span>
      ))}
    </span>
  );
};

export default SkillsList;
