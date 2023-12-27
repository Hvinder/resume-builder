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
import useWindowDimensions from "../hooks/useWindowDimensions";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Container = styled(Row)<{
  width?: string;
  direction?: string;
  alignitems?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.alignitems || "center"};
  width: ${(props) => props.width || "100%"};
  gap: 40px;
`;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  background: none;
`;

const BuildResume = () => {
  const { width } = useWindowDimensions();
  const isSmall = width < 800;

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
    <Container direction={isSmall ? "column" : "row"} alignitems="flex-start">
      <Container width={isSmall ? "100%" : '60%'}>
        <p className="text-3xl">Let's get started</p>
        <Accordion className="w-full" allowMultipleExpanded allowZeroExpanded preExpanded={[0]}>
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
      <Container width={isSmall ? "100%" : '40%'}>
        <Preview />
      </Container>
    </Container>
  );
};

export default BuildResume;
