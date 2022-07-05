import { render, screen, within } from "@testing-library/react";
import LeftContact from "../../components/contactMe/leftContact/LeftContact";
import myData from "../../data/myData";

const { contacts } = myData;

function createElements({ leftContactDiv, contactBlocks, mediaButtons }) {
  const elementsArray = [];

  if (leftContactDiv) {
    const leftContactDivElement = screen.getByTestId("left-contact");
    elementsArray.push(leftContactDivElement);
  }
  if (contactBlocks) {
    const contactBlockElements = screen.getAllByRole("article");
    elementsArray.push(contactBlockElements);
  }
  if (mediaButtons) {
    const mediaButtonElements = screen.getAllByRole("button");
    elementsArray.push(mediaButtonElements);
  }

  return elementsArray;
}

describe("LeftContact", () => {
  beforeEach(() => {
    render(<LeftContact />);
  });

  test("should render the leftContactDiv", () => {
    const [leftContactDiv] = createElements({ leftContactDiv: true });
    expect(leftContactDiv).toBeInTheDocument();
  });

  test("should render contacts.details.length contacts", () => {
    const [contactBlocks] = createElements({ contactBlocks: true });
    expect(contactBlocks.length).toBe(contacts.details.length);
  });

  test("should render contacts.socialMedia.length buttons, with the first button href = contacts.socialMedia[1].link  and the 2nd button href = contacts.socialMedia[2].link", () => {
    const [mediaButtons] = createElements({ mediaButtons: true });
    const anchorTagElement1 = within(mediaButtons[0]).getByRole("link");
    const anchorTagElement2 = within(mediaButtons[1]).getByRole("link");

    expect(mediaButtons.length).toBe(contacts.socialMedia.length);
    expect(anchorTagElement1).toBeInTheDocument();
    expect(anchorTagElement1).toHaveAttribute(
      "href",
      contacts.socialMedia[0].link
    );
    expect(anchorTagElement2).toBeInTheDocument();
    expect(anchorTagElement2).toHaveAttribute(
      "href",
      contacts.socialMedia[1].link
    );
  });

  describe("first contact", () => {
    test("should render title = Location:, text = Abu Dhabi - United Arab Emirates", () => {
      const [contactBlocks] = createElements({ contactBlocks: true });
      const titleElement = within(contactBlocks[0]).getByText("Location:");
      const textElement = within(contactBlocks[0]).getByText(
        "Abu Dhabi - United Arab Emirates"
      );
      expect(titleElement).toBeInTheDocument();
      expect(textElement).toBeInTheDocument();
    });
  });

  describe("second contact", () => {
    test("should render title = Education:, text = Institute of Aviation Engineering & Technology - Egypt", () => {
      const [contactBlocks] = createElements({ contactBlocks: true });
      const titleElement = within(contactBlocks[1]).getByText("Education:");
      const textElement = within(contactBlocks[1]).getByText(
        "Institute of Aviation Engineering & Technology - Egypt"
      );
      expect(titleElement).toBeInTheDocument();
      expect(textElement).toBeInTheDocument();
    });
  });

  describe("third contact", () => {
    test("should render title = Language:, text = English, Arabic", () => {
      const [contactBlocks] = createElements({ contactBlocks: true });
      const titleElement = within(contactBlocks[2]).getByText("Language:");
      const textElement = within(contactBlocks[2]).getByText("English, Arabic");
      expect(titleElement).toBeInTheDocument();
      expect(textElement).toBeInTheDocument();
    });
  });

  describe("fourth contact", () => {
    test("should render title = Email:, text = EngDeiaaEldin@gmail.com", () => {
      const [contactBlocks] = createElements({ contactBlocks: true });
      const titleElement = within(contactBlocks[3]).getByText("Email:");
      const textElement = within(contactBlocks[3]).getByText(
        "EngDeiaaEldin@gmail.com"
      );
      expect(titleElement).toBeInTheDocument();
      expect(textElement).toBeInTheDocument();
    });
  });

  describe("fifth contact", () => {
    test("should render title = Phone Number:, text = +97150 789 0072", () => {
      const [contactBlocks] = createElements({ contactBlocks: true });
      const titleElement = within(contactBlocks[4]).getByText("Phone Number:");
      const textElement = within(contactBlocks[4]).getByText("+97150 789 0072");
      expect(titleElement).toBeInTheDocument();
      expect(textElement).toBeInTheDocument();
    });
  });
});
