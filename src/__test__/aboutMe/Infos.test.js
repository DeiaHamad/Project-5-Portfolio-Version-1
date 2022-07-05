import { render, screen } from "@testing-library/react";
import Infos from "../../components/aboutMe/infos/Infos";

function createElements({ infosDiv, p1, p2, infoBlocks, header }) {
  const elementsArray = [];

  if (infosDiv) {
    const infosElement = screen.getByTestId("infos");
    elementsArray.push(infosElement);
  }
  if (p1) {
    const p1Element = screen.getByText(
      /i started to learn coding in 2021 and found out it's my true passion, it's where i found myself the most./i
    );
    elementsArray.push(p1Element);
  }
  if (p2) {
    const p2Element = screen.getByText(
      /i like to build websites i enjoy the challenges that come with it\. my goals are to focus on typography, content ,and conveying the message that you want to send\./i
    );
    elementsArray.push(p2Element);
  }
  if (infoBlocks) {
    const infoBlockElements = screen.getAllByRole("article");
    elementsArray.push(infoBlockElements);
  }
  if (header) {
    const headerElement = screen.getByRole("heading", { name: header });
    elementsArray.push(headerElement);
  }

  return elementsArray;
}

describe("Infos", () => {
  beforeEach(() => {
    render(<Infos />);
  });

  test("should render the Infos", () => {
    const [infos] = createElements({ infosDiv: true });
    expect(infos).toBeInTheDocument();
  });

  describe("Left Info", () => {
    test("should render the first & second paragraph", () => {
      const [p1, p2] = createElements({ p1: true, p2: true });
      expect(p1).toBeInTheDocument();
      expect(p2).toBeInTheDocument();
    });
  });

  describe("Right Info", () => {
    test("should render 3 info blocks", () => {
      const [infoBlocks] = createElements({ infoBlocks: true });
      expect(infoBlocks.length).toBe(3);
    });

    test("should render 3 headers", () => {
      const [expHeader] = createElements({ header: "Experience" });
      const [clientsHeader] = createElements({ header: "Clients" });
      const [projectHeader] = createElements({ header: "Projects" });
      expect(expHeader).toBeInTheDocument();
      expect(clientsHeader).toBeInTheDocument();
      expect(projectHeader).toBeInTheDocument();
    });
  });
});
