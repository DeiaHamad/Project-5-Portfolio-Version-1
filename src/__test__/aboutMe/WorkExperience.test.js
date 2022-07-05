import { render, screen, within } from "@testing-library/react";
import WorkExperience from "../../components/aboutMe/workExperience/WorkExperience";
import myData from "../../data/myData";

const { jobs } = myData;

function createElements({
  workExperienceDiv,
  workExperienceHeader,
  jobBlocks,
  jobIcons,
}) {
  const elementsArray = [];

  if (workExperienceDiv) {
    const workExperienceElement = screen.getByTestId("work-experience");
    elementsArray.push(workExperienceElement);
  }
  if (workExperienceHeader) {
    const skillHeaderElement = screen.getByRole("heading", {
      name: /work experience/i,
    });
    elementsArray.push(skillHeaderElement);
  }
  if (jobBlocks) {
    const jobBlockElements = screen.getAllByRole("article");
    elementsArray.push(jobBlockElements);
  }
  if (jobIcons) {
    const skillIconElements = screen.getAllByTestId(/job-icon/i);
    elementsArray.push(skillIconElements);
  }

  return elementsArray;
}

describe("WorkExperience", () => {
  beforeEach(() => {
    render(<WorkExperience />);
  });

  test("should render the WorkExperience", () => {
    const [workExperience] = createElements({ workExperienceDiv: true });
    expect(workExperience).toBeInTheDocument();
  });

  test("should render the WorkExperience Header", () => {
    const [workExperienceHeader] = createElements({
      workExperienceHeader: true,
    });
    expect(workExperienceHeader).toBeInTheDocument();
  });

  test("should render the jobs.length jobs", () => {
    const [jobBlocks] = createElements({ jobBlocks: true });
    expect(jobBlocks.length).toBe(jobs.length);
  });

  test("should render jobs.length jobIcons", () => {
    const [jobIcons] = createElements({ jobIcons: true });
    expect(jobIcons.length).toBe(jobs.length);
  });

  test("should render the first job with the working period = Oct / 2012 - Dec / 2012, country = Egypt, flag = egy flag, jobTitle = Sales, company = Mg Group, and description = Tele-Sales & Outdoor Sales.", () => {
    const [jobBlocks] = createElements({ jobBlocks: true });
    const workingPeriodElement = within(jobBlocks[0]).getByText(
      "Oct / 2012 - Dec / 2012"
    );
    const countryElement = within(jobBlocks[0]).getByText(/egypt/i);
    const egyFlagElement = within(jobBlocks[0]).getByAltText(/egypt flag/i);
    const jobTitleElement = within(jobBlocks[0]).getByText("Sales");
    const companyElement = within(jobBlocks[0]).getByText(/mg group/i);
    const descriptionElement = within(jobBlocks[0]).getByText(
      /Tele-Sales & Outdoor Sales./i
    );

    expect(workingPeriodElement).toBeInTheDocument();
    expect(countryElement).toBeInTheDocument();
    expect(egyFlagElement).toBeInTheDocument();
    expect(jobTitleElement).toBeInTheDocument();
    expect(companyElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test("should render the sixth job with the working period = 2019 - now, country = UAE, flag = UAE flag, jobTitle = Designer, company = Nazih Blacksmith & Welding Workshop, and description = Provide an Autocad designs (2D & 3D) and manging the work regarding the quality and time.", () => {
    const [jobBlocks] = createElements({ jobBlocks: true });
    const workingPeriodElement = within(jobBlocks[5]).getByText(/2019 - now/i);
    const countryElement = within(jobBlocks[5]).getByText(/uae/i);
    const egyFlagElement = within(jobBlocks[5]).getByAltText(/uae flag/i);
    const jobTitleElement = within(jobBlocks[5]).getByText("Designer");
    const companyElement = within(jobBlocks[5]).getByText(
      /Nazih Blacksmith & Welding Workshop/i
    );
    const descriptionElement = within(jobBlocks[5]).getByText(
      "Provide an Autocad designs (2D & 3D) and manging the work regarding the quality and time."
    );

    expect(workingPeriodElement).toBeInTheDocument();
    expect(countryElement).toBeInTheDocument();
    expect(egyFlagElement).toBeInTheDocument();
    expect(jobTitleElement).toBeInTheDocument();
    expect(companyElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
