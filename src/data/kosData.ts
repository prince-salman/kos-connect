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
    handle: "@kosconnect.pu",
    url: "https://instagram.com/kosconnect.pu"
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
    tagline: "Hunian Nyaman, Tenang & Strategis Dekat Kampus President University",
    description: "Kos ABS adalah mitra resmi pertama Kos Connect yang telah diverifikasi kelayakan fasilitas, kebersihan, dan keamanannya untuk mahasiswa President University. Berlokasi di kawasan tenang dan aman, hanya 5 menit berkendara ke kampus PU Jababeka, dilengkapi fasilitas modern yang siap pakai langsung setelah kamu move out dari dormy.",
    address: "Jl. Simprug Garden Raya, Jababeka II, Cikarang Utara, Kab. Bekasi (Dekat Kampus President University)",
    area: "Simprug / Jababeka II, Cikarang Utara",
    mapsUrl: "https://maps.google.com/?q=President+University+Cikarang",
    distanceToCampus: {
      distanceKm: "1.3 km",
      walking: "12 - 15 Menit jalan kaki santai",
      motorbike: "4 - 5 Menit via Simprug Raya",
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
      badge: "Promo Anak PU",
      discountText: "Potongan Rp 100.000/bulan untuk sewa minimal 3 bulan pertama bagi mahasiswa President University",
      expiryDate: "Hingga 31 Desember 2026"
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
        title: "Kamar Tipe Deluxe AC - Bersih & Estetik",
        category: "kamar"
      },
      {
        url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
        title: "Suasana Meja Belajar & Kasur Empuk",
        category: "kamar"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        title: "Kamar Mandi Dalam Bersih dengan Shower",
        category: "fasilitas"
      },
      {
        url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
        title: "Dapur Bersama Lengkap untuk Masak Hemat",
        category: "fasilitas"
      },
      {
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
        title: "Ruang Santai & Area Parkir Luas Berpagar",
        category: "lingkungan"
      }
    ],
    roomTypes: [
      {
        id: "deluxe-ac",
        name: "Tipe Deluxe AC (Kamar Mandi Dalam)",
        tagline: "Paling Favorit untuk Mahasiswa PU yang Mengutamakan Kenyamanan & Privasi Maksimal",
        badge: "Paling Populer ⭐",
        priceMonthly: 1350000,
        priceQuarterly: 3900000, // hemat 150rb
        priceSemester: 7500000,  // hemat 600rb
        priceYearly: 14500000,   // hemat 1.7jt
        deposit: 300000,
        availableRooms: 3,
        size: "3.5 x 4 Meter",
        bedType: "Springbed Single / Queen (120 x 200)",
        ac: true,
        bathroomInside: true,
        images: [
          "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
        ],
        keyFeatures: [
          "AC Dingin 0.5 PK Hemat Listrik",
          "Kamar Mandi Dalam (Shower + Kloset Duduk)",
          "Meja Belajar Ergonomis + Kursi Busa",
          "Springbed Nyaman + Bantal & Sprei",
          "Lemari Pakaian 2 Pintu dengan Cermin",
          "Jendela Luar & Sirkulasi Udara Segar"
        ],
        roomFacilities: [
          "Kasur Springbed empuk (120x200)",
          "Pendingin Ruangan (AC)",
          "Kamar Mandi Pribadi di dalam",
          "Shower & Kloset Duduk",
          "Meja Belajar & Kursi Kerja",
          "Lemari Pakaian Kayu 2 Pintu",
          "Cermin Rias",
          "Stopkontak dekat tempat tidur & meja",
          "Tempat Sampah & Rak Sepatu Pribadi",
          "Token Listrik Mandiri (Bisa isi sesuai kebutuhan)"
        ]
      },
      {
        id: "standard-ac",
        name: "Tipe Standard AC (Kamar Mandi Luar)",
        tagline: "Pilihan Ekonomis & Sejuk untuk Mahasiswa yang Ingin Hemat Budget Tetap Adem",
        badge: "Hemat Budget 💡",
        priceMonthly: 1100000,
        priceQuarterly: 3200000,
        priceSemester: 6200000,
        priceYearly: 12000000,
        deposit: 250000,
        availableRooms: 2,
        size: "3 x 3.5 Meter",
        bedType: "Springbed Single (100 x 200)",
        ac: true,
        bathroomInside: false,
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1000&q=80"
        ],
        keyFeatures: [
          "AC Dingin & Hemat Energi",
          "Kamar Mandi Luar Bersih (Rasio 1:2 Kamar)",
          "Meja Belajar + Kursi",
          "Springbed Single Nyaman",
          "Lemari Pakaian",
          "Akses Dekat Dapur & Area Jemur"
        ],
        roomFacilities: [
          "Kasur Springbed Single (100x200)",
          "AC Pendingin Ruangan",
          "Meja Belajar & Kursi",
          "Lemari Pakaian",
          "Kamar Mandi Luar Terawat (Dibersihkan rutin)",
          "Jendela Ventilasi Udara",
          "Token Listrik Mandiri"
        ]
      }
    ],
    facilities: [
      {
        category: "Kenyamanan Kamar",
        icon: "Bed",
        items: [
          { name: "Full Furnished Siap Huni", desc: "Kasur springbed, lemari pakaian, meja belajar & kursi siap pakai langsung saat move-in.", icon: "Sparkles" },
          { name: "AC Sejuk & Dingin", desc: "Unit pendingin AC terawat rutin, nyaman untuk nugas & istirahat.", icon: "Wind" },
          { name: "Ventilasi Alami & Jendela", desc: "Pencahayaan siang hari terang alami & sirkulasi udara sehat.", icon: "Sun" },
          { name: "Token Listrik Mandiri", desc: "Tiap kamar memiliki meteran token terpisah, pengeluaran listrik terkontrol bebas boros.", icon: "Zap" }
        ]
      },
      {
        category: "Fasilitas Bersama & Dapur",
        icon: "Coffee",
        items: [
          { name: "Dapur Bersama Lengkap", desc: "Tersedia kompor gas, wastafel cuci piring, dan peralatan masak dasar untuk masak hemat harian.", icon: "UtensilsCrossed" },
          { name: "Kulkas Bersama & Dispenser", desc: "Kulkas penyimpan makanan dingin & air minum galon higienis.", icon: "Refrigerator" },
          { name: "Area Cuci & Jemur Pakaian", desc: "Area jemuran terlindung hujan dan tempat cuci baju yang luas.", icon: "Shirt" },
          { name: "Ruang Tamu & Ruang Diskusi", desc: "Area santai untuk menerima teman kuliah PU nugas kelompok atau bersantai sore.", icon: "Users" }
        ]
      },
      {
        category: "Konektivitas & Keamanan",
        icon: "ShieldCheck",
        items: [
          { name: "WiFi High-Speed Unlimited", desc: "Koneksi internet fiber optic kencang stabil untuk Zoom kuliah, streaming, dan submit tugas.", icon: "Wifi" },
          { name: "CCTV 24 Jam", desc: "Kamera pengawas aktif di area gerbang, parkiran, dan lorong untuk keamanan maksimal.", icon: "Video" },
          { name: "Gerbang Mandiri (Kunci Sendiri)", desc: "Mahasiswa membawa kunci gerbang sendiri. Bebas pulang malam asalkan tenang & tertib.", icon: "KeyRound" },
          { name: "Parkir Motor & Mobil Aman", desc: "Area parkir motor luas beratap dan aman dari panas/hujan, serta opsi parkir mobil.", icon: "Car" }
        ]
      }
    ],
    rules: [
      {
        title: "Akses Bebas Jam Malam (Akses Mandiri)",
        desc: "Setiap penghuni dibekali kunci gerbang sendiri sehingga tidak terkunci jika harus belajar kelompok atau kegiatan kampus malam hari.",
        icon: "Key"
      },
      {
        title: "Toleransi & Ketenangan Belajar",
        desc: "Menjaga ketenangan pada jam istirahat malam (pukul 22.00 WIB ke atas) demi kenyamanan rekan mahasiswa lain yang sedang istirahat/ujian.",
        icon: "VolumeX"
      },
      {
        title: "Kebersihan Area Bersama",
        desc: "Wajib mencuci alat makan setelah memasak di dapur bersama dan membuang sampah pada tempat yang disediakan.",
        icon: "Trash2"
      },
      {
        title: "Tamu & Keamanan",
        desc: "Tamu diterima di ruang tamu bersama. Dilarang membawa obat-obatan terlarang, miras, atau membuat keributan.",
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
        answer: "Sangat dekat, hanya sekitar 1.2 - 1.4 km ke Main Campus PU (sekitar 4-5 menit naik motor, atau 12 menit jalan santai lewat jalur Simprug). Banyak ojek online yang selalu standby di area ini."
      },
      {
        question: "Apakah harga sewa sudah termasuk air, sampah, dan WiFi?",
        answer: "Ya! Harga sewa bulanan sudah include air bersih, iuran kebersihan/sampah, dan akses WiFi fiber optic sepuasnya. Untuk listrik menggunakan sistem token per kamar sehingga kamu hanya bayar listrik sesuai pemakaian pribadi."
      },
      {
        question: "Bagaimana cara booking dan apakah bisa survei lokasi dulu?",
        answer: "Sangat bisa! Kamu bisa klik tombol 'Jadwalkan Survei' atau 'Booking via WhatsApp' di bawah. Tim Kos Connect atau PIC Kos ABS akan menemani kamu melihat langsung kondisi kamar dan fasilitas sebelum memutuskan sewa."
      },
      {
        question: "Bisa bayar per 3 bulan atau per semester?",
        answer: "Bisa! Bahkan pembayaran per 3 bulan, per semester (6 bulan), atau per tahun mendapatkan potongan harga spesial untuk mahasiswa President University."
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
