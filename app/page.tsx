"use client";

import { useState } from "react";
import Image from "next/image";

const business = {
  name: "Italian 1779 Sapanca",
  category: "İtalyan Restoranı",
  rating: 4.0,
  reviewCount: 69,
  priceRange: "₺1.000–1.200 kişi başı",
  phoneIntl: "+905520820108",
  phoneDisplay: "0552 082 01 08",
  address: "Kırkpınar Soğuksu, Bağdat Cd. A Blok No:68/10, 54600 Sapanca/Sakarya",
  hours: "Açık · 23:30'a kadar",
  services: ["Yerinde Servis"],
};

const waLink = `https://wa.me/${business.phoneIntl.replace(
  "+",
  ""
)}?text=${encodeURIComponent("Merhaba, masa ayırtmak istiyorum")}`;

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.address
)}`;

const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  business.address
)}&output=embed`;

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  image: [
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&q=80",
  ],
  telephone: business.phoneIntl,
  priceRange: "₺1.000–₺1.200",
  servesCuisine: ["İtalyan"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kırkpınar Soğuksu, Bağdat Cd. A Blok No:68/10",
    addressLocality: "Sapanca",
    addressRegion: "Sakarya",
    postalCode: "54600",
    addressCountry: "TR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.0,
    reviewCount: 69,
  },
  openingHours: "Mo-Su 12:00-23:30",
};

const menuItems = [
  {
    category: "Antipasti",
    name: "Bruschetta al Pomodoro",
    desc: "Izgara köy ekmeği, domates, fesleğen ve sızma zeytinyağı",
    price: 240,
  },
  {
    category: "Antipasti",
    name: "Caprese",
    desc: "Taze mozzarella, domates, fesleğen ve balzamik glazür",
    price: 260,
  },
  {
    category: "Pizza",
    name: "Pizza Margherita",
    desc: "San Marzano domates sosu, fior di latte mozzarella, fesleğen",
    price: 350,
  },
  {
    category: "Pizza",
    name: "Pizza Quattro Formaggi",
    desc: "Mozzarella, gorgonzola, parmesan ve taleggio",
    price: 420,
  },
  {
    category: "Pasta",
    name: "Spaghetti Carbonara",
    desc: "Guanciale, yumurta sarısı, pecorino romano ve karabiber",
    price: 380,
  },
  {
    category: "Pasta",
    name: "Fettuccine al Tartufo",
    desc: "Trüf kreması, orman mantarları ve parmesan",
    price: 480,
  },
  {
    category: "Pasta",
    name: "Risotto ai Funghi",
    desc: "Porcini mantarlı kremalı risotto, parmesan ile",
    price: 400,
  },
  {
    category: "Dolci",
    name: "Tiramisu",
    desc: "Klasik İtalyan tatlısı: mascarpone, espresso ve kakao",
    price: 190,
  },
  {
    category: "Dolci",
    name: "Panna Cotta",
    desc: "Vanilyalı panna cotta, taze çilek sosuyla",
    price: 170,
  },
];

const reviews = [
  {
    author: "Elif İltaş",
    stars: 5,
    when: "1 ay önce",
    text: "I was really pleased with the atmosphere, the taste, and the service. The staff were friendly and attentive. Not only the pizza, but also the desserts and drinks were excellent. I highly recommend it as a place to sit and chat with friends for hours.",
  },
  {
    author: "Yasemin Babadağ",
    stars: 5,
    when: "1 ay önce",
    text: "The taste and the quality of your service are all exceptional. The atmosphere is wonderful, the food is amazing.",
  },
  {
    author: "Şeyma Bozkurt",
    stars: 5,
    when: "1 ay önce",
    text: "We were really pleased with both the taste and the service. The staff were friendly and attentive. It's definitely a place we'll come back to, and I wholeheartedly recommend it to pizza lovers.",
  },
  {
    author: "İlham Kazdal",
    stars: 5,
    when: "1 ay önce",
    text: "Friendly and high-quality service, the location and everything was wonderful. It's a newly opened place, minor things happen and will improve over time. The important thing is the taste and cleanliness, and this place was excellent.",
  },
  {
    author: "DemirYumruk",
    stars: 5,
    when: "1 ay önce",
    text: "You feel a sense of spaciousness as soon as you enter the place. The service and welcome are wonderful. The flavors are unforgettable.",
  },
  {
    author: "Merve Leyla",
    stars: 5,
    when: "1 ay önce",
    text: "The decor is really stylish and gives a high-quality impression.",
  },
  {
    author: "Hasan Boraoğlu",
    stars: 5,
    when: "3 hafta önce",
    text: "More than the food, the attentiveness of the staff was truly wonderful. Service comes before taste. Well done!",
  },
];

const topics = [
  "Şık Tasarım",
  "Kibar Personel",
  "Temizlik",
  "Güler Yüzlü Ekip",
  "Makarna",
  "Lezzetli Yemekler",
  "Atmosfer",
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <MenuSection />
        <Story />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function StarIcon({
  className = "h-4 w-4",
  filled = true,
}: {
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function Stars({
  count,
  className = "h-4 w-4",
}: {
  count: number;
  className?: string;
}) {
  return (
    <div className="flex gap-0.5 text-gold-400">
      {[1, 2, 3, 4, 5].map((s) => (
        <StarIcon key={s} className={className} filled={s <= Math.round(count)} />
      ))}
    </div>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#menu", label: "Menü" },
    { href: "#hikayemiz", label: "Hikayemiz" },
    { href: "#yorumlar", label: "Yorumlar" },
    { href: "#iletisim", label: "İletişim" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold-500/20 bg-olive-900/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-baseline gap-2 font-serif text-xl tracking-[0.14em] text-parchment-50"
        >
          Italian <span className="text-gold-300">1779</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-parchment-100/80 transition-colors hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#1fb958]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Masa Ayırt</span>
            <span className="sm:hidden">Ayırt</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-parchment-100 transition-colors hover:text-gold-300 md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-gold-500/20 bg-olive-900/95 px-6 pb-6 pt-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-[0.18em] text-parchment-100/80 transition-colors hover:bg-gold-400/10 hover:text-gold-300"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:bg-[#1fb958]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp&apos;tan Masa Ayırt
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const ratingDisplay = business.rating.toFixed(1).replace(".", ",");

  return (
    <section id="top" className="relative grid min-h-screen lg:grid-cols-2">
      <div className="relative flex items-center overflow-hidden bg-olive-900 px-6 pb-20 pt-32 lg:px-14 xl:px-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 15% 20%, rgba(200,170,99,0.12), transparent 55%)",
          }}
        />
        <div className="animate-fade-up relative max-w-xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-gold-300">
            Kırkpınar &bull; Sapanca
          </p>
          <h1 className="font-serif text-6xl leading-[1.05] tracking-wide text-parchment-50 sm:text-7xl xl:text-8xl">
            Italian
            <br />
            <span className="text-gold-300">1779</span>
          </h1>
          <div className="mt-7 flex items-center gap-5">
            <div className="h-px w-16 bg-gold-400/60" />
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-parchment-100/70">
              {business.category}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 rounded-full border border-gold-500/40 bg-olive-800/80 px-4 py-1.5">
              <Stars count={business.rating} className="h-3.5 w-3.5" />
              <span className="text-sm font-semibold text-parchment-50">
                {ratingDisplay}
              </span>
              <span className="text-xs text-parchment-100/60">
                {business.reviewCount} Google değerlendirmesi
              </span>
            </span>
          </div>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-parchment-100/75">
            Sapanca&apos;nın huzurunda, İtalya&apos;nın zarafeti. Taş fırın
            pizzalar, ev yapımı makarnalar ve şık bir atmosfer sizi bekliyor.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#25D366]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#1fb958]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp&apos;tan Masa Ayırt
            </a>
            <a
              href="#menu"
              className="rounded-full border border-gold-400/50 px-8 py-3.5 text-sm font-semibold tracking-wide text-gold-300 transition-all duration-300 hover:scale-[1.02] hover:bg-gold-400/10 hover:border-gold-300"
            >
              Menüyü İncele
            </a>
          </div>
        </div>
      </div>

      <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
        <Image
          src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1600&q=80"
          alt="Taş fırında pişen İtalyan pizzası"
          fill
          priority
          className="hero-zoom object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-olive-900/50 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-5 border border-gold-300/30 sm:inset-7" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
    </section>
  );
}

function MenuSection() {
  const categories = Array.from(new Set(menuItems.map((i) => i.category)));

  return (
    <section id="menu" className="scroll-mt-20 bg-parchment-100 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="fade-in mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-600">
            Menü
          </p>
          <h2 className="font-serif text-4xl tracking-wide text-olive-900 sm:text-5xl">
            Lezzetlerimiz
          </h2>
          <div className="mx-auto mt-5 h-px w-20 bg-gold-400/70" />
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-olive-700/70">
            İtalya&apos;nın klasik tarifleri, özenle seçilmiş malzemelerle.
            Ortalama kişi başı {business.priceRange}.
          </p>
        </div>

        <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
          {business.services.map((s) => (
            <span
              key={s}
              className="rounded-full border border-olive-500/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-olive-700"
            >
              {s}
            </span>
          ))}
          <span className="flex items-center gap-2 rounded-full bg-olive-800 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-parchment-50">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {business.hours}
          </span>
        </div>

        {categories.map((cat, catIndex) => (
          <div
            key={cat}
            className="fade-in mb-12 last:mb-0"
            style={{ animationDelay: `${0.1 + catIndex * 0.1}s` }}
          >
            <div className="mb-7 flex items-center gap-5">
              <h3 className="font-serif text-2xl tracking-[0.08em] text-olive-800">
                {cat}
              </h3>
              <div className="h-px flex-1 bg-olive-300/70" />
            </div>
            <div className="grid gap-x-14 gap-y-7 md:grid-cols-2">
              {menuItems
                .filter((i) => i.category === cat)
                .map((item) => (
                  <div key={item.name}>
                    <div className="flex items-baseline">
                      <span className="font-serif text-lg text-olive-900">
                        {item.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mx-3 flex-1 border-b border-dotted border-olive-400/60"
                      />
                      <span className="whitespace-nowrap font-serif text-lg text-gold-600">
                        ₺{item.price}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-olive-700/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="hikayemiz" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div
          className="fade-in relative order-2 lg:order-1"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="pointer-events-none absolute -inset-3 border border-gold-500/40" />
          <div className="relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80"
              alt="Italian 1779 restoran iç mekânı"
              width={720}
              height={880}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 left-8 bg-olive-900 px-6 py-3">
            <p className="font-serif text-sm tracking-[0.3em] text-gold-300">
              EST. 1779
            </p>
          </div>
        </div>

        <div className="fade-in order-1 lg:order-2">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-600">
            Hikayemiz
          </p>
          <h2 className="font-serif text-4xl tracking-wide text-olive-900 sm:text-5xl">
            Sapanca&apos;da Zarif
            <br />
            Bir İtalyan Sofrası
          </h2>
          <div className="mt-6 h-px w-16 bg-gold-400/70" />
          <div className="mt-8 space-y-5 leading-relaxed text-olive-800/80">
            <p>
              Sapanca&apos;nın Kırkpınar Soğuksu semtinde, Bağdat Caddesi
              üzerinde misafirlerini ağırlayan Italian 1779; adını İtalyan
              mutfağının zarafetinden ilhamla alıyor. Kapılarımızı yakın
              zamanda açtık, ancak hedefimiz ilk günden belli: kusursuz bir
              İtalyan deneyimi.
            </p>
            <p>
              Taş fırınımızda pişen ince hamurlu pizzalar, her gün taze açılan
              makarnalar ve el yapımı tatlılar… Menümüzü hazırlarken
              İtalya&apos;nın klasik tariflerine sadık kalıyor, her tabağı
              Sapanca&apos;nın dinginliğiyle buluşturuyoruz.
            </p>
            <p>
              Şık tasarımı, kibar ve güler yüzlü ekibiyle Italian 1779;
              yıldönümü kutlamaları, aile yemekleri ve saatlerce sohbet edilen
              dost sofraları için hazır.
            </p>
          </div>
          <p className="mt-8 font-serif text-xl italic text-gold-600">
            &ldquo;Buon appetito.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const ratingDisplay = business.rating.toFixed(1).replace(".", ",");

  return (
    <section id="yorumlar" className="scroll-mt-20 bg-parchment-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="fade-in mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-600">
            Yorumlar
          </p>
          <h2 className="font-serif text-4xl tracking-wide text-olive-900 sm:text-5xl">
            Misafirlerimiz Ne Diyor?
          </h2>
          <div className="mx-auto mt-5 h-px w-20 bg-gold-400/70" />
        </div>

        <div
          className="fade-in mx-auto mb-12 flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-olive-200 bg-white px-8 py-7 text-center shadow-sm"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-3">
            <span className="font-serif text-5xl text-olive-900">
              {ratingDisplay}
            </span>
            <div className="text-left">
              <Stars count={business.rating} className="h-5 w-5" />
              <p className="mt-1 text-sm text-olive-700/70">
                {business.reviewCount} Google değerlendirmesi
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {topics.map((t) => (
              <span
                key={t}
                className="rounded-full bg-olive-100 px-3.5 py-1.5 text-xs font-medium text-olive-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={r.author}
              className="fade-in flex h-full flex-col rounded-xl border border-olive-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${(i % 3) * 0.1}s` }}
            >
              <Stars count={r.stars} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-olive-800/80">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-5 border-t border-olive-100 pt-4">
                <p className="font-serif text-base text-olive-900">
                  {r.author}
                </p>
                <p className="mt-0.5 text-xs text-olive-700/60">{r.when}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="iletisim" className="scroll-mt-20 bg-olive-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="fade-in mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-300">
            İletişim
          </p>
          <h2 className="font-serif text-4xl tracking-wide text-parchment-50 sm:text-5xl">
            Bize Ulaşın
          </h2>
          <div className="mx-auto mt-5 h-px w-20 bg-gold-400/70" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div
            className="fade-in flex flex-col justify-center gap-8"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-300">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg text-parchment-50">Adres</h3>
                <p className="mt-1.5 leading-relaxed text-parchment-100/70">
                  {business.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-300">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg text-parchment-50">
                  Telefon
                </h3>
                <a
                  href={`tel:${business.phoneIntl}`}
                  className="mt-1.5 block text-parchment-100/70 transition-colors hover:text-gold-300"
                >
                  {business.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-300">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg text-parchment-50">
                  Çalışma Saatleri
                </h3>
                <p className="mt-1.5 text-parchment-100/70">{business.hours}</p>
                <p className="mt-1 text-xs text-gold-300/80">
                  Ortalama kişi başı {business.priceRange}
                </p>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#25D366]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#1fb958]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp&apos;tan Yazın
              </a>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2.5 rounded-full border border-gold-400/60 px-8 py-4 text-sm font-semibold text-gold-300 transition-all duration-300 hover:scale-[1.02] hover:bg-gold-400/10"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>

          <div
            className="fade-in overflow-hidden rounded-2xl border border-gold-500/25 shadow-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            <iframe
              title="Italian 1779 Sapanca Konum"
              src={mapsEmbed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold-500/20 bg-olive-950 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p className="flex items-baseline gap-2 font-serif text-2xl tracking-[0.14em] text-parchment-50">
          Italian <span className="text-gold-300">1779</span>
        </p>
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold-300/80">
          {business.category} &bull; Sapanca
        </p>
        <p className="mt-1 text-sm text-parchment-100/50">
          {business.address}
        </p>
        <a
          href={`tel:${business.phoneIntl}`}
          className="text-sm text-parchment-100/70 transition-colors hover:text-gold-300"
        >
          {business.phoneDisplay}
        </a>
        <div className="mt-3 flex items-center gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-parchment-100/40 transition-colors hover:text-[#25D366]"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-2 text-xs text-parchment-100/40">
          &copy; {new Date().getFullYear()} {business.name}. Tüm hakları
          saklıdır.
        </p>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
