import { HubShell } from "../../components/hub-shell";

type Status = "Open" | "Resolved" | "Escalated" | "Waiting";

const conversations: {
  id: string;
  customer: string;
  channel: string;
  topic: string;
  preview: string;
  status: Status;
  handler: string;
  time: string;
}[] = [
  {
    id: "CS-8472-B",
    customer: "Rina Kusuma",
    channel: "WhatsApp",
    topic: "Order status",
    preview: "Pesanan INV-20931 sudah dikirim? Resinya belum update dari kemarin.",
    status: "Open",
    handler: "Nexus AI",
    time: "Just now",
  },
  {
    id: "CS-8471-A",
    customer: "Budi Hartono",
    channel: "Web chat",
    topic: "Invoice copy",
    preview: "Bisa kirim ulang invoice bulan September ke email kantor saya?",
    status: "Resolved",
    handler: "Nexus AI",
    time: "4 min ago",
  },
  {
    id: "CS-8470-D",
    customer: "Sari Wulandari",
    channel: "WhatsApp",
    topic: "Refund request",
    preview: "Barang datang rusak, saya mau refund penuh. Foto sudah saya lampirkan.",
    status: "Escalated",
    handler: "Dina (Support)",
    time: "12 min ago",
  },
  {
    id: "CS-8469-C",
    customer: "Andreas Wijaya",
    channel: "Web chat",
    topic: "Account access",
    preview: "I can't log in after changing my phone number.",
    status: "Waiting",
    handler: "Nexus AI",
    time: "18 min ago",
  },
  {
    id: "CS-8468-A",
    customer: "Putri Ramadhani",
    channel: "WhatsApp",
    topic: "Product question",
    preview: "Garansi untuk seri X200 berapa lama dan klaimnya di mana?",
    status: "Resolved",
    handler: "Nexus AI",
    time: "26 min ago",
  },
  {
    id: "CS-8467-B",
    customer: "Hendra Gunawan",
    channel: "Email",
    topic: "Complaint",
    preview: "Kurir datang di luar jam yang dijanjikan dua kali minggu ini.",
    status: "Escalated",
    handler: "Fikri (Support)",
    time: "41 min ago",
  },
];

const statusStyle: Record<Status, string> = {
  Open: "border-indigo-500/25 bg-indigo-500/10 text-indigo-300",
  Resolved: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300",
  Escalated: "border-pink-500/25 bg-pink-500/10 text-pink-300",
  Waiting: "border-amber-500/25 bg-amber-500/10 text-amber-300",
};

const summary = [
  ["Open now", "14"],
  ["Waiting on customer", "6"],
  ["With an agent", "3"],
  ["Resolved today", "211"],
];

export default function ConversationsPage() {
  return (
    <HubShell
      active="/conversations"
      description="Every chat from WhatsApp, the website widget and email, with who is handling it."
      eyebrow="Conversations"
      title="Support queue"
    >
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {summary.map(([label, value]) => (
          <article className="glass rounded-xl p-4" key={label}>
            <p className="text-xs font-semibold text-slate-400">{label}</p>
            <p className="mt-2 text-2xl font-bold text-white">{value}</p>
          </article>
        ))}
      </div>

      <section className="glass mt-4 rounded-xl p-2 sm:p-3">
        <ul className="divide-y divide-white/[0.05]">
          {conversations.map((chat) => (
            <li
              className="flex flex-col gap-3 p-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              key={chat.id}
            >
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  <span className="font-semibold text-white">{chat.customer}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400">{chat.channel}</span>
                  <span className="text-slate-600">•</span>
                  <span className="font-mono text-xs text-indigo-300">{chat.id}</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {chat.topic}
                </p>
                <p className="mt-1.5 text-sm text-slate-300">{chat.preview}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyle[chat.status]}`}
                >
                  {chat.status}
                </span>
                <span className="text-xs text-slate-500">
                  {chat.handler} · {chat.time}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </HubShell>
  );
}
