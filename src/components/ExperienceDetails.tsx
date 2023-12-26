import styled from "styled-components";
import { EducationDetails, WorkDetails } from "../types";

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const ExperienceDetails = ({
  experience,
}: {
  experience: WorkDetails | EducationDetails;
}) => {
  return (
    <div>
      <Row className="justify-between pr-5">
        <span className="font-bold">{experience.organizationName}</span>
        <span className="italic">{experience.location}</span>
      </Row>
      <Row>
        {"position" in experience
          ? experience.position
          : experience.specialization}
      </Row>
      <Row>
        {`${experience.startMonth} ${experience.startYear}`} -{" "}
        {experience.isCurrent
          ? ""
          : `${experience.endMonth} ${experience.endYear}`}
      </Row>
    </div>
  );
};

export default ExperienceDetails;
