import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name", () => {
  const { container } = render(<App />);

  const elementWithClassName = container.querySelector(".board");
  expect(elementWithClassName).toBeInTheDocument();
});

test("main container has correct styles", () => {
  const { container } = render(<App />);
  const mainContainer = container.querySelector("#main");
  
  expect(mainContainer).toHaveStyle("flex-direction: column");
});

test("header title has correct class", () => {
  const { container } = render(<App />);
  const titleElement = container.querySelector(".title");

  expect(titleElement).toBeInTheDocument();
});

test("keyboard has correct styles", () => {
  render(<App />);
  const keyboard = screen.getByClassName("keyboard");  
  expect(keyboard).toHaveStyle("width: 600px; height: 170px;");
});

test("HTML should have the correct lang attribute in the <html> tag", () => {
  const expectedLang = "en";
  const htmlContent = document.documentElement.outerHTML;
  expect(htmlContent).toContain(`html lang="${expectedLang}"`);
});
