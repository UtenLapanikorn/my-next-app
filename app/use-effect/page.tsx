"use client";
import Footer from "@/components/Footer";
import ImageProfile from "@/components/ImageProfile";
import MenuBar from "@/components/MenuBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6"
      )
      .then((response) => {
        
        const filtered = response.data.results.filter(
          (item: { media_type?: string }) => item.media_type === "tv"
        );
        setMovieList(filtered);
      });
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <MenuBar page={"เรียนรู้ useEffect"} />

      <div className="bg-amber-200 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movieList.map((item: {
          poster_path?: string;
          title?: string;
          overview?: string;
          name?: string;
        }, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <ImageProfile
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : "/no-image.png" // fallback image
              }
            />
            <div className="p-4">
              <h2 className="text-black text-lg font-semibold text-center">
                {item.title || item.name}
              </h2>
              <p className="text-sm text-black mt-2 text-center">
                {item.overview || "ไม่มีคำอธิบาย"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
