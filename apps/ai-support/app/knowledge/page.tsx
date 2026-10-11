import { HubShell } from "../../components/hub-shell";

const articles = [
  {
    title: "Order tracking and delivery times",
    category: "Shipping",
    summary:
      "Look up an order by invoice number, courier delivery estimates per city, and when a late package goes to a person.",
    used: 312,
    updated: "2 days ago",
    status: "Published",
  },
  {
    title: "Refund and return policy",
    category: "Billing",
    summary:
      "Returns within 7 days with photos of the item; refunds go back to the original payment method in 3-5 working days.",
    used: 188,
    updated: "1 week ago",
    status: "Published",
  },
  {
    title: "Payment methods and invoice copies",
    category: "Billing",
    summary:
      "QRIS, bank transfer and virtual accounts, plus how to resend an invoice to the customer's registered email.",
    used: 141,
    updated: "3 days ago",
    status: "Published",
  },
  {
    title: "Account access and password reset",
    category: "Account",
    summary:
      "The checks the assistant runs before sending a reset link, and when it must hand the chat to an agent instead.",
    used: 97,
    updated: "Yesterday",
    status: "Published",
  },
  {
    title: "Warranty claims by product line",
    category: "Product",
    summary:
      "Warranty length for each product series, the documents a customer needs, and the nearest service partner.",
    used: 64,
    updated: "5 days ago",
    status: "Published",
  },
  {
    title: "Urgent complaints and escalation",
    category: "Policy",
    summary:
      "Complaints, legal threats or two unhappy replies in a row go straight to a person with the full chat attached.",
    used: 38,
    updated: "Today",
    status: "In review",
  },
];

const stats = [
  ["Articles", "42"],
  ["Questions covered", "87%"],
  ["Waiting for review", "3"],
];

export default function KnowledgePage() {
  return (
    <HubShell
      active="/knowledge"
      description="The answers the assistant is allowed to use. Each reply links back to the article it came from."
      eyebrow="Knowledge base"
      title="What the assistant knows"
    >
      <div className="grid grid-cols-3 gap-4">
        {stats.map(([label, value]) => (
          <article className="glass rounded-xl p-4" key={label}>
            <p className="text-xs font-semibold text-slate-400">{label}</p>
            <p className="mt-2 text-2xl font-bold text-white">{value}</p>
          </article>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <article className="glass flex flex-col rounded-xl p-5" key={article.title}>
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                {article.category}
              </span>
              <span
                className={
                  article.status === "Published"
                    ? "rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300"
                    : "rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-300"
                }
              >
                {article.status}
              </span>
            </div>
            <h2 className="mt-3 font-semibold text-white">{article.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
              {article.summary}
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Used in {article.used} answers this week · Updated {article.updated}
            </p>
          </article>
        ))}
      </div>
    </HubShell>
  );
}
