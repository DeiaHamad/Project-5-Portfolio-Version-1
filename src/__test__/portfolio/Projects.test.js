import { render, screen, within } from "@testing-library/react";
import Projects from "../../components/portfolio/dependencies/Projects";
import myData from "../../data/myData";

const { projects } = myData;

function createElements({
  projectsDiv,
  projectArticles,
  topSectionDivs,
  projectImg,
  middleSectionDivs,
  bottomSectionDivs,
}) {
  const elementsArray = [];

  if (projectsDiv) {
    const projectsDivElement = screen.getByTestId(/projects/i);
    elementsArray.push(projectsDivElement);
  }
  if (projectArticles) {
    const projectArticleElements = screen.getAllByRole("article");
    elementsArray.push(projectArticleElements);
  }
  if (topSectionDivs) {
    const topSectionDivElements = screen.getAllByTestId("top-section");
    elementsArray.push(topSectionDivElements);
  }
  if (projectImg) {
    const projectImgElement = screen.getByAltText(projectImg);
    elementsArray.push(projectImgElement);
  }
  if (middleSectionDivs) {
    const middleSectionDivElements = screen.getAllByTestId("middle-section");
    elementsArray.push(middleSectionDivElements);
  }
  if (bottomSectionDivs) {
    const bottomSectionDivsElements = screen.getAllByTestId("bottom-section");
    elementsArray.push(bottomSectionDivsElements);
  }

  return elementsArray;
}

describe("Projects", () => {
  beforeEach(() => {
    render(<Projects />);
  });

  test("should render the Projects", () => {
    const [projectsDiv] = createElements({ projectsDiv: true });
    expect(projectsDiv).toBeInTheDocument();
  });

  describe("Project", () => {
    test("should render projects.length projects", () => {
      const [projectArticles] = createElements({ projectArticles: true });
      expect(projectArticles.length).toBe(projects.array.length);
    });

    describe("TopSection", () => {
      test("should render the topSectionDivs with a length = projects.length", () => {
        const [topSectionDivs] = createElements({ topSectionDivs: true });
        expect(topSectionDivs.length).toBe(projects.array.length);
      });

      describe("first project", () => {
        test("should render the first project img", () => {
          const [projectImg] = createElements({ projectImg: "Blackjack" });
          expect(projectImg).toBeInTheDocument();
          expect(projectImg).toHaveAttribute("src", "/assets/projects/p1.png");
        });
      });

      describe("second project", () => {
        test("should render the second project img", () => {
          const [projectImg] = createElements({
            projectImg: "Chrome Extension",
          });
          expect(projectImg).toBeInTheDocument();
          expect(projectImg).toHaveAttribute("src", "/assets/projects/p2.png");
        });
      });
    });

    describe("MiddleSection", () => {
      test("should render the middleSectionDivs with a length = projects.length", () => {
        const [middleSectionDivs] = createElements({ middleSectionDivs: true });
        expect(middleSectionDivs.length).toBe(projects.array.length);
      });

      describe("firt project", () => {
        test("should render a Blackjack as the first project header", () => {
          const [middleSectionDivs] = createElements({
            middleSectionDivs: true,
          });
          const projectTitle = within(middleSectionDivs[0]).getByRole(
            "heading",
            {
              name: "Blackjack",
            }
          );
          expect(projectTitle).toBeInTheDocument();
        });
        test("should render 2 buttons (liveDemo and download) for the first project", () => {
          const [middleSectionDivs] = createElements({
            middleSectionDivs: true,
          });
          const buttonElements = within(middleSectionDivs[0]).getAllByRole(
            "button"
          );
          expect(buttonElements.length).toBe(2);
        });
        test("should render the correct table date", () => {
          const [middleSectionDivs] = createElements({
            middleSectionDivs: true,
          });
          const lang1 = within(middleSectionDivs[0]).getByText("Html");
          const codeLines1 = within(middleSectionDivs[0]).getByText("92");
          const percentage1 = within(middleSectionDivs[0]).getByText("10.7 %");
          const lang2 = within(middleSectionDivs[0]).getByText("Css");
          const codeLines2 = within(middleSectionDivs[0]).getByText("261");
          const percentage2 = within(middleSectionDivs[0]).getByText("30.3 %");
          const lang3 = within(middleSectionDivs[0]).getByText("Javascript");
          const codeLines3 = within(middleSectionDivs[0]).getByText("507");
          const percentage3 = within(middleSectionDivs[0]).getByText("59 %");

          expect(lang1).toBeInTheDocument();
          expect(codeLines1).toBeInTheDocument();
          expect(percentage1).toBeInTheDocument();
          expect(lang2).toBeInTheDocument();
          expect(codeLines2).toBeInTheDocument();
          expect(percentage2).toBeInTheDocument();
          expect(lang3).toBeInTheDocument();
          expect(codeLines3).toBeInTheDocument();
          expect(percentage3).toBeInTheDocument();
        });
      });

      describe("second project", () => {
        test("should render a Chrome Extension as the second project header", () => {
          const [middleSectionDivs] = createElements({
            middleSectionDivs: true,
          });
          const projectTitle = within(middleSectionDivs[1]).getByRole(
            "heading",
            {
              name: "Chrome Extension",
            }
          );
          expect(projectTitle).toBeInTheDocument();
        });
        test("should render only one button (download) for the second project", () => {
          const [middleSectionDivs] = createElements({
            middleSectionDivs: true,
          });
          const buttonElement = within(middleSectionDivs[1]).getByRole(
            "button"
          );
          expect(buttonElement).toBeInTheDocument();
        });
        test("should render the correct table date", () => {
          const [middleSectionDivs] = createElements({
            middleSectionDivs: true,
          });
          const lang1 = within(middleSectionDivs[1]).getByText("Html");
          const codeLines1 = within(middleSectionDivs[1]).getByText("21");
          const percentage1 = within(middleSectionDivs[1]).getByText("12.4 %");
          const lang2 = within(middleSectionDivs[1]).getByText("Css");
          const codeLines2 = within(middleSectionDivs[1]).getByText("68");
          const percentage2 = within(middleSectionDivs[1]).getByText("40.2 %");
          const lang3 = within(middleSectionDivs[1]).getByText("Javascript");
          const codeLines3 = within(middleSectionDivs[1]).getByText("80");
          const percentage3 = within(middleSectionDivs[1]).getByText("47.3 %");

          expect(lang1).toBeInTheDocument();
          expect(codeLines1).toBeInTheDocument();
          expect(percentage1).toBeInTheDocument();
          expect(lang2).toBeInTheDocument();
          expect(codeLines2).toBeInTheDocument();
          expect(percentage2).toBeInTheDocument();
          expect(lang3).toBeInTheDocument();
          expect(codeLines3).toBeInTheDocument();
          expect(percentage3).toBeInTheDocument();
        });
      });
    });

    describe("BottomSection", () => {
      test("should render the bottomSectionDivs with a length = projects.length", () => {
        const [bottomSectionDivs] = createElements({ bottomSectionDivs: true });
        expect(bottomSectionDivs.length).toBe(projects.array.length);
      });

      describe("first project", () => {
        test("should render the correct dates", () => {
          const [bottomSectionDivs] = createElements({
            bottomSectionDivs: true,
          });
          const startingDate1 = within(bottomSectionDivs[0]).getByText(
            "Mar 27, 2022"
          );
          const finishingDate1 = within(bottomSectionDivs[0]).getByText(
            "Apr 2, 2022"
          );
          const duration1 = within(bottomSectionDivs[0]).getByText("6 Days");

          expect(startingDate1).toBeInTheDocument();
          expect(finishingDate1).toBeInTheDocument();
          expect(duration1).toBeInTheDocument();
        });
      });

      describe("second project", () => {
        test("should render the correct dates", () => {
          const [bottomSectionDivs] = createElements({
            bottomSectionDivs: true,
          });
          const startingDate1 = within(bottomSectionDivs[1]).getByText(
            "Apr 2, 2022"
          );
          const finishingDate1 = within(bottomSectionDivs[1]).getByText(
            "Apr 3, 2022"
          );
          const duration1 = within(bottomSectionDivs[1]).getByText("1 Day");

          expect(startingDate1).toBeInTheDocument();
          expect(finishingDate1).toBeInTheDocument();
          expect(duration1).toBeInTheDocument();
        });
      });
    });
  });
});
