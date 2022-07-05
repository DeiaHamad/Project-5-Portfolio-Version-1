import { render, screen } from "@testing-library/react";
import LeftHome from "../../components/home/leftHome/LeftHome";

function createElements({ leftHomeArticle, deiaImg, footer, year }) {
  const elementsArray = [];

  if (leftHomeArticle) {
    const leftHomeArticleElement = screen.getByRole("article", {
      name: "left-home",
    });
    elementsArray.push(leftHomeArticleElement);
  }
  if (deiaImg) {
    const deiaImgElement = screen.getByAltText(/deia/i);
    elementsArray.push(deiaImgElement);
  }
  if (footer) {
    const footerElement = screen.getByRole("contentinfo");
    elementsArray.push(footerElement);
  }
  if (year) {
    const yearElement = screen.getByText(year);
    elementsArray.push(yearElement);
  }

  return elementsArray;
}

describe("LeftHome", () => {
  beforeEach(() => {
    render(<LeftHome />);
  });

  test("should render the LeftHome", () => {
    const [leftHome] = createElements({ leftHomeArticle: true });
    expect(leftHome).toBeInTheDocument();
  });
  test("should render the Deia Img", () => {
    const [deiaImg] = createElements({ deiaImg: true });
    expect(deiaImg).toBeInTheDocument();
  });
  test("should render the Footer", () => {
    const [footer] = createElements({ footer: true });
    expect(footer).toBeInTheDocument();
  });
  test("should render the current year", () => {
    const date = new Date();
    const currentYear = `© ${date.getFullYear()} Deia-Eldin`;
    const [year] = createElements({ year: currentYear });
    expect(year).toBeInTheDocument();
  });
});
