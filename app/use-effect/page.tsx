"use client";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import axios from "axios";
import { use, useEffect, useState } from "react";

export default function UseEffectPage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6"
      )
      .then((response) => {
        console.log(response);
        setMovieList(response.data.results);
      })
  }, []);
  console.log(movieList)

  return (
    <div>
      <MenuBar page={"เรียนรู้ useEffect"} />
      <div className="p-4 bg-blue-500 w-50">
        <h2 className="text-center">หนังดี</h2>
        <p className="text-center">หนัง</p>
      </div>
      {movieList.map((item, index) => (
        <div className="bg-blue-50 w-xl">
            <h2 className="text-center">(item.title)</h2>
            <p className="text-center">(item.overview)</p>
        </div>
      ))}
      <Footer />
    </div>
  );
}
