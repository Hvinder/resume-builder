import styled from "styled-components";
import PersonalDetails from "../components/PersonalDetails";
import Preview from "../components/Preview";
import WorkExperience from "../components/WorkExperience";
import EducationDetailsContainer from "../components/EducationDetails";
import Skills from "../components/Skills";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Container = styled(Row)<{ width?: string; direction?: string, alignItems?: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${props => props.alignItems || 'center'};
  width: ${(props) => props.width || "100%"};
  gap: 40px;
`;

const BuildResume = () => {
  return (
    <Container direction="row" alignItems="flex-start">
      <Container width="60%">
        <Row className="p-5 shadow-md">
          <p>Personal details</p>
          <PersonalDetails />
        </Row>
        <Row>
          <p>Work experience</p>
          <WorkExperience />
        </Row>
        <Row>
          <p>Education details</p>
          <EducationDetailsContainer />
        </Row>
        <Row>
          <p>Skills</p>
          <Skills />
        </Row>
      </Container>
      <Container width="40%">
        <Preview />
      </Container>
    </Container>
  );
};

export default BuildResume;
