import { CheckCircle2, Circle } from "lucide-react";
import { HubShell } from "../../components/hub-shell";

const persona = [
  ["Name", "Nexus"],
  ["Tone", "Friendly and brief, never pushy"],
  ["Languages", "Bahasa Indonesia first, English when the customer writes in English"],
  ["Signs off as", "Nexus, asisten virtual"],
];

const triggers = [
  ["Customer asks to talk to a person", true],
  ["Two negative messages in a row", true],
  ["Refund request above Rp 1.000.000", true],
  ["Answer confidence below 70%", true],
  ["Questions about legal action", true],
  ["Any chat from a VIP account", false],
] as const;

const hours = [
  ["Monday - Friday", "08.00 - 20.00 WIB"],
  ["Saturday", "09.00 - 15.00 WIB"],
  ["Sunday & holidays", "Assistant only"],
];

const channels = [
  ["WhatsApp Business", "Connected"],
  ["Website chat widget", "Connected"],
  ["Email (support@)", "Not connected"],
];

export default function SettingsPage() {
  return (
    <HubShell
      active="/settings"
      description="How the assistant speaks, when it hands a chat to your team, and where it answers."
      eyebrow="Settings"
      title="Assistant configuration"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <section className="glass rounded-xl p-5">
          <h2 className="font-semibold text-white">Persona</h2>
          <dl className="mt-4 space-y-3">
            {persona.map(([label, value]) => (
              <div className="grid gap-1 sm:grid-cols-[8rem_1fr]" key={label}>
                <dt className="text-sm text-slate-500">{label}</dt>
                <dd className="text-sm text-slate-200">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="glass rounded-xl p-5">
          <h2 className="font-semibold text-white">Hand off to a person when</h2>
          <ul className="mt-4 space-y-2.5">
            {triggers.map(([label, on]) => (
              <li className="flex items-center gap-2.5 text-sm" key={label}>
                {on ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                ) : (
                  <Circle className="h-4 w-4 shrink-0 text-slate-600" />
                )}
                <span className={on ? "text-slate-200" : "text-slate-500"}>{label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="glass rounded-xl p-5">
          <h2 className="font-semibold text-white">Team hours</h2>
          <dl className="mt-4 space-y-3">
            {hours.map(([day, time]) => (
              <div className="flex justify-between gap-4 text-sm" key={day}>
                <dt className="text-slate-400">{day}</dt>
                <dd className="font-semibold text-slate-200">{time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 rounded-lg bg-white/[0.03] p-3 text-xs leading-relaxed text-slate-400">
            Outside these hours the assistant still answers, and anything it cannot solve becomes
            a ticket for the team the next morning.
          </p>
        </section>

        <section className="glass rounded-xl p-5">
          <h2 className="font-semibold text-white">Channels</h2>
          <ul className="mt-4 space-y-3">
            {channels.map(([name, state]) => (
              <li className="flex items-center justify-between gap-4 text-sm" key={name}>
                <span className="text-slate-200">{name}</span>
                <span
                  className={
                    state === "Connected"
                      ? "rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300"
                      : "rounded-full bg-white/[0.05] px-2.5 py-0.5 text-xs font-semibold text-slate-400"
                  }
                >
                  {state}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </HubShell>
  );
}
