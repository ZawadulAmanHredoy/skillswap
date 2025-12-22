import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero(){
  const slides = [
    { title: "Learn. Teach. Trade Skills.", sub: "Connect with locals and swap knowledge in minutes." },
    { title: "From Guitar to JavaScript", sub: "Browse curated listings and book sessions confidently." },
    { title: "Affordable Learning, Real Reviews", sub: "Choose top-rated providers and grow faster." },
  ];

  return (
    <div className="w-full" data-aos="fade-up">
      <div className="container-page section pt-8 sm:pt-10">
        <div className="surface overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {slides.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="relative min-h-[58vh] flex items-center">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(900px 500px at 20% 30%, rgba(59,130,246,.18), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(168,85,247,.14), transparent 55%), radial-gradient(900px 500px at 50% 90%, rgba(16,185,129,.10), transparent 55%)",
                    }}
                  />
                  <div className="relative w-full px-6 sm:px-10 py-12 sm:py-14">
                    <div className="max-w-2xl">
                      <p className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                        Local Skill Exchange
                        <span className="opacity-60">•</span>
                        Modern learning
                      </p>

                      <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
                        {s.title}
                      </h1>

                      <p className="mt-4 text-base sm:text-lg opacity-75">
                        {s.sub}
                      </p>

                      <div className="mt-7 flex flex-col sm:flex-row gap-3">
                        <a href="#popular" className="btn btn-primary rounded-xl">
                          Explore Skills
                        </a>
                        <a href="#how" className="btn btn-ghost rounded-xl">
                          How it works
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
