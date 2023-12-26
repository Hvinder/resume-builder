import { useState } from "react";
import Input from "../common/Input";
import { setSkills } from "../redux/features/resumeSlice";
import { useAppDispatch } from "../redux/hooks";
import SkillsList from "./SkillsList";

const Skills = () => {
  const dispatch = useAppDispatch();

  const [newSkill, setNewSkill] = useState("");

  const handleAdd = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter" && newSkill) {
      dispatch(setSkills(newSkill));
      setNewSkill("");
    }
  };

  return (
    <div className="flex flex-col gap-5 w-3/5">
      <SkillsList allowDelete />
      <Input
        type="text"
        value={newSkill}
        onChange={(ev) => setNewSkill(ev.target.value)}
        placeholder="enter a skill"
        onKeyDown={handleAdd}
      />
    </div>
  );
};

export default Skills;
