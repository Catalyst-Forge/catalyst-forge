import { describe, it, expect } from "vitest";
import { cn } from "../src/lib/utils";

describe("cn (classname utility)", () => {
  it("merges simple class strings", () => {
    expect(cn("text-sm", "font-bold")).toBe("text-sm font-bold");
  });

  it("handles conditional classes", () => {
    const hidden: string | false = false;
    expect(cn("base", hidden, "extra")).toBe("base extra");
  });

  it("handles undefined and null", () => {
    expect(cn("base", undefined, null, "extra")).toBe("base extra");
  });

  it("tailwind-merge resolves conflicts", () => {
    expect(cn("px-4", "px-6")).toBe("px-6");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("returns empty string for no args", () => {
    expect(cn()).toBe("");
  });
});
