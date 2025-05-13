"use client";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import { count } from "console";
import { useState } from "react";

export default function StatePage() {
  const [isLightOn, setIsLightOn] = useState(false);

  const [count, setCount] = useState(0);

  const [animal, setAnimal] = useState(" ");

  console.log("animal", animal);

  return (
    <div>
      <MenuBar page={"เรียนรู้ State"} />
      <div className="p-4">
        <h1 className="text-center text-4xl">Switch ไฟ</h1>
        <p className="text-center text-xl">เรียนรู้การ toggle state</p>
        <div className="flex justify-center mt-4">
          <button
            className="bg-red-600 p-4 rounded-2xl text-3xl"
            type="button"
            onClick={() => setIsLightOn((prev) => !prev)}
          >
            เปิด / ปิด ไฟ
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {isLightOn ? (
            <img src="https://www.w3schools.com/js/pic_bulbon.gif" />
          ) : (
            <img src="https://www.w3schools.com/js/pic_bulboff.gif" />
          )}
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-center text-3xl font-bold">เพิ่ม / ลด เลข</h1>
        <p className="text-center text-xl">เรียนรู้การเพิ่ม / ลด state</p>
        <h1 className="text-center font-bold text-6xl mt-4">{count}</h1>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="p-4 font-bold text-2xl bg-yellow-600 rounded-xl"
            onClick={() => setCount((prev) => prev - 1)}
          >
            ลบ 1
          </button>
          <button
            className="p-4 font-bold text-2xl bg-green-500 rounded-xl"
            onClick={() => setCount((prev) => prev + 1)}
          >
            บวก 1
          </button>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-center text-3xl font-bold">สัตว์ที่ฉันชอบคือ</h1>
        <p className="text-center text-xl">เรียนรู้การเพิ่ม / ลด state</p>
        <h1 className="text-center font-bold text-6xl mt-4">
          สัตว์ที่ฉันชอบ คือ {animal}
        </h1>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="p-4 font-bold text-2xl bg-yellow-600 rounded-xl"
            onClick={() => setAnimal("หมา")}
          >
            หมา
          </button>
          <button
            className="p-4 font-bold text-2xl bg-green-500 rounded-xl"
            onClick={() => setAnimal("แมว")}
          >
            แมว
          </button>
          <button
            className="p-4 font-bold text-2xl bg-blue-500 rounded-xl"
            onClick={() => setAnimal("กระต่าย")}
          >
            กระต่าย
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
