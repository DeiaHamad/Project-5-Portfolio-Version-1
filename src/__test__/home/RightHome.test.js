import { render, screen } from "@testing-library/react";
import RightHome from "../../components/home/rightHome/RightHome";

function createElements({ rightHomeArticle, myName, myJob, myIntro }) {
  const elementsArray = [];

  if (rightHomeArticle) {
    const rightHomeArticleElement = screen.getByRole("article", {
      name: "right-home",
    });
    elementsArray.push(rightHomeArticleElement);
  }
  if (myName) {
    const myNameElement = screen.getByRole("heading", {
      name: "I'm Deia .",
    });
    elementsArray.push(myNameElement);
  }
  if (myJob) {
    const myJobElement = screen.getByRole("heading", {
      name: /a front\-end web developer\./i,
    });
    elementsArray.push(myJobElement);
  }
  if (myIntro) {
    const myIntroElement = screen.getByText(
      /hi, i'm a web developer based in abu dhabi, uae\. i have a passion for web design and love to create for web and mobile devices\./i
    );
    elementsArray.push(myIntroElement);
  }

  return elementsArray;
}
describe("RightHome", () => {
  beforeEach(() => {
    render(<RightHome />);
  });

  test("should render the RightHome", () => {
    const [rightHome] = createElements({ rightHomeArticle: true });
    expect(rightHome).toBeInTheDocument();
  });
  test("should render myName", () => {
    const [myName] = createElements({ myName: true });
    expect(myName).toBeInTheDocument();
  });
  test("should render myJob", () => {
    const [myJob] = createElements({ myJob: true });
    expect(myJob).toBeInTheDocument();
  });
  test("should render myIntro", () => {
    const [myIntro] = createElements({ myIntro: true });
    expect(myIntro).toBeInTheDocument();
  });
});
