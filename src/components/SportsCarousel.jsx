import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SportsCarousel = () => {
  const [images, setImages] = useState([]);
  const [loopEnabled, setLoopEnabled] = useState(true);
  const API_KEY = "JlNM6i0Qm1esHNmmARa8VASf3oRDPxV4VYSjPBR_tq0"; // Unsplash API Key

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=sports&client_id=${API_KEY}&per_page=10`
        );
        const data = await response.json();
        setImages(data.results);

        // Disable loop if there are fewer than 3 images
        if (data.results.length < 3) {
          setLoopEnabled(false);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [API_KEY]);

  return (
    <div className="sports-carousel mt-2">
      <h2 className="text-4xl font-bold text-center text-white mb-6 animate__animated animate__fadeIn">
        Explore Sports
      </h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop={loopEnabled}
        className="carousel-container"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div
              className="h-[500px] bg-cover bg-center rounded-lg shadow-lg relative group"
              style={{
                backgroundImage: `url(${image.urls.regular})`,
                backgroundPosition: "center",
                backgroundSize: "cover", // ensures image covers the entire div
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt_description || "Sports Image"}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SportsCarousel;
