import styled from "styled-components";
import {
  selectPersonalDetails,
  setPersonalDetails,
} from "../redux/features/resumeSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Input = styled.input`
    background: #fff;
    border-bottom: 1px solid #000;
    padding: 10px;
    color: #000;

    &:focus {
        outline: none;
    }
`;

const PersonalDetails = () => {
  const personalDetails = useAppSelector(selectPersonalDetails);
  const dispatch = useAppDispatch();

  const updatePersonalDetails = (obj: Record<string, string>) => {
    dispatch(setPersonalDetails({ ...personalDetails, ...obj }));
  };

  return (
    <div className="flex flex-col gap-2 w-3/5">
      <Input
        type="text"
        value={personalDetails.name}
        onChange={(ev) => updatePersonalDetails({ name: ev.target.value })}
        placeholder="please enter your name"
      />
      <Input
        type="text"
        value={personalDetails.title}
        onChange={(ev) => updatePersonalDetails({ title: ev.target.value })}
        placeholder="please enter your title"
      />
      <Input
        type="text"
        value={personalDetails.email}
        onChange={(ev) => updatePersonalDetails({ email: ev.target.value })}
        placeholder="please enter your email"
      />
      <Input
        type="text"
        value={personalDetails.location}
        onChange={(ev) => updatePersonalDetails({ location: ev.target.value })}
        placeholder="please enter your current location"
      />
      <Input
        type="text"
        value={personalDetails.phone}
        onChange={(ev) => updatePersonalDetails({ phone: ev.target.value })}
        placeholder="please enter your phone"
      />
      <Input
        type="text"
        value={personalDetails.linkedIn}
        onChange={(ev) => updatePersonalDetails({ linkedIn: ev.target.value })}
        placeholder="please enter your linkedIn"
      />
      <Input
        type="text"
        value={personalDetails.github}
        onChange={(ev) => updatePersonalDetails({ github: ev.target.value })}
        placeholder="please enter your github"
      />
    </div>
  );
};

export default PersonalDetails;
