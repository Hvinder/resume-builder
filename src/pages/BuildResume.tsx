import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import PersonalDetails from "../components/PersonalDetails";
import Preview from "../components/Preview";
import WorkExperience from "../components/WorkExperience";
import EducationDetailsContainer from "../components/EducationDetails";
import Skills from "../components/Skills";

import "react-accessible-accordion/dist/fancy-example.css";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Container = styled(Row)<{
  width?: string;
  direction?: string;
  alignItems?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.width || "100%"};
  gap: 40px;
`;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  background: none;
`;

const BuildResume = () => {
  return (
    <Container direction="row" alignItems="flex-start">
      <Container width="60%">
        <Accordion className="w-full" allowMultipleExpanded allowZeroExpanded>
          <Row className="p-5 shadow-md">
            <AccordionItem className="w-full">
              <AccordionItemHeading>
                <StyledAccordionItemButton>
                  Personal details
                </StyledAccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <PersonalDetails />
              </AccordionItemPanel>
            </AccordionItem>
          </Row>
          <Row className="p-5 shadow-md">
            <AccordionItem className="w-full">
              <AccordionItemHeading>
                <StyledAccordionItemButton>
                  Work experience
                </StyledAccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <WorkExperience />
              </AccordionItemPanel>
            </AccordionItem>
          </Row>
          <Row className="p-5 shadow-md">
            <AccordionItem className="w-full">
              <AccordionItemHeading>
                <StyledAccordionItemButton>
                  Education details
                </StyledAccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <EducationDetailsContainer />
              </AccordionItemPanel>
            </AccordionItem>
          </Row>
          <Row className="p-5 shadow-md">
            <AccordionItem className="w-full">
              <AccordionItemHeading>
                <StyledAccordionItemButton>Skills</StyledAccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Skills />
              </AccordionItemPanel>
            </AccordionItem>
          </Row>
        </Accordion>
      </Container>
      <Container width="40%">
        <Preview />
      </Container>
    </Container>
  );
};

export default BuildResume;
