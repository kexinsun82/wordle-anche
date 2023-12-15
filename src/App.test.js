import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component
import Navbar from "./Navbar";
import Keyboard from "./Keyboard";

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

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<Navbar />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".shimmer"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<Navbar />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector("#header-container"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<Keyboard />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".row"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});



