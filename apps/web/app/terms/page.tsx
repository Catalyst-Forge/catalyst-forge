import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketentuan Layanan",
  description:
    "Ketentuan layanan CatalystForge — syarat dan ketentuan penggunaan situs dan layanan kami.",
  robots: "noindex, follow",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A2E]">
      <article className="section-container mx-auto max-w-3xl px-5 py-20 sm:py-28">
        <h1 className="text-3xl font-bold tracking-tight text-[#1B3A5C] sm:text-4xl">
          Ketentuan Layanan
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#1A1A2E]/70">
          Terakhir diperbarui: Juni 2026
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">1. Penerimaan Ketentuan</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Dengan mengakses dan menggunakan situs CatalystForge
              (catalystforge.web.id), Anda setuju untuk terikat oleh ketentuan
              layanan ini. Jika Anda tidak setuju, mohon tidak menggunakan situs
              ini.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">2. Deskripsi Layanan</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              CatalystForge menyediakan layanan pengembangan perangkat lunak
              meliputi company profile, CRM, HRIS, POS, AI support, dashboard,
              dan sistem operasional bisnis. Situs ini berfungsi sebagai
              portofolio dan sarana kontak awal. Lingkup pekerjaan, estimasi,
              dan kontrak dinegosiasikan secara terpisah untuk setiap proyek.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">3. Kekayaan Intelektual</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Seluruh konten di situs ini — termasuk teks, desain, logo, dan
              kode demo — adalah milik CatalystForge dan dilindungi oleh hukum
              hak cipta. Produk demo yang ditampilkan adalah ilustrasi
              kapabilitas dan bukan produk yang tersedia untuk digunakan tanpa
              perjanjian tertulis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">4. Batasan Tanggung Jawab</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Situs dan kontennya disediakan &ldquo;sebagaimana adanya&rdquo; tanpa jaminan
              apa pun. CatalystForge tidak bertanggung jawab atas kerugian
              langsung, tidak langsung, insidental, atau konsekuensial yang
              timbul dari penggunaan atau ketidakmampuan menggunakan situs ini.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">5. Tautan ke Situs Pihak Ketiga</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Situs ini mungkin berisi tautan ke situs pihak ketiga. Kami tidak
              mengontrol dan tidak bertanggung jawab atas konten atau praktik
              privasi situs tersebut.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">6. Perubahan Ketentuan</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Kami berhak mengubah ketentuan ini sewaktu-waktu. Perubahan akan
              berlaku segera setelah dipublikasikan di halaman ini. Penggunaan
              berkelanjutan situs setelah perubahan merupakan penerimaan atas
              ketentuan yang diperbarui.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">7. Hukum yang Berlaku</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum
              Republik Indonesia. Setiap sengketa akan diselesaikan melalui
              pengadilan yang berwenang di Indonesia.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">8. Kontak</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Untuk pertanyaan tentang ketentuan ini, hubungi:
            </p>
            <p className="mt-2 font-semibold text-[#E8531A]">
              catalystforgetechnology@gmail.com
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
