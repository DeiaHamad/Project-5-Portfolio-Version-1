import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Form from "../../components/contactMe/rightContact/dependencies/Form";
import { ContactMeContext } from "../../App";

function createElements({ form, name, email, subject, message, submitBtn }) {
  const elementsArray = [];

  if (form) {
    const formElement = screen.getByRole("form", { name: /form/i });
    elementsArray.push(formElement);
  }
  if (name) {
    const nameElement = screen.getByPlaceholderText("Your Name");
    elementsArray.push(nameElement);
  }
  if (email) {
    const emailElement = screen.getByPlaceholderText("Your Email");
    elementsArray.push(emailElement);
  }
  if (subject) {
    const subjectElement = screen.getByPlaceholderText("Subject");
    elementsArray.push(subjectElement);
  }
  if (message) {
    const messageElement = screen.getByPlaceholderText("Your Message");
    elementsArray.push(messageElement);
  }
  if (submitBtn) {
    const submitBtnElement = screen.getByRole("button");
    elementsArray.push(submitBtnElement);
  }

  return elementsArray;
}

describe("Form", () => {
  beforeEach(() => {
    const contextValue = { formInputs: () => {}, setFormInputs: () => {} };
    render(
      <ContactMeContext.Provider value={contextValue}>
        <Form />
      </ContactMeContext.Provider>
    );
  });

  test("should render the form", () => {
    const [form] = createElements({ form: true });
    expect(form).toBeInTheDocument();
  });

  test("should render all the form inputs/textarea and the submitBtn", () => {
    const [name, email, subject, message, submitBtn] = createElements({
      name: true,
      email: true,
      subject: true,
      message: true,
      submitBtn: true,
    });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(subject).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  describe("inputs/textarea changes", () => {
    test("initially all the inputs and the textarea should be empty", () => {
      const [name, email, subject, message] = createElements({
        name: true,
        email: true,
        subject: true,
        message: true,
      });
      expect(name.value).toBe("");
      expect(email.value).toBe("");
      expect(subject.value).toBe("");
      expect(message.value).toBe("");
    });
    test("should be apple to type into the inputs and the textarea and it's value should change accordingly", () => {
      const [name, email, subject, message] = createElements({
        name: true,
        email: true,
        subject: true,
        message: true,
      });
      user.type(name, "Deia");
      user.type(email, "Deia@gmail.com");
      user.type(subject, "Test");
      user.type(message, "Testing the form");
      expect(name.value).toBe("Deia");
      expect(email.value).toBe("Deia@gmail.com");
      expect(subject.value).toBe("Test");
      expect(message.value).toBe("Testing the form");
    });
  });
});
