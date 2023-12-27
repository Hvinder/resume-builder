import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { ArrowDown, ArrowRight } from "react-feather";

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
  const items = [
    {
      heading: "Personal details",
      item: <PersonalDetails />,
    },
    {
      heading: "Work experience",
      item: <WorkExperience />,
    },
    {
      heading: "Education details",
      item: <EducationDetailsContainer />,
    },
    {
      heading: "Skills",
      item: <Skills />,
    },
  ];
  return (
    <Container direction="row" alignItems="flex-start">
      <Container width="60%">
        <Accordion className="w-full" allowMultipleExpanded allowZeroExpanded>
          {items.map((item, i) => (
            <Row className="p-5 shadow-md" key={i}>
              <AccordionItem className="w-full" uuid={i}>
                <AccordionItemHeading>
                  <StyledAccordionItemButton>
                    <span className="flex w-full justify-between items-center">
                      {item.heading}
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded ? <ArrowDown /> : <ArrowRight />
                        }
                      </AccordionItemState>
                    </span>
                  </StyledAccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{item.item}</AccordionItemPanel>
              </AccordionItem>
            </Row>
          ))}
        </Accordion>
      </Container>
      <Container width="40%">
        <Preview />
      </Container>
    </Container>
  );
};

export default BuildResume;
