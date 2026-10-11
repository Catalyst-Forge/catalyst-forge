import { HubShell } from "../../components/hub-shell";

const metrics = [
  ["Resolution rate", "94.2%", "Answered without a human"],
  ["Avg first reply", "1.8s", "Across WhatsApp and web chat"],
  ["Escalations", "12", "Handed to agents this week"],
  ["CSAT", "4.8/5", "From 326 post-chat ratings"],
];

const week = [
  { day: "Mon", total: 182, escalated: 3 },
  { day: "Tue", total: 205, escalated: 2 },
  { day: "Wed", total: 196, escalated: 1 },
  { day: "Thu", total: 228, escalated: 3 },
  { day: "Fri", total: 241, escalated: 2 },
  { day: "Sat", total: 134, escalated: 1 },
  { day: "Sun", total: 98, escalated: 0 },
];

const intents = [
  ["Order status & delivery", "31%", "97%"],
  ["Billing & invoices", "22%", "95%"],
  ["Account access", "18%", "92%"],
  ["Product questions", "16%", "93%"],
  ["Complaints", "8%", "71%"],
  ["Other", "5%", "88%"],
];

const reasons = [
  ["Customer asked for a person", 5],
  ["Two negative messages in a row", 4],
  ["Refund above approval limit", 2],
  ["Low answer confidence", 1],
] as const;

export default function AnalyticsPage() {
  const busiest = Math.max(...week.map((item) => item.total));

  return (
    <HubShell
      active="/analytics"
      description="How well the assistant answers, what customers ask about, and why chats reach a person."
      eyebrow="Analytics"
      title="Support performance this week"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map(([label, value, note]) => (
          <article className="glass rounded-xl p-5" key={label}>
            <p className="text-sm font-semibold text-slate-400">{label}</p>
            <p className="mt-3 text-3xl font-bold text-white">{value}</p>
            <p className="mt-2 text-xs text-slate-500">{note}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <section className="glass rounded-xl p-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-semibold text-white">Conversations per day</h2>
            <p className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-indigo-400" /> AI resolved
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-pink-400" /> Escalated
              </span>
            </p>
          </div>
          <div className="mt-6 flex h-48 items-end gap-3">
            {week.map((item) => (
              <div className="flex h-full flex-1 flex-col items-center gap-2" key={item.day}>
                {/* flex-1 gives the bar area a definite height for the % below. */}
                <div className="flex w-full flex-1 flex-col items-center justify-end gap-1">
                  <span className="text-xs font-semibold text-slate-300">{item.total}</span>
                  <div
                    className="flex w-full flex-col justify-end overflow-hidden rounded-md"
                    style={{ height: `${(item.total / busiest) * 85}%` }}
                  >
                    {item.escalated > 0 ? (
                      // A few pixels minimum so a handful of escalations stays visible.
                      <div
                        className="bg-pink-400/80"
                        style={{ height: `max(4px, ${(item.escalated / item.total) * 100}%)` }}
                      />
                    ) : null}
                    <div className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-400/70" />
                  </div>
                </div>
                <span className="text-xs text-slate-500">{item.day}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="glass rounded-xl p-5">
          <h2 className="font-semibold text-white">Why chats were escalated</h2>
          <ul className="mt-4 space-y-3">
            {reasons.map(([reason, count]) => (
              <li key={reason}>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{reason}</span>
                  <span className="font-semibold text-white">{count}</span>
                </div>
                <div className="mt-1.5 h-1.5 rounded-full bg-white/[0.05]">
                  <div
                    className="h-1.5 rounded-full bg-pink-400/80"
                    style={{ width: `${(count / 5) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="glass mt-4 overflow-x-auto rounded-xl p-5">
        <h2 className="font-semibold text-white">Top questions by topic</h2>
        <table className="mt-4 w-full min-w-[480px] text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="pb-3 font-semibold">Topic</th>
              <th className="pb-3 font-semibold">Share of chats</th>
              <th className="pb-3 font-semibold">Resolved by AI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.05]">
            {intents.map(([topic, share, resolved]) => (
              <tr key={topic}>
                <td className="py-3 text-slate-200">{topic}</td>
                <td className="py-3 text-slate-400">{share}</td>
                <td className="py-3 font-semibold text-emerald-300">{resolved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </HubShell>
  );
}
