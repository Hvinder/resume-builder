import styled from "styled-components";
import { WorkDetails } from "../types";

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const ExperienceDetails = ({
  workExperience,
}: {
  workExperience: WorkDetails;
}) => {
  return (
    <div>
      <Row className="justify-between pr-5">
        <span className="font-bold">{workExperience.organizationName}</span>
        <span className="italic">{workExperience.location}</span>
      </Row>
      <Row>{workExperience.position}</Row>
    </div>
  );
};

export default ExperienceDetails;
