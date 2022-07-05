import { render, screen } from "@testing-library/react";
import Controls from "../../components/controls/Controls";
import { AppContext } from "../../App";

function createElements({ controlsDiv, controlBtns }) {
  const elementsArray = [];

  if (controlsDiv) {
    const controlsDivElement = screen.getByTestId("controls");
    elementsArray.push(controlsDivElement);
  }
  if (controlBtns) {
    const controlBtnElements = screen.getAllByRole("button");
    elementsArray.push(controlBtnElements);
  }

  return elementsArray;
}

describe("Controls", () => {
  beforeEach(() => {
    const contextValue = { web: () => {}, setWeb: () => {} };
    render(
      <AppContext.Provider value={contextValue}>
        <Controls />
      </AppContext.Provider>
    );
  });

  test("should render the controlsDiv", () => {
    const [controlsDiv] = createElements({ controlsDiv: true });
    expect(controlsDiv).toBeInTheDocument();
  });

  test("should render 4 buttons", () => {
    const [controlBtns] = createElements({ controlBtns: true });
    expect(controlBtns.length).toBe(4);
  });
});
