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
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".keyboard-wrapper"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});

test("header title has correct class", () => {
  const { container } = render(<App />);
  const titleElement = container.querySelector(".title");

  expect(titleElement).toBeInTheDocument();
});

// import Navbar from "./Navbar";
// test('Navbar displays correct heading text', () => {
//   const { container } = render(<Navbar />);

  // Check if the heading with the correct text is present
//   const headingElement = screen.getByRole('heading', { name: /Wordle-anche!/i });
//   expect(headingElement).toBeInTheDocument();
// });

