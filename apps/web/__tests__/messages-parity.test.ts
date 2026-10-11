import { describe, expect, it } from "vitest";
import enMessages from "../messages/en.json";
import idMessages from "../messages/id.json";

/** Every path to a string in the dictionary, e.g. "navbar.skipToContent" or "contactForm.needTypeOptions.0". */
function stringPaths(value: unknown, prefix = ""): string[] {
  if (typeof value === "string") {
    return [prefix];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item, index) =>
      stringPaths(item, prefix ? `${prefix}.${index}` : String(index)),
    );
  }

  if (typeof value === "object" && value !== null) {
    return Object.entries(value).flatMap(([key, item]) =>
      stringPaths(item, prefix ? `${prefix}.${key}` : key),
    );
  }

  return [];
}

function valueAt(source: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (current, key) =>
        typeof current === "object" && current !== null
          ? (current as Record<string, unknown>)[key]
          : undefined,
      source,
    );
}

describe("messages", () => {
  it("id.json and en.json define the same strings", () => {
    const idPaths = stringPaths(idMessages);
    const enPaths = stringPaths(enMessages);

    expect(enPaths.filter((path) => !idPaths.includes(path))).toEqual([]);
    expect(idPaths.filter((path) => !enPaths.includes(path))).toEqual([]);
  });

  // Copy that only screen readers hear is easy to forget when adding a locale.
  it("localizes the accessibility labels", () => {
    const paths = [
      "navbar.skipToContent",
      "navbar.navLabel",
      "navbar.menuLabel",
      "footer.navLabel",
      "language.label",
      "language.idName",
      "language.enName",
      "whatsapp.label",
      "brand.logoAlt",
      "contactForm.requiredNote",
    ];

    for (const path of paths) {
      for (const [locale, messages] of [
        ["id", idMessages],
        ["en", enMessages],
      ] as const) {
        const value = valueAt(messages, path);

        expect(typeof value, `${locale}: ${path}`).toBe("string");
        expect(String(value).trim(), `${locale}: ${path}`).not.toBe("");
      }
    }

    // The two navigation landmarks on a page need different names.
    expect(idMessages.navbar.navLabel).not.toBe(idMessages.footer.navLabel);
    expect(enMessages.navbar.navLabel).not.toBe(enMessages.footer.navLabel);
  });
});
