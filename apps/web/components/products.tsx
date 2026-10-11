import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { type Messages } from "@/lib/i18n";
import { cn } from "@repo/ui/lib/utils";
import { BrowserBar } from "./browser-bar";
import { ConversionLink } from "./conversion-link";
import { Reveal } from "./reveal";
import { ScrollParallax } from "./scroll-parallax";

type ProductsProps = {
  messages: Messages;
};

/** The first two products get wide tiles; the rest share the row below. */
const FEATURED_COUNT = 2;

export function Products({ messages }: ProductsProps) {
  const items = messages.products.items;

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="section-container">
        <ScrollParallax
          className="mx-auto max-w-3xl scroll-mt-40 text-center"
          id="products"
          maxOffset={38}
        >
          <Reveal direction="up">
            <p className="text-base font-bold uppercase tracking-[0.16em] text-[#C4430D]">
              {messages.products.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-5xl">
              {messages.products.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#1A1A2E]/75 sm:mt-6 sm:text-lg">
              {messages.products.description}
            </p>
            <p className="mx-auto mt-4 max-w-2xl rounded-lg border border-[#E8531A]/20 bg-[#FFF4EF] px-4 py-3 text-sm font-semibold leading-6 text-[#1B3A5C]">
              {messages.products.demoNote}
            </p>
          </Reveal>
        </ScrollParallax>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {items.map((product, index) => {
            const featured = index < FEATURED_COUNT;
            // With an odd count the last tile would sit alone in the
            // two-column tablet grid, so it spans the row instead.
            const spansTabletRow =
              index === items.length - 1 && items.length % 2 === 1;

            return (
              <Reveal
                className={cn(
                  "h-full",
                  featured ? "lg:col-span-3" : "lg:col-span-2",
                  spansTabletRow && "md:col-span-2 lg:col-span-2",
                )}
                delay={index * 100}
                direction={index % 2 === 0 ? "left" : "right"}
                key={product.name}
              >
                <article className="product-card-motion group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#E8531A]/30 hover:shadow-xl">
                  {/* Same destination as the demo link below, so it stays out of the tab order. */}
                  <ConversionLink
                    className="block border-b border-slate-200 bg-[#F4F5F7]"
                    eventLabel={`demo_${product.name}`}
                    eventName="demo_click"
                    href={product.href}
                    rel="noreferrer"
                    tabIndex={-1}
                    target="_blank"
                  >
                    <BrowserBar host={new URL(product.href).host} size="sm" />
                    <div
                      className={cn(
                        "relative aspect-[16/9] overflow-hidden",
                        spansTabletRow && "md:max-lg:aspect-[21/9]",
                      )}
                    >
                      <Image
                        alt={messages.products.imageAlt.replace(
                          "{name}",
                          product.name,
                        )}
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                        fill
                        sizes={
                          featured
                            ? "(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
                            : "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                        }
                        src={product.image}
                      />
                    </div>
                  </ConversionLink>

                  <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl font-bold tracking-tight text-[#1B3A5C] sm:text-2xl">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[#1A1A2E]/75">
                      {product.description}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-6">
                      <a
                        aria-label={`${messages.products.serviceCta}: ${product.name}`}
                        className="inline-flex items-center gap-2 text-base font-bold text-[#1B3A5C] transition hover:text-[#C4430D]"
                        href={product.serviceHref}
                      >
                        {messages.products.serviceCta}
                        <ArrowRight className="h-5 w-5" />
                      </a>
                      {/* The heading names the product; screen readers get it in the link name too. */}
                      <ConversionLink
                        aria-label={`${messages.products.learnMore} ${product.name}`}
                        className="inline-flex items-center gap-2 text-base font-bold text-[#C4430D] transition hover:text-[#1B3A5C]"
                        eventLabel={`demo_${product.name}`}
                        eventName="demo_click"
                        href={product.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {messages.products.learnMore}
                        <ArrowRight className="h-5 w-5" />
                      </ConversionLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
