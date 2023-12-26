import { Mail, Phone, MapPin, GitHub, Linkedin } from "react-feather";
import styled from "styled-components";

import { selectResumeDetails } from "../redux/features/resumeSlice";
import { useAppSelector } from "../redux/hooks";
import ExperienceDetails from "./ExperienceDetails";

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const Preview = () => {
  const resumeDetails = useAppSelector(selectResumeDetails);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        {resumeDetails.personalDetails.name && (
          <div className="w-full text-4xl text-center">
            {resumeDetails.personalDetails.name}
          </div>
        )}
        {resumeDetails.personalDetails.title && (
          <div className="w-full text-2xl text-center">
            {resumeDetails.personalDetails.title}
          </div>
        )}
        {resumeDetails.personalDetails.email && (
          <Row>
            <Mail />
            {resumeDetails.personalDetails.email}
          </Row>
        )}
        {resumeDetails.personalDetails.location && (
          <Row>
            <MapPin />
            {resumeDetails.personalDetails.location}
          </Row>
        )}
        {resumeDetails.personalDetails.phone && (
          <Row>
            <Phone />
            {resumeDetails.personalDetails.phone}
          </Row>
        )}
        {resumeDetails.personalDetails.linkedIn && (
          <Row>
            <Linkedin />
            {resumeDetails.personalDetails.linkedIn}
          </Row>
        )}
        {resumeDetails.personalDetails.github && (
          <Row>
            <GitHub />
            {resumeDetails.personalDetails.github}
          </Row>
        )}
      </div>
      {resumeDetails.workDetails.length && (
        <div className="flex flex-col gap-2 mt-10 mb-5">
          <p className="text-3xl">Work Experience</p>
          {resumeDetails.workDetails.map((workExperience) => (
            <ExperienceDetails workExperience={workExperience} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Preview;
