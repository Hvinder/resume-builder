import { Mail, Phone, MapPin, GitHub, Linkedin } from "react-feather";
import styled from "styled-components";

import { selectResumeDetails } from "../redux/features/resumeSlice";
import { useAppSelector } from "../redux/hooks";
import ExperienceDetails from "./ExperienceDetails";
import SkillsList from "./SkillsList";
import { localstorageKeys } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const Preview = () => {
  const resumeDetails = useAppSelector(selectResumeDetails);
  const navigate = useNavigate();

  const handleSave = () => {
    const existing = JSON.parse(
      localStorage.getItem(localstorageKeys.RESUMES) || "[]",
    );
    localStorage.setItem(
      localstorageKeys.RESUMES,
      JSON.stringify([...existing, resumeDetails]),
    );
    localStorage.removeItem(localstorageKeys.RESUMETEMP);
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        {resumeDetails.personalDetails.name ? (
          <div className="w-full text-4xl text-center">
            {resumeDetails.personalDetails.name}
          </div>
        ) : null}
        {resumeDetails.personalDetails.title ? (
          <div className="w-full text-2xl text-center">
            {resumeDetails.personalDetails.title}
          </div>
        ) : null}
        {resumeDetails.personalDetails.email ? (
          <Row>
            <Mail />
            {resumeDetails.personalDetails.email}
          </Row>
        ) : null}
        {resumeDetails.personalDetails.location ? (
          <Row>
            <MapPin />
            {resumeDetails.personalDetails.location}
          </Row>
        ) : null}
        {resumeDetails.personalDetails.phone ? (
          <Row>
            <Phone />
            {resumeDetails.personalDetails.phone}
          </Row>
        ) : null}
        {resumeDetails.personalDetails.linkedIn ? (
          <Row>
            <Linkedin />
            {resumeDetails.personalDetails.linkedIn}
          </Row>
        ) : null}
        {resumeDetails.personalDetails.github ? (
          <Row>
            <GitHub />
            {resumeDetails.personalDetails.github}
          </Row>
        ) : null}
      </div>
      {resumeDetails.workDetails.length ? (
        <div className="flex flex-col gap-2 mt-10 mb-5">
          <p className="text-3xl">Work Experience</p>
          {resumeDetails.workDetails.map((experience, i) => (
            <ExperienceDetails experience={experience} key={i} />
          ))}
        </div>
      ) : null}
      {resumeDetails.educationDetails.length ? (
        <div className="flex flex-col gap-2 mt-10 mb-5">
          <p className="text-3xl">Education Details</p>
          {resumeDetails.educationDetails.map((experience, i) => (
            <ExperienceDetails experience={experience} key={i} />
          ))}
        </div>
      ) : null}
      {resumeDetails.skills.length ? (
        <div className="flex flex-col gap-2 mt-10 mb-5">
          <p className="text-3xl">Skills</p>
          <SkillsList />
        </div>
      ) : null}
      {resumeDetails.personalDetails.name ? (
        <button
          className="bg-green-400 hover:bg-green-500 hover:outline-none w-fit"
          onClick={handleSave}
        >
          SAVE
        </button>
      ) : null}
    </div>
  );
};

export default Preview;
