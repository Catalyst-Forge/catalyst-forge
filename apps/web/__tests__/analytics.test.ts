import { act, createElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

const CONSENT_KEY = "cf_cookie_consent";

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT =
  true;

describe("Analytics consent forwarding", () => {
  const gtag = vi.fn();
  let root: Root | undefined;

  async function mount(gaId: string) {
    vi.resetModules();
    vi.stubEnv("NEXT_PUBLIC_GA_ID", gaId);
    const { Analytics } = await import("@/components/analytics");
    root = createRoot(document.createElement("div"));
    await act(async () => root?.render(createElement(Analytics)));
  }

  function storeChoice(key: string, value: string) {
    window.dispatchEvent(new StorageEvent("storage", { key, newValue: value }));
  }

  beforeEach(() => {
    gtag.mockClear();
    (window as GtagWindow).gtag = gtag;
  });

  afterEach(async () => {
    await act(async () => root?.unmount());
    root = undefined;
    delete (window as GtagWindow).gtag;
    vi.unstubAllEnvs();
  });

  it("grants analytics storage when the banner stores 'all'", async () => {
    await mount("G-TEST1234");
    storeChoice(CONSENT_KEY, "all");

    expect(gtag).toHaveBeenCalledTimes(1);
    expect(gtag).toHaveBeenCalledWith("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  });

  it("keeps analytics storage denied for 'essential'", async () => {
    await mount("G-TEST1234");
    storeChoice(CONSENT_KEY, "essential");

    expect(gtag).toHaveBeenCalledTimes(1);
    expect(gtag).toHaveBeenCalledWith(
      "consent",
      "update",
      expect.objectContaining({ analytics_storage: "denied" }),
    );
  });

  it("sends nothing on mount; a stored choice is applied by the head snippet", async () => {
    await mount("G-TEST1234");

    expect(gtag).not.toHaveBeenCalled();
  });

  it("ignores unrelated storage keys", async () => {
    await mount("G-TEST1234");
    storeChoice("catalystforge_utm", "all");

    expect(gtag).not.toHaveBeenCalled();
  });

  it("does nothing when no GA ID is configured", async () => {
    await mount("");
    storeChoice(CONSENT_KEY, "all");

    expect(gtag).not.toHaveBeenCalled();
  });
});
