import { render, screen, within } from "@testing-library/react";
import Skills from "../../components/aboutMe/skills/Skills";
import myData from "../../data/myData";

const { skills } = myData;

function createElements({ skillsDiv, skillHeader, skillBlocks, skillIcons }) {
  const elementsArray = [];

  if (skillsDiv) {
    const skillsElement = screen.getByTestId("skills");
    elementsArray.push(skillsElement);
  }
  if (skillHeader) {
    const skillHeaderElement = screen.getByRole("heading", {
      name: /skills/i,
    });
    elementsArray.push(skillHeaderElement);
  }
  if (skillBlocks) {
    const skillBlockElements = screen.getAllByRole("article");
    elementsArray.push(skillBlockElements);
  }
  if (skillIcons) {
    const skillIconElements = screen.getAllByTestId(/skill-icon/i);
    elementsArray.push(skillIconElements);
  }

  return elementsArray;
}

describe("Skills", () => {
  beforeEach(() => {
    render(<Skills />);
  });

  test("should render the Skills", () => {
    const [skills] = createElements({ skillsDiv: true });
    expect(skills).toBeInTheDocument();
  });

  test("should render the Skills Header", () => {
    const [skillsHeader] = createElements({ skillHeader: true });
    expect(skillsHeader).toBeInTheDocument();
  });

  test("should render the skills.length skills", () => {
    const [skillBlocks] = createElements({ skillBlocks: true });
    expect(skillBlocks.length).toBe(skills.length);
  });

  test("should render all the skillIcons with a length = skills.length", () => {
    const [skillIcons] = createElements({ skillIcons: true });
    expect(skillIcons.length).toBe(skills.length);
  });

  test("should render the first skill with the skillName = Html 5, skillLvl = Intermediate, skillPercentage = 75", () => {
    const [skillBlocks] = createElements({ skillBlocks: true });
    const skillNameElement = within(skillBlocks[0]).getByRole("heading", {
      name: "Html 5",
    });
    const skillLvlElement = within(skillBlocks[0]).getByText(/Intermediate/i);
    const skillPercentagelElement = within(skillBlocks[0]).getByText(/75 %/i);

    expect(skillNameElement).toBeInTheDocument();
    expect(skillLvlElement).toBeInTheDocument();
    expect(skillPercentagelElement).toBeInTheDocument();
  });

  test("should render the last skill with the skillName = React Testing Library, skillLvl = Beginner, skillPercentage = 65", () => {
    const [skillBlocks] = createElements({ skillBlocks: true });
    const skillNameElement = within(skillBlocks[5]).getByRole("heading", {
      name: "React Testing Library",
    });
    const skillLvlElement = within(skillBlocks[5]).getByText(/Beginner/i);
    const skillPercentagelElement = within(skillBlocks[5]).getByText(/65 %/i);

    expect(skillNameElement).toBeInTheDocument();
    expect(skillLvlElement).toBeInTheDocument();
    expect(skillPercentagelElement).toBeInTheDocument();
  });
});
