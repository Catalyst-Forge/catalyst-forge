import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi CatalystForge — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.",
  robots: "noindex, follow",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A2E]">
      <article className="section-container mx-auto max-w-3xl px-5 py-20 sm:py-28">
        <h1 className="text-3xl font-bold tracking-tight text-[#1B3A5C] sm:text-4xl">
          Kebijakan Privasi
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#1A1A2E]/70">
          Terakhir diperbarui: Juni 2026
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">1. Data yang Kami Kumpulkan</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Saat Anda mengisi formulir kontak di situs ini, kami mengumpulkan:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#1A1A2E]/78">
              <li>Nama lengkap</li>
              <li>Alamat email</li>
              <li>Pesan atau kebutuhan yang Anda sampaikan</li>
            </ul>
            <p className="mt-2 leading-relaxed text-[#1A1A2E]/78">
              Kami <strong>tidak</strong> mengumpulkan data sensitif, data
              pembayaran, atau informasi identitas pribadi di luar yang
              disebutkan di atas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">2. Tujuan Pengumpulan Data</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Data yang Anda berikan digunakan semata-mata untuk:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#1A1A2E]/78">
              <li>Menanggapi pertanyaan atau permintaan estimasi Anda</li>
              <li>Mengirim informasi layanan yang relevan jika Anda menyetujuinya</li>
              <li>Meningkatkan kualitas layanan kami</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">3. Cookie dan Tracking</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Situs ini hanya menggunakan cookie esensial yang diperlukan untuk
              fungsi dasar situs (seperti preferensi bahasa). Kami{" "}
              <strong>tidak</strong> menggunakan cookie pelacakan pihak ketiga
              untuk iklan, kecuali Anda memberikan persetujuan eksplisit melalui
              banner cookie.
            </p>
            <p className="mt-2 leading-relaxed text-[#1A1A2E]/78">
              Jika di masa mendatang kami mengaktifkan layanan analitik (seperti
              Google Analytics), data akan dikumpulkan hanya setelah Anda
              memberikan persetujuan melalui mekanisme opt-in.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">4. Penyimpanan dan Keamanan Data</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Data kontak disimpan di server kami yang berlokasi di VPS dengan
              akses terbatas. Kami menerapkan langkah keamanan teknis dan
              organisasional untuk melindungi data dari akses tidak sah,
              perubahan, pengungkapan, atau perusakan.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">5. Berbagi Data dengan Pihak Ketiga</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Kami <strong>tidak</strong> menjual, menyewakan, atau membagikan
              data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran. Data
              hanya dapat dibagikan jika diwajibkan oleh hukum atau peraturan
              yang berlaku.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">6. Hak Anda</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Sesuai dengan Undang-Undang Perlindungan Data Pribadi (UU PDP)
              Indonesia, Anda memiliki hak untuk:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#1A1A2E]/78">
              <li>Mengakses data pribadi Anda yang kami simpan</li>
              <li>Meminta koreksi atau penghapusan data</li>
              <li>Menarik kembali persetujuan pemrosesan data</li>
              <li>Mengajukan keberatan atas pemrosesan data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">7. Kontak</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Untuk pertanyaan tentang kebijakan privasi ini atau permintaan
              terkait data Anda, hubungi kami di:
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
