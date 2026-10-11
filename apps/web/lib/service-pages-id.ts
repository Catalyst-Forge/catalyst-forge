import type {
  ServiceCopy,
  ServiceSlug,
  ServiceUiCopy,
} from "@/lib/service-pages";

export const serviceUiId: ServiceUiCopy = {
  estimate: "Estimasi pengerjaan",
  bestFor: "Cocok untuk",
  problemsEyebrow: "Tantangan umum",
  scopeEyebrow: "Hasil dan cakupan",
  scopeTitle: "Yang Anda dapatkan",
  outcomesTitle: "Hasil untuk bisnis",
  deliverablesTitle: "Cakupan pekerjaan",
  processEyebrow: "Cara kerja",
  processTitle: "Dari diskusi sampai siap dipakai",
  step: "Tahap",
  proofEyebrow: "Bukti",
  projectKindClient: "Project klien",
  projectKindProduct: "Produk demo",
  viewCaseStudy: "Lihat studi kasus",
  tryDemo: "Coba demo",
  demoNote:
    "Demo adalah referensi alur dan tampilan. Versi produksi disesuaikan dengan data, role, dan proses bisnis Anda.",
  faqEyebrow: "FAQ",
  faqTitle: "Pertanyaan yang sering muncul",
  relatedEyebrow: "Layanan lainnya",
  relatedTitle: "Kebutuhan lain yang bisa kami bantu",
  relatedCta: "Lihat layanan",
};

export const servicePagesId: Record<ServiceSlug, ServiceCopy> = {
  "company-profile": {
    shortName: "Company Profile",
    summary:
      "Website profesional yang menjelaskan layanan Anda dan memudahkan calon klien menghubungi.",
    metaTitle: "Jasa Pembuatan Website Company Profile",
    metaDescription:
      "Jasa pembuatan website company profile untuk bisnis di Indonesia: struktur konten, desain responsif, SEO dasar, dan serah terima. Estimasi 2-4 minggu.",
    keywords: [
      "jasa company profile",
      "jasa pembuatan website company profile",
      "website perusahaan",
      "jasa pembuatan website Bandung",
    ],
    eyebrow: "Company Profile Launch",
    headline:
      "Website company profile yang membuat bisnis terlihat kredibel dan mudah dihubungi",
    lede: "Kami menyusun struktur halaman, menulis copy layanan, membangun website responsif, dan menyiapkan SEO dasar serta form inquiry, sehingga calon klien paham apa yang Anda tawarkan dan tahu cara menghubungi Anda.",
    primaryCta: "Minta Estimasi Website",
    demoCta: "Lihat Demo",
    timeline: "2-4 minggu",
    bestFor:
      "Perusahaan jasa, manufaktur, distributor, layanan kesehatan, pendidikan, dan organisasi yang perlu tampil kredibel secara digital.",
    problemsTitle: "Tanda website Anda belum bekerja untuk bisnis",
    problems: [
      "Company profile masih berupa PDF yang sulit ditemukan di Google dan merepotkan untuk dibagikan",
      "Website lama tidak menjelaskan layanan, pengalaman, dan cara menghubungi dengan jelas",
      "Tampilan di ponsel berantakan atau lambat dimuat",
    ],
    outcomes: [
      "Brand terlihat serius saat dikirim ke calon klien, mitra, atau panitia tender",
      "Pengunjung langsung paham layanan Anda, melihat bukti pengalaman, dan tahu cara menghubungi",
      "Tim sales punya satu link yang konsisten untuk follow-up",
    ],
    deliverables: [
      "Struktur halaman: beranda, tentang, layanan, project, dan kontak",
      "Copywriting: positioning, value proposition, dan call-to-action",
      "Form inquiry, tombol WhatsApp, metadata SEO, sitemap, dan robots",
      "Deploy ke domain Anda, analytics dasar, dan serah terima konten",
    ],
    workflow: [
      {
        label: "Pemetaan",
        text: "Memetakan positioning, target pelanggan, layanan utama, dan bukti kredibilitas yang bisa ditampilkan.",
      },
      {
        label: "Konten dan desain",
        text: "Menyusun struktur halaman, copy, hierarki visual, dan komponen CTA, lalu mereviewnya bersama Anda.",
      },
      {
        label: "Build dan deploy",
        text: "Membangun website responsif, menyiapkan SEO dasar dan analytics, lalu deploy ke domain Anda.",
      },
    ],
    proofTitle: "Contoh website yang sudah jadi",
    proofText:
      "Demo company profile kami berbentuk website korporat multi-halaman: tentang, operasional, tata kelola, keberlanjutan, dan kontak. Buka demonya untuk melihat tampilan dan alurnya, atau baca studi kasusnya.",
    faq: [
      {
        question: "Apakah bisa dibantu kalau konten belum siap?",
        answer:
          "Bisa. Kami bantu menyusun struktur halaman, headline, narasi layanan, dan CTA dari bahan yang sudah ada, misalnya PDF company profile, brosur, atau katalog.",
      },
      {
        question: "Berapa lama pengerjaannya?",
        answer:
          "Umumnya 2-4 minggu, tergantung jumlah halaman dan kesiapan konten. Jadwal pasti kami sampaikan setelah scope disepakati.",
      },
      {
        question: "Apakah website bisa dikembangkan setelah launch?",
        answer:
          "Bisa, secara bertahap. Versi awal bisa fokus pada kredibilitas, lalu ditambah blog, katalog produk, halaman karier, atau integrasi CRM.",
      },
      {
        question: "Berapa biayanya?",
        answer:
          "Biaya mengikuti scope: jumlah halaman, kebutuhan penulisan konten, dan fitur tambahan. Ceritakan bisnis Anda lewat form atau WhatsApp, lalu kami kirim estimasi scope, jadwal, dan biaya.",
      },
    ],
    ctaHeadline: "Butuh website company profile yang siap dipakai tim sales?",
    ctaSubtext:
      "Ceritakan bisnis Anda dan halaman apa saja yang dibutuhkan. Kami kirim estimasi scope dan jadwal pengerjaan.",
    whatsappMessage:
      "Halo CatalystForge, saya ingin berdiskusi tentang pembuatan website company profile.",
  },

  "custom-crm": {
    shortName: "Custom CRM",
    summary:
      "Pipeline sales, follow-up, dan data pelanggan dalam satu sistem yang mengikuti proses Anda.",
    metaTitle: "Jasa Pembuatan CRM Custom untuk Tim Sales",
    metaDescription:
      "CRM custom untuk tim sales di Indonesia: pipeline, follow-up, data pelanggan, dan laporan yang mengikuti proses penjualan Anda. Estimasi 4-8 minggu.",
    keywords: [
      "custom CRM Indonesia",
      "jasa pembuatan CRM",
      "sistem sales pipeline",
      "CRM untuk bisnis",
    ],
    eyebrow: "Custom CRM",
    headline:
      "CRM custom untuk pipeline sales, follow-up, dan data pelanggan yang lebih rapi",
    lede: "Kami membangun CRM yang mengikuti cara tim Anda menjual: stage pipeline, kepemilikan lead, task follow-up, dan laporan. Hasilnya menggantikan spreadsheet dan catatan pribadi masing-masing sales.",
    primaryCta: "Diskusi CRM Custom",
    demoCta: "Coba Demo CRM",
    timeline: "4-8 minggu",
    bestFor:
      "Tim sales B2B, distributor, agency, sekolah, klinik, dan bisnis dengan pipeline prospek yang perlu ditertibkan.",
    problemsTitle: "Kapan spreadsheet tidak lagi cukup untuk tim sales?",
    problems: [
      "Lead masuk dari banyak channel, tetapi statusnya tidak terpantau di satu tempat",
      "Follow-up bergantung pada catatan pribadi masing-masing sales, sehingga prospek mudah terlewat saat sales berganti",
      "Manajemen sulit membaca pipeline karena data tersebar di banyak spreadsheet dan harus direkap manual",
    ],
    outcomes: [
      "Pipeline transparan bagi sales dan manajemen",
      "Follow-up tidak tercecer karena aktivitas dan task tercatat",
      "Laporan sales bisa dibaca langsung tanpa rekap manual berulang",
    ],
    deliverables: [
      "Dashboard pipeline, akun, kontak, aktivitas, dan task follow-up",
      "Stage penjualan yang mengikuti proses bisnis Anda",
      "Import/export data, filter, pencarian, dan hak akses per role",
      "Deploy, dokumentasi penggunaan, dan support awal",
    ],
    workflow: [
      {
        label: "Pemetaan pipeline",
        text: "Memetakan sumber lead, stage, kepemilikan, aktivitas, dan laporan yang dibutuhkan.",
      },
      {
        label: "Versi awal (MVP)",
        text: "Membangun modul inti agar tim bisa mulai mencatat akun, deal, dan follow-up.",
      },
      {
        label: "Review dan pengembangan",
        text: "Menambah otomasi, laporan, dan integrasi setelah pemakaian harian terbukti berjalan.",
      },
    ],
    proofTitle: "Lihat CRM-nya langsung",
    proofText:
      "Demo CRM kami memuat dashboard pipeline penjualan, akun dan kontak, task follow-up, serta laporan dengan akses berbasis role.",
    faq: [
      {
        question: "Apakah bisa migrasi dari spreadsheet?",
        answer:
          "Bisa. Data spreadsheet menjadi dasar untuk struktur akun, kontak, pipeline, dan aktivitas. Kami petakan kolomnya terlebih dahulu sebelum data diimpor.",
      },
      {
        question: "Apakah bisa terhubung dengan channel lead?",
        answer:
          "Bisa, setelah workflow inti stabil. Misalnya integrasi form website, email, link WhatsApp, atau dashboard untuk manajemen.",
      },
      {
        question: "Apakah semua fitur harus dibangun sekaligus?",
        answer:
          "Tidak. Kami mulai dari modul inti (akun, pipeline, dan follow-up), lalu menambah laporan dan otomasi setelah tim memakainya sehari-hari. Versi awal biasanya selesai dalam 4-8 minggu.",
      },
      {
        question: "Berapa biayanya?",
        answer:
          "Biaya mengikuti scope: jumlah modul, integrasi, dan volume data yang dimigrasikan. Ceritakan proses sales Anda lewat form atau WhatsApp, lalu kami kirim estimasi scope, jadwal, dan biaya.",
      },
    ],
    ctaHeadline: "Ingin pipeline sales Anda lebih rapi dan terpantau?",
    ctaSubtext:
      "Ceritakan proses sales dan tools yang dipakai sekarang. Kami bantu petakan scope CRM yang realistis untuk versi awal.",
    whatsappMessage:
      "Halo CatalystForge, saya ingin berdiskusi tentang CRM custom untuk tim sales saya.",
  },

  "custom-hris": {
    shortName: "Custom HRIS",
    summary:
      "Data karyawan, absensi, cuti, dan ringkasan payroll yang lebih tertata dalam satu sistem.",
    metaTitle: "Jasa Pembuatan HRIS Custom untuk Perusahaan",
    metaDescription:
      "HRIS custom untuk perusahaan di Indonesia: data karyawan, absensi, cuti, ringkasan payroll, dan laporan HR sesuai kebijakan Anda. Estimasi 4-8 minggu.",
    keywords: [
      "custom HRIS Indonesia",
      "jasa pembuatan HRIS",
      "sistem karyawan",
      "aplikasi absensi karyawan",
    ],
    eyebrow: "Custom HRIS",
    headline:
      "HRIS custom untuk data karyawan, absensi, cuti, dan payroll yang lebih terkendali",
    lede: "Kami membangun sistem HR yang menjalankan kebijakan perusahaan Anda: aturan absensi, jenis cuti, alur approval, dan ringkasan payroll, dengan akses untuk admin dan manager sesuai perannya.",
    primaryCta: "Diskusi HRIS Custom",
    demoCta: "Coba Demo HRIS",
    timeline: "4-8 minggu",
    bestFor:
      "Bisnis yang mulai kewalahan mengelola data karyawan, absensi, payroll, cuti, dan administrasi HR secara manual.",
    problemsTitle: "Kapan administrasi HR mulai memakan terlalu banyak waktu?",
    problems: [
      "Data karyawan tersebar di spreadsheet, folder, dan chat sehingga sulit dicari dan sering tidak mutakhir",
      "Absensi, cuti, dan payroll membutuhkan rekap manual berulang di setiap periode",
      "HR kesulitan menyajikan laporan cepat untuk manajemen",
    ],
    outcomes: [
      "Data karyawan terpusat dan mudah diperbarui",
      "Proses cuti, absensi, dan payroll lebih konsisten",
      "HR punya laporan yang siap dipakai untuk keputusan operasional",
    ],
    deliverables: [
      "Database karyawan, struktur departemen, jabatan, dan status kerja",
      "Absensi, cuti, ringkasan payroll, dan approval sederhana",
      "Dashboard HR, filter laporan, dan export data",
      "Role admin dan manager, dokumentasi, dan support awal",
    ],
    workflow: [
      {
        label: "Pemetaan kebijakan",
        text: "Memetakan aturan absensi, cuti, payroll, approval, dan struktur organisasi.",
      },
      {
        label: "Modul inti HR",
        text: "Membangun modul data karyawan, absensi, pengajuan cuti, dan dashboard HR.",
      },
      {
        label: "Serah terima",
        text: "Menyiapkan dokumentasi, import data, review hak akses, dan pendampingan saat go-live.",
      },
    ],
    proofTitle: "Lihat HRIS-nya langsung",
    proofText:
      "Demo HRIS kami memuat data karyawan, absensi, payroll, review performa, dan struktur organisasi dalam satu dashboard.",
    faq: [
      {
        question: "Apakah semua modul harus dibangun sekaligus?",
        answer:
          "Tidak. Mulai dari data karyawan dan absensi, lalu tambahkan cuti, payroll, dan approval secara bertahap. Untuk payroll, cakupan standar kami berupa ringkasan; aturan yang lebih kompleks dibahas saat pemetaan kebijakan.",
      },
      {
        question: "Apakah data karyawan lama bisa diimpor?",
        answer:
          "Bisa, selama struktur datanya dapat dipetakan dengan jelas. File Excel atau CSV yang rapi biasanya paling mudah diproses.",
      },
      {
        question: "Bagaimana dengan hak akses ke data karyawan?",
        answer:
          "Akses dibagi per role. Admin dan manager hanya melihat dan mengubah data sesuai kewenangannya. Aturan role kami tetapkan bersama Anda saat pemetaan kebijakan.",
      },
      {
        question: "Berapa biayanya?",
        answer:
          "Biaya mengikuti scope: jumlah modul, kompleksitas aturan cuti dan payroll, serta data yang diimpor. Ceritakan kebutuhan HR Anda lewat form atau WhatsApp, lalu kami kirim estimasi scope, jadwal, dan biaya.",
      },
    ],
    ctaHeadline: "Siap merapikan administrasi HR di perusahaan Anda?",
    ctaSubtext:
      "Ceritakan proses absensi, cuti, dan payroll yang berjalan sekarang. Kami bantu petakan modul yang perlu dibangun lebih dulu.",
    whatsappMessage:
      "Halo CatalystForge, saya ingin berdiskusi tentang HRIS custom untuk perusahaan saya.",
  },

  "custom-pos": {
    shortName: "Custom POS",
    summary:
      "Transaksi kasir, stok, dan laporan penjualan per produk dan per cabang dalam satu sistem.",
    metaTitle: "Jasa Pembuatan POS Custom: Kasir dan Stok",
    metaDescription:
      "POS custom untuk retail dan F&B: transaksi kasir, stok, multi-cabang, dan laporan penjualan sesuai operasional Anda. Estimasi 4-8 minggu.",
    keywords: [
      "custom POS Indonesia",
      "jasa pembuatan POS",
      "sistem kasir",
      "aplikasi inventory toko",
    ],
    eyebrow: "Custom POS",
    headline:
      "POS custom untuk transaksi, stok, dan laporan penjualan yang lebih jelas",
    lede: "Kami membangun sistem kasir yang terhubung dengan stok dan laporan, sehingga transaksi, pergerakan stok, dan rekap penjualan per produk atau per cabang tercatat dalam satu sistem.",
    primaryCta: "Diskusi POS Custom",
    demoCta: "Coba Demo POS",
    timeline: "4-8 minggu",
    bestFor:
      "Retail, F&B, toko cabang, distributor kecil, dan bisnis penjualan yang butuh transaksi, stok, dan laporan lebih rapi.",
    problemsTitle: "Kapan pencatatan kasir manual mulai bermasalah?",
    problems: [
      "Transaksi kasir belum terhubung dengan stok, sehingga angka di sistem sering berbeda dengan stok di rak",
      "Owner sulit memantau produk terlaris dan performa masing-masing cabang",
      "Rekap penjualan membutuhkan banyak koreksi manual di akhir hari atau akhir bulan",
    ],
    outcomes: [
      "Transaksi harian tercatat konsisten",
      "Stok mudah dipantau per produk dan per cabang",
      "Laporan penjualan bisa dibaca tanpa rekap manual yang panjang",
    ],
    deliverables: [
      "Kasir, katalog produk, transaksi, diskon, dan metode pembayaran",
      "Inventory, stok masuk dan keluar, serta peringatan stok rendah",
      "Laporan penjualan per produk dan cabang, plus export data",
      "Role kasir dan admin, deploy, dokumentasi, dan support awal",
    ],
    workflow: [
      {
        label: "Pemetaan alur penjualan",
        text: "Memetakan proses kasir, stok, produk, retur, cabang, dan laporan utama.",
      },
      {
        label: "Versi awal POS",
        text: "Membangun modul transaksi, inventory, dashboard, dan export laporan.",
      },
      {
        label: "Uji operasional",
        text: "Menguji alur harian bersama kasir dan admin, lalu menentukan integrasi tambahan yang dibutuhkan.",
      },
    ],
    proofTitle: "Lihat POS-nya langsung",
    proofText:
      "Demo POS kami memuat transaksi kasir, manajemen produk dan harga, stok multi-cabang, serta laporan penjualan harian.",
    faq: [
      {
        question: "Apakah bisa untuk beberapa cabang?",
        answer:
          "Bisa. Struktur cabang, role pengguna, dan laporan per cabang dapat disiapkan sejak versi awal.",
      },
      {
        question:
          "Apakah bisa terhubung dengan printer struk atau pembayaran digital?",
        answer:
          "Bisa, tergantung kebutuhan. Versi awal fokus pada transaksi dan stok; integrasi printer atau payment ditambahkan setelah alur kasir berjalan stabil.",
      },
      {
        question: "Bagaimana dengan data produk dan stok yang sudah ada?",
        answer:
          "Kami bahas di tahap pemetaan. Daftar produk, harga, dan stok awal dari spreadsheet biasanya bisa dijadikan dasar katalog.",
      },
      {
        question: "Berapa biayanya?",
        answer:
          "Biaya mengikuti scope: jumlah cabang, fitur kasir, dan integrasi perangkat atau pembayaran. Ceritakan operasional toko Anda lewat form atau WhatsApp, lalu kami kirim estimasi scope, jadwal, dan biaya.",
      },
    ],
    ctaHeadline: "Ingin kasir, stok, dan laporan penjualan terhubung?",
    ctaSubtext:
      "Ceritakan jenis usaha, jumlah cabang, dan cara pencatatan Anda sekarang. Kami bantu petakan scope POS yang realistis.",
    whatsappMessage:
      "Halo CatalystForge, saya ingin berdiskusi tentang sistem POS custom untuk usaha saya.",
  },

  "ai-support": {
    shortName: "AI Support",
    summary:
      "Chatbot AI dengan knowledge base dan handoff ke tim manusia untuk pertanyaan pelanggan.",
    metaTitle: "Jasa Chatbot AI dan AI Support untuk Bisnis",
    metaDescription:
      "Chatbot AI dan AI support dengan knowledge base dan handoff ke tim manusia, agar pelanggan mendapat jawaban lebih cepat. Estimasi 1-3 minggu.",
    keywords: [
      "AI support Indonesia",
      "jasa chatbot AI",
      "customer support automation",
      "AI knowledge base",
    ],
    eyebrow: "AI Automation Sprint",
    headline:
      "AI support dan chatbot untuk menjawab pelanggan lebih cepat dan konsisten",
    lede: "Kami membangun chatbot yang menjawab dari knowledge base bisnis Anda, yaitu FAQ, dokumen layanan, dan SOP, lengkap dengan alur handoff ke tim manusia untuk pertanyaan sensitif atau di luar konteks.",
    primaryCta: "Diskusi AI Support",
    demoCta: "Coba Demo AI",
    timeline: "1-3 minggu",
    bestFor:
      "Bisnis dengan pertanyaan pelanggan yang berulang, knowledge base internal, FAQ layanan, atau kebutuhan chatbot sebagai respons pertama.",
    problemsTitle: "Kapan chatbot AI mulai masuk akal untuk bisnis Anda?",
    problems: [
      "Customer service menjawab pertanyaan yang sama berulang kali",
      "Informasi layanan tersebar, sehingga jawaban antar admin tidak konsisten",
      "Tim butuh respons pertama yang cepat tanpa menghilangkan peran manusia untuk kasus yang rumit",
    ],
    outcomes: [
      "Pertanyaan berulang dijawab lebih cepat tanpa menunggu admin",
      "Jawaban lebih konsisten karena bersumber dari knowledge base yang terstruktur",
      "Tim bisa memantau percakapan dan memperbaiki jawaban secara bertahap",
    ],
    deliverables: [
      "Chatbot AI atau alur assistant sesuai kebutuhan layanan",
      "Knowledge base, prompt, fallback, dan handoff ke admin manusia",
      "Console percakapan, audit jawaban, dan analytics dasar",
      "Deploy, monitoring awal, dan iterasi jawaban",
    ],
    workflow: [
      {
        label: "Pemetaan pengetahuan",
        text: "Mengumpulkan FAQ, SOP, dokumen layanan, batasan jawaban, dan skenario handoff.",
      },
      {
        label: "Pembangunan assistant",
        text: "Membangun alur chatbot, prompt, knowledge base, console, dan pelacakan percakapan.",
      },
      {
        label: "Uji dan pantau",
        text: "Menguji jawaban, memperbaiki prompt, dan memantau kualitas respons di masa awal pemakaian.",
      },
    ],
    proofTitle: "Dari chatbot rumah sakit sampai console pengelolaan",
    proofText:
      "Pomeng membantu pasien dan pengunjung RS Prima Inti Medika mendapatkan informasi layanan lewat WhatsApp. Demo AI Support Console menunjukkan sisi pengelolaannya: chat, knowledge base, dan analytics percakapan.",
    faq: [
      {
        question: "Apakah percakapan bisa dialihkan ke admin manusia?",
        answer:
          "Bisa. Kami menyiapkan fallback handoff agar pertanyaan sensitif atau di luar konteks diteruskan ke tim Anda.",
      },
      {
        question: "Pengetahuan chatbot bisa bersumber dari mana?",
        answer:
          "Knowledge base bisa dimulai dari FAQ, dokumen layanan, SOP, katalog, atau riwayat percakapan customer support yang sudah ada.",
      },
      {
        question: "Chatbot bisa dipasang di channel apa?",
        answer:
          "Channel ditentukan di tahap pemetaan, sesuai tempat pelanggan Anda bertanya. Chatbot RS Prima Inti Medika, salah satu project kami, terhubung dengan WhatsApp.",
      },
      {
        question: "Bagaimana kualitas jawaban AI dijaga?",
        answer:
          "Jawaban dibatasi pada knowledge base dan batasan respons yang disepakati. Percakapan tercatat di console untuk diaudit, dan pertanyaan di luar konteks dialihkan ke admin.",
      },
      {
        question: "Berapa biayanya?",
        answer:
          "Biaya mengikuti scope: jumlah sumber pengetahuan, channel, dan kebutuhan console. Ceritakan pertanyaan pelanggan yang paling sering Anda terima lewat form atau WhatsApp, lalu kami kirim estimasi scope, jadwal, dan biaya.",
      },
    ],
    ctaHeadline: "Ingin pelanggan mendapat jawaban lebih cepat?",
    ctaSubtext:
      "Ceritakan pertanyaan yang paling sering diterima tim Anda. Kami bantu petakan knowledge base dan alur handoff untuk chatbot pertama.",
    whatsappMessage:
      "Halo CatalystForge, saya ingin berdiskusi tentang chatbot AI untuk customer support bisnis saya.",
  },
};
