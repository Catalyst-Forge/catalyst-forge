import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../src/button";

describe("Button", () => {
  it("renders with children", () => {
    render(React.createElement(Button, null, "Click me"));
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("applies default variant classes", () => {
    const { container } = render(
      React.createElement(Button, null, "Default")
    );
    const button = container.querySelector("button");
    expect(button).toBeDefined();
    expect(button?.className).toContain("inline-flex");
  });

  it("accepts custom className", () => {
    const { container } = render(
      React.createElement(Button, { className: "my-custom" }, "Styled")
    );
    const button = container.querySelector("button");
    expect(button?.className).toContain("my-custom");
  });

  it("renders as a different element with asChild pattern", () => {
    const { container } = render(
      React.createElement(
        Button,
        { asChild: true },
        React.createElement("a", { href: "/test" }, "Link")
      )
    );
    const link = container.querySelector("a");
    expect(link).toBeDefined();
    expect(link?.getAttribute("href")).toBe("/test");
  });
});
