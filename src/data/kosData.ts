// Data master Kos Connect
// Dirancang modular agar mudah menambahkan kos baru (multi-kos) di masa depan
// Cukup tambahkan object baru ke dalam array `kosPartners`!

export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  priceMonthly: number;
  priceQuarterly: number; // 3 bulan (diskon)
  priceSemester: number;  // 6 bulan (diskon anak PU)
  priceYearly: number;    // 1 tahun
  deposit: number;
  availableRooms: number;
  size: string;
  bathroomSize?: string;
  bedType: string;
  ac: boolean;
  bathroomInside: boolean;
  images: string[];
  keyFeatures: string[];
  roomFacilities: string[];
}

export interface FacilityGroup {
  category: string;
  icon: string;
  items: { name: string; desc: string; icon: string }[];
}

export interface KosItem {
  id: string;
  name: string;
  slug: string;
  verified: boolean;
  partnerStatus: string;
  badgeText: string;
  tagline: string;
  description: string;
  address: string;
  area: string;
  mapsUrl: string;
  distanceToCampus: {
    walking: string;
    motorbike: string;
    car: string;
    distanceKm: string;
    nearestLandmarks: string[];
  };
  contactPerson: {
    picName: string;
    role: string;
    whatsappNumber: string; // format internasional tanpa tanda + misal 6281234567890
    displayPhone: string;
    operatingHours: string;
    instagramAccount?: string;
  };
  gallery: { url: string; title: string; category: 'kamar' | 'fasilitas' | 'lingkungan' }[];
  roomTypes: RoomType[];
  facilities: FacilityGroup[];
  rules: { title: string; desc: string; icon: string }[];
  faqs: { question: string; answer: string }[];
  promoInfo?: {
    title: string;
    badge: string;
    discountText: string;
    expiryDate: string;
  };
}

export interface PlatformConfig {
  name: string;
  tagline: string;
  description: string;
  instagram: {
    handle: string;
    url: string;
  };
  tiktok?: {
    handle: string;
    url: string;
  };
  teamContact: {
    email: string;
    whatsappNumber: string;
    displayPhone: string;
  };
  targetCampus: string;
  targetAudience: string;
}

export const platformConfig: PlatformConfig = {
  name: "Kos Connect",
  tagline: "Mengkoneksikan Mahasiswa PU dengan Kos Incaran Terbaik",
  description: "Platform terpercaya anak President University untuk menemukan hunian kos nyaman, aman, dan strategis setelah move out dari asrama (dormy).",
  instagram: {
    handle: "@kost.connect",
    url: "https://instagram.com/kost.connect"
  },
  teamContact: {
    email: "kosconnect.pu@gmail.com",
    whatsappNumber: "6285712345678", // WhatsApp Official Kos Connect
    displayPhone: "+62 857-1234-5678"
  },
  targetCampus: "President University (PU)",
  targetAudience: "Mahasiswa President University yang move-out dari Dormitory / Asrama"
};

export const kosPartners: KosItem[] = [
  {
    id: "kos-abs",
    name: "Kos ABS",
    slug: "kos-abs-president-university",
    verified: true,
    partnerStatus: "Official Partner Eksklusif",
    badgeText: "Mitra Resmi Terverifikasi Kos Connect",
    tagline: "Kamar AC Nyaman & Kamar Mandi Dalam Pribadi Dekat Kampus President University",
    description: "Kos ABS adalah mitra resmi pertama Kos Connect yang telah diverifikasi kelayakan fasilitas, kebersihan, dan keamanannya untuk mahasiswa President University. Berlokasi strategis di kawasan tenang, hanya sekitar 1.3 km dari kampus PU, dilengkapi fasilitas kamar mandi dalam, AC dingin, dan kasur Royal Foam yang siap pakai langsung setelah move out dari dormy.",
    address: "Jl. Simprug Garden Raya, Jababeka II, Cikarang Utara, Kab. Bekasi (Dekat Kampus President University)",
    area: "Simprug / Jababeka II, Cikarang Utara",
    mapsUrl: "https://maps.google.com/?q=President+University+Cikarang",
    distanceToCampus: {
      distanceKm: "1.3 km",
      walking: "12 - 15 Menit jalan kaki santai",
      motorbike: "4 - 5 Menit via Simprug Raya (Ojek Online)",
      car: "6 Menit",
      nearestLandmarks: [
        "Kampus Utama President University (PU)",
        "Dormitory PU (Student Housing)",
        "Hollywood Junction & Cinema XXI",
        "Pujasera & Kawasan Kuliner Simprug",
        "Minimarket Indomaret / Alfamart (150m)"
      ]
    },
    contactPerson: {
      picName: "Pengelola Kos ABS",
      role: "Person in Charge (PIC) & Operasional Kos ABS",
      whatsappNumber: "6281288899900", // Bisa diubah langsung dengan nomor riil Kos ABS
      displayPhone: "+62 812-8889-9900",
      operatingHours: "Setiap Hari (08.00 - 20.00 WIB)",
      instagramAccount: "@kos_abs.official"
    },
    promoInfo: {
      title: "Special Move-Out Dormy PU Promo!",
      badge: "Promo Bebas Deposit",
      discountText: "Free WiFi High-Speed & Air Bersih • Tanpa Uang Deposit (Deposit Rp 0) untuk Mahasiswa President University",
      expiryDate: "Hingga 31 Desember 2026"
    },
    gallery: [
      {
        url: "/assets/rooms/kamar-ac-utama.jpg",
        title: "Kamar Tidur Utama (AC, Jendela & Meja Belajar)",
        category: "kamar"
      },
      {
        url: "/assets/rooms/kamar-mandi-dalam.jpg",
        title: "Fasilitas Kamar Mandi Dalam (Shower, Bidet & Kloset Duduk)",
        category: "fasilitas"
      },
      {
        url: "/assets/rooms/kasur-dipan.jpg",
        title: "Kasur Empuk Royal Foam & Dipan Kayu Minimalis",
        category: "kamar"
      },
      {
        url: "/assets/rooms/lemari-pakaian.jpg",
        title: "Lemari Pakaian 2 Pintu Luas & Laci Berpengunci",
        category: "fasilitas"
      },
      {
        url: "/assets/rooms/meja-belajar.jpg",
        title: "Meja Belajar Ergonomis, Kursi & Laci Meja",
        category: "kamar"
      }
    ],
    roomTypes: [
      {
        id: "kamar-kamar-mandi-dalam",
        name: "Kamar dengan Fasilitas Kamar Mandi Dalam",
        tagline: "Kamar Full-Furnished AC, Kasur Busa Royal Foam, Lemari 2 Pintu Luas, Meja Belajar & Kamar Mandi Dalam Pribadi",
        badge: "Kamar Mandi Dalam 🚿",
        priceMonthly: 1500000,
        priceQuarterly: 4350000, // hemat 150rb (setara 1.45jt/bln)
        priceSemester: 8500000,  // hemat 500rb
        priceYearly: 16500000,   // hemat 1.5jt
        deposit: 0,              // Free deposit / gausah deposit
        availableRooms: 3,
        size: "3 x 3 Meter",
        bathroomSize: "1.2 x 3 Meter",
        bedType: "Kasur Royal Foam Single (100 x 200)",
        ac: true,
        bathroomInside: true,
        images: [
          "/assets/rooms/kamar-ac-utama.jpg",
          "/assets/rooms/kamar-mandi-dalam.jpg",
          "/assets/rooms/kasur-dipan.jpg",
          "/assets/rooms/lemari-pakaian.jpg",
          "/assets/rooms/meja-belajar.jpg"
        ],
        keyFeatures: [
          "Ukuran Kamar 3 x 3 Meter (Tertata Rapi & Full-Furnished)",
          "Kamar Mandi Dalam Luas 1.2 x 3 Meter (Shower + Kloset Duduk)",
          "AC Dingin 0.5 PK Terawat & Hemat Listrik",
          "Free WiFi Fiber Optic Unlimited High-Speed",
          "Free Air Bersih & Iuran Sampah Lingkungan",
          "Tanpa Uang Deposit (Deposit Rp 0)",
          "Kasur Busa Royal Foam Nyaman + Dipan Kayu",
          "Lemari Pakaian 2 Pintu (Gantungan & Laci Kunci)",
          "Meja Belajar Ergonomis + Kursi Sandaran + Laci Meja",
          "Jendela Luar & Gorden Privasi Abu-abu",
          "Privasi Terjaga (Tanpa Fasilitas Bersama)"
        ],
        roomFacilities: [
          "Kamar Mandi Dalam Luas 1.2 x 3 Meter (Shower, Jet Washer/Bidet Spray & Kloset Duduk)",
          "Ukuran Kamar Tidur 3 x 3 Meter Nyaman & Siap Huni",
          "Pendingin Ruangan (AC Split Dingin)",
          "Free Akses WiFi Fiber Optic Unlimited",
          "Free Biaya Pemakaian Air Bersih",
          "Bebas Uang Deposit (Deposit Rp 0)",
          "Kasur Busa Nyaman Royal Foam",
          "Dipan Kayu Minimalis dengan Sandaran Kepala",
          "Lemari Pakaian Kayu 2 Pintu (Rak Bertingkat, Tiang Gantungan & Laci Berpengunci)",
          "Meja Belajar Ergonomis Mahasiswa + Kursi Sandaran Putih + Laci Meja",
          "Jendela Kamar Luar dengan Gorden Minimalis Abu-abu",
          "Stopkontak Listrik Tepat Dekat Meja Belajar & Kasur",
          "Token Listrik Mandiri (Bisa isi sesuai kebutuhan)"
        ]
      }
    ],
    facilities: [
      {
        category: "Kenyamanan Kamar Mandi Dalam",
        icon: "Bed",
        items: [
          { name: "Kamar Mandi Dalam Pribadi", desc: "Shower air bersih lancar, jet washer/bidet spray, dan kloset duduk bersih di dalam kamar.", icon: "Bath" },
          { name: "Full Furnished Siap Huni", desc: "Kasur Royal Foam, dipan kayu minimalis, lemari 2 pintu, meja belajar & kursi siap pakai.", icon: "Sparkles" },
          { name: "AC Sejuk & Dingin", desc: "Unit pendingin AC terawat rutin, nyaman untuk istirahat dan nugas kuliah.", icon: "Wind" },
          { name: "Token Listrik Mandiri", desc: "Tiap kamar memiliki meteran token terpisah, pengeluaran listrik terkontrol bebas boros.", icon: "Zap" }
        ]
      },
      {
        category: "Layanan, Konektivitas & Keamanan Kos",
        icon: "ShieldCheck",
        items: [
          { name: "Free WiFi Fiber Optic High-Speed", desc: "Koneksi internet kencang dan stabil tanpa biaya tambahan untuk Zoom, streaming & submit tugas.", icon: "Wifi" },
          { name: "Free Air Bersih & Iuran Sampah", desc: "Biaya air bersih dan kebersihan lingkungan sudah termasuk dalam sewa bulanan.", icon: "Droplets" },
          { name: "Bebas Biaya Deposit (Rp 0)", desc: "Mahasiswa tidak dibebani uang jaminan deposit saat mulai sewa kamar.", icon: "BadgePercent" },
          { name: "CCTV 24 Jam & Gerbang Mandiri", desc: "Kamera pengawas aktif di area gerbang dan lorong, serta kunci gerbang mandiri untuk akses 24 jam.", icon: "KeyRound" }
        ]
      }
    ],
    rules: [
      {
        title: "Akses Mandiri 24 Jam (Kunci Sendiri)",
        desc: "Setiap penghuni dibekali kunci gerbang sendiri sehingga tidak terkunci jika ada kegiatan kampus atau tugas kelompok hingga malam hari.",
        icon: "Key"
      },
      {
        title: "Toleransi & Ketenangan Belajar",
        desc: "Menjaga ketenangan pada jam istirahat malam (pukul 22.00 WIB ke atas) demi kenyamanan rekan mahasiswa lain yang sedang istirahat/ujian.",
        icon: "VolumeX"
      },
      {
        title: "Kebersihan Kamar & Lorong",
        desc: "Wajib menjaga kebersihan kamar masing-masing dan membuang sampah pada tempat penampungan yang telah disediakan.",
        icon: "Trash2"
      },
      {
        title: "Privasi & Keamanan Bersama",
        desc: "Menjaga ketertiban lingkungan kos. Dilarang membawa obat-obatan terlarang, miras, atau membuat keributan yang mengganggu penghuni lain.",
        icon: "ShieldAlert"
      }
    ],
    faqs: [
      {
        question: "Apakah mahasiswa baru atau yang baru keluar dari Dormy PU bisa langsung masuk?",
        answer: "Bisa banget! Kos ABS memang dirancang sebagai hunian transisi utama bagi mahasiswa President University setelah selesai masa wajib asrama (dormitory). Kamar sudah full-furnished, kamu tinggal bawa koper dan perlengkapan pribadi saja."
      },
      {
        question: "Berapa jarak sebenarnya dari Kos ABS ke President University?",
        answer: "Sangat dekat, hanya sekitar 1.2 - 1.4 km ke Main Campus PU (sekitar 4-5 menit naik ojek online, atau 12 menit jalan santai lewat jalur Simprug)."
      },
      {
        question: "Apakah harga sewa sudah termasuk WiFi dan air, serta apakah ada deposit?",
        answer: "Ya! Harga sewa Rp 1.500.000/bulan sudah include Free WiFi fiber optic unlimited, free air bersih, dan iuran sampah lingkungan. Selain itu, sewa di Kos ABS TANPA DEPOSIT (Deposit Rp 0). Untuk listrik menggunakan sistem token mandiri per kamar sehingga pengeluaran listrik terkontrol sesuai kebutuhanmu."
      },
      {
        question: "Apakah ada fasilitas dapur bersama, kulkas bersama, atau area parkir kendaraan?",
        answer: "Tidak ada. Kos ABS difokuskan khusus sebagai hunian kamar tidur pribadi dengan kamar mandi dalam yang tenang, bersih, dan privat. Di sini tidak ada fasilitas bersama (tidak ada dapur/kulkas bersama) dan tidak menyediakan area parkir kendaraan. Lokasinya sangat dekat dengan President University (hanya sekitar 1.3 km), sehingga mahasiswa biasa jalan kaki santai atau menggunakan transportasi online."
      },
      {
        question: "Bagaimana cara booking dan apakah bisa survei lokasi dulu?",
        answer: "Sangat bisa! Kamu bisa klik tombol 'Jadwalkan Survei' atau 'Booking via WhatsApp' di bawah. Tim Kos Connect atau PIC Kos ABS akan menemani kamu melihat langsung kondisi kamar dan fasilitas sebelum memutuskan sewa."
      },
      {
        question: "Bisa bayar per 3 bulan atau per semester?",
        answer: "Bisa! Pembayaran per 3 bulan (kuartal), per semester (6 bulan), atau per tahun mendapatkan potongan harga spesial untuk mahasiswa President University."
      }
    ]
  }
];

// Helper untuk kemudahan ekspansi multi-kos nantinya
export const getFeaturedKos = (): KosItem => {
  return kosPartners[0]; // Saat ini Kos ABS sebagai mitra pertama
};

export const getAllKos = (): KosItem[] => {
  return kosPartners;
};

export const getKosById = (id: string): KosItem | undefined => {
  return kosPartners.find((kos) => kos.id === id);
};
