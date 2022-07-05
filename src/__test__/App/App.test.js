import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../../App";
import { AppContext } from "../../App";

function createElements({
  controlsDiv,
  controlBtns,
  homeSection,
  aboutMeSection,
  portfolioSection,
  contactMeSection,
  mainTitle,
  subTitle,
}) {
  const elementsArray = [];

  if (controlsDiv) {
    const controlsDivElement = screen.getByTestId("controls");
    elementsArray.push(controlsDivElement);
  }
  if (controlBtns) {
    const controlBtnElements = screen.getAllByRole("button");
    elementsArray.push(controlBtnElements);
  }
  if (homeSection) {
    const homeSectionElement = screen.queryByRole("region", {
      name: /home/i,
    });
    elementsArray.push(homeSectionElement);
  }
  if (aboutMeSection) {
    const aboutMeSectionElement = screen.queryByRole("region", {
      name: /about\-me/i,
    });
    elementsArray.push(aboutMeSectionElement);
  }
  if (portfolioSection) {
    const portfolioSectionElement = screen.queryByRole("region", {
      name: /portfolio/i,
    });
    elementsArray.push(portfolioSectionElement);
  }
  if (contactMeSection) {
    const contactMeSectionElement = screen.queryByRole("region", {
      name: /contact\-me/i,
    });
    elementsArray.push(contactMeSectionElement);
  }
  if (mainTitle) {
    const mainTitleElement = screen.queryByRole("heading", {
      name: mainTitle,
    });
    elementsArray.push(mainTitleElement);
  }
  if (subTitle) {
    const subTitleElement = screen.queryByRole("heading", {
      name: subTitle,
    });
    elementsArray.push(subTitleElement);
  }

  return elementsArray;
}

function createSections() {
  const [homeSection, aboutMeSection, portfolioSection, contactMeSection] =
    createElements({
      homeSection: true,
      aboutMeSection: true,
      portfolioSection: true,
      contactMeSection: true,
    });

  return [homeSection, aboutMeSection, portfolioSection, contactMeSection];
}

describe("App", () => {
  beforeEach(() => {
    const contextValue = { web: () => {}, setWeb: () => {} };
    render(
      <AppContext.Provider value={contextValue}>
        <App />
      </AppContext.Provider>
    );
  });

  describe("controls buttons", () => {
    test("should render the controlsDiv", () => {
      const [controlsDiv] = createElements({ controlsDiv: true });
      expect(controlsDiv).toBeInTheDocument();
    });

    test("should render 4 buttons", () => {
      const [controlBtns] = createElements({ controlBtns: true });
      expect(controlBtns.length).toBe(4);
    });

    test("initially only the homeSection should be visible and should be controlled by the controlBtns", () => {
      const [controlBtns] = createElements({
        controlBtns: true,
      });
      const homeBtn = controlBtns[0];
      const aboutMeBtn = controlBtns[1];
      const portfolioBtn = controlBtns[2];
      const contactMeBtn = controlBtns[3];

      const [homeSec, aboutMeSec, portfolioSec, contactMeSec] =
        createSections();

      // initially rendering
      expect(homeSec).toBeInTheDocument();
      expect(aboutMeSec).not.toBeInTheDocument();
      expect(portfolioSec).not.toBeInTheDocument();
      expect(contactMeSec).not.toBeInTheDocument();

      // clicking on aboutMeBtn
      user.click(aboutMeBtn);
      const [homeSec1, aboutMeSec1, portfolioSec1, contactMeSec1] =
        createSections();
      expect(homeSec1).not.toBeInTheDocument();
      expect(aboutMeSec1).toBeInTheDocument();
      expect(portfolioSec1).not.toBeInTheDocument();
      expect(contactMeSec1).not.toBeInTheDocument();

      // clicking on portfolioBtn
      user.click(portfolioBtn);
      const [homeSec2, aboutMeSec2, portfolioSec2, contactMeSec2] =
        createSections();
      expect(homeSec2).not.toBeInTheDocument();
      expect(aboutMeSec2).not.toBeInTheDocument();
      expect(portfolioSec2).toBeInTheDocument();
      expect(contactMeSec2).not.toBeInTheDocument();

      // clicking on contactMeBtn
      user.click(contactMeBtn);
      const [homeSec3, aboutMeSec3, portfolioSec3, contactMeSec3] =
        createSections();
      expect(homeSec3).not.toBeInTheDocument();
      expect(aboutMeSec3).not.toBeInTheDocument();
      expect(portfolioSec3).not.toBeInTheDocument();
      expect(contactMeSec3).toBeInTheDocument();

      // clicking on homeBtn
      user.click(homeBtn);
      const [homeSec4, aboutMeSec4, portfolioSec4, contactMeSec4] =
        createSections();
      expect(homeSec4).toBeInTheDocument();
      expect(aboutMeSec4).not.toBeInTheDocument();
      expect(portfolioSec4).not.toBeInTheDocument();
      expect(contactMeSec4).not.toBeInTheDocument();
    });
  });

  describe("section titles", () => {
    test("should render the aboutMeSec title", () => {
      const [controlBtns] = createElements({
        controlBtns: true,
      });
      const aboutMeBtn = controlBtns[1];

      user.click(aboutMeBtn);

      const [aboutMeSec] = createElements({ aboutMeSection: true });
      expect(aboutMeSec).toBeInTheDocument();

      const titles = within(aboutMeSec).queryByRole("banner");
      expect(titles).toBeInTheDocument();

      const [mainTitle, subTitle] = createElements({
        mainTitle: "ABOUT ME",
        subTitle: "MY STATS",
      });
      expect(mainTitle).toBeInTheDocument();
      expect(subTitle).toBeInTheDocument();
    });

    test("should render the portfolioSec title", () => {
      const [controlBtns] = createElements({
        controlBtns: true,
      });
      const portfolioBtn = controlBtns[2];
      user.click(portfolioBtn);

      const [portfolioSec] = createElements({ portfolioSection: true });
      expect(portfolioSec).toBeInTheDocument();

      const titles = within(portfolioSec).queryByRole("banner");
      expect(titles).toBeInTheDocument();

      const [mainTitle, subTitle] = createElements({
        mainTitle: "MY PORTFOLIO",
        subTitle: "MY PROJECTS",
      });
      expect(mainTitle).toBeInTheDocument();
      expect(subTitle).toBeInTheDocument();
    });

    test("should render the contactMeSec title", () => {
      const [controlBtns] = createElements({
        controlBtns: true,
      });
      const contactMeBtn = controlBtns[3];
      user.click(contactMeBtn);

      const [contactMeSec] = createElements({ contactMeSection: true });
      expect(contactMeSec).toBeInTheDocument();

      const titles = within(contactMeSec).queryByRole("banner");
      expect(titles).toBeInTheDocument();

      const [mainTitle, subTitle] = createElements({
        mainTitle: "CONTACT ME",
        subTitle: "MY CONTACT",
      });
      expect(mainTitle).toBeInTheDocument();
      expect(subTitle).toBeInTheDocument();
    });
  });
});
