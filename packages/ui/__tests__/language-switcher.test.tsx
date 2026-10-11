import { describe, it, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import { LanguageSwitcher } from "../src/language-switcher";

const locales = [
  {
    ariaLabel: "ID - Bahasa Indonesia",
    code: "id",
    href: "/",
    label: "ID",
    lang: "id",
  },
  { code: "en", href: "/en", label: "EN" },
];

describe("LanguageSwitcher", () => {
  it("is a labelled group and marks the current language", () => {
    const { container } = render(
      React.createElement(LanguageSwitcher, {
        ariaLabel: "Bahasa",
        currentLocale: "id",
        locales,
      }),
    );
    const group = container.querySelector("[role=group]");
    const [id, en] = Array.from(container.querySelectorAll("a"));

    expect(group?.getAttribute("aria-label")).toBe("Bahasa");
    expect(id?.getAttribute("aria-current")).toBe("page");
    expect(en?.getAttribute("aria-current")).toBeNull();
  });

  it("passes a spoken name, lang and hreflang through when given", () => {
    const { container } = render(
      React.createElement(LanguageSwitcher, {
        ariaLabel: "Bahasa",
        currentLocale: "en",
        locales,
      }),
    );
    const [id, en] = Array.from(container.querySelectorAll("a"));

    expect(id?.getAttribute("aria-label")).toBe("ID - Bahasa Indonesia");
    expect(id?.getAttribute("lang")).toBe("id");
    expect(id?.getAttribute("hreflang")).toBe("id");
    // The accessible name must still contain the visible label.
    expect(id?.getAttribute("aria-label")).toContain(id?.textContent ?? "");
    // Without the optional props nothing changes for existing callers.
    expect(en?.getAttribute("aria-label")).toBeNull();
    expect(en?.getAttribute("lang")).toBeNull();
  });
});
