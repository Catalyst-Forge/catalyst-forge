import { describe, it, expect } from "vitest";
import {
  DEFAULT_LOCALE,
  getMessages,
  isLocale,
  LOCALES,
} from "@/lib/i18n";

describe("i18n", () => {
  it("has id and en as available locales", () => {
    expect(LOCALES).toContain("id");
    expect(LOCALES).toContain("en");
  });

  it("default locale is id", () => {
    expect(DEFAULT_LOCALE).toBe("id");
  });

  it("isLocale returns true for valid locales", () => {
    expect(isLocale("id")).toBe(true);
    expect(isLocale("en")).toBe(true);
  });

  it("isLocale returns false for invalid locales", () => {
    expect(isLocale("fr")).toBe(false);
    expect(isLocale("")).toBe(false);
  });

  it("getMessages returns messages for id locale", () => {
    const messages = getMessages("id");
    expect(messages).toBeDefined();
    expect(messages.locale).toBe("id");
    expect(messages.metadata).toBeDefined();
    expect(messages.metadata.title).toBeTruthy();
  });

  it("getMessages returns messages for en locale", () => {
    const messages = getMessages("en");
    expect(messages).toBeDefined();
    expect(messages.locale).toBe("en");
    expect(messages.metadata).toBeDefined();
    expect(messages.metadata.title).toBeTruthy();
  });

  it("both locale messages have required sections", () => {
    for (const locale of LOCALES) {
      const messages = getMessages(locale);
      expect(messages.hero).toBeDefined();
      expect(messages.hero.headline).toBeTruthy();
      expect(messages.products).toBeDefined();
      expect(messages.products.items).toBeInstanceOf(Array);
      expect(messages.products.items.length).toBeGreaterThan(0);
      expect(messages.footer).toBeDefined();
      expect(messages.cta).toBeDefined();
    }
  });

  it("each product item has required fields", () => {
    for (const locale of LOCALES) {
      const messages = getMessages(locale);
      for (const item of messages.products.items) {
        expect(item.name).toBeTruthy();
        expect(item.description).toBeTruthy();
        expect(item.href).toBeTruthy();
      }
    }
  });
});
