import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ← correct path
import "swiper/css";
import "swiper/css/pagination";


export default function Hero(){
  return (
    <div className="w-full" data-aos="fade-up">
      <Swiper modules={[Autoplay, Pagination]} autoplay={{delay:2500}} pagination={{clickable:true}}>
        {[
          {title:"Learn. Teach. Trade Skills.", sub:"Connect with locals to swap knowledge"},
          {title:"From Guitar to JavaScript", sub:"Browse curated skill listings"},
          {title:"Pay or Swap Sessions", sub:"Affordable learning with ratings"}
        ].map((s,i)=>(
          <SwiperSlide key={i}>
            <div className="hero min-h-[55vh] bg-base-200">
              <div className="hero-content text-center">
                <div>
                  <h1 className="text-4xl font-bold">{s.title}</h1>
                  <p className="py-4 opacity-80">{s.sub}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
