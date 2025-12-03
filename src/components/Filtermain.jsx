import React, { useState } from "react";
import { Heart } from "lucide-react";
import ping from '../assets/img/ping.png'
import sertsi from '../assets/svg/sertsi.svg'
import star from '../assets/svg/star.svg'
import toplam from '../assets/img/toplam.png'
import magni from '../assets/img/magni.png'
import qolif from '../assets/img/qolif.png'

const Filter = () => {
  const [activeCategory, setActiveCategory] = useState("ГИТАРЫ");
  const [openMenus, setOpenMenus] = useState({
    guitars: true,
    ukulele: false,
    accessories: false,
    strings: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white">
      <div className="max-w-[1400px] m-auto px-4 md:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <div className="bg-[#1a1a1a] rounded-lg p-6 h-fit sticky top-4">
            <h2 className="text-xl font-semibold mb-6">Каталог</h2>

            <div className="mb-4">
              <button
                onClick={() => toggleMenu("guitars")}
                className="flex items-center justify-between w-full text-left text-orange-500 font-medium mb-3"
              >
                ГИТАРЫ
                <span
                  className={`transform transition-transform ${
                    openMenus.guitars ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openMenus.guitars && (
                <ul className="space-y-2 ml-4 text-sm text-neutral-400">
                  <li className="hover:text-white cursor-pointer transition">
                    Акустические
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Электроакустические гитары
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Трансакустические гитары
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Электрогитары
                  </li>
                  <li className="hover:text-white cursor-pointer transition">
                    Классические гитары
                  </li>
                </ul>
              )}
            </div>

            <div className="mb-4">
              <button
                onClick={() => toggleMenu("ukulele")}
                className="flex items-center justify-between w-full text-left font-medium mb-3 hover:text-orange-500 transition"
              >
                УКУЛЕЛЕ
                <span
                  className={`transform transition-transform ${
                    openMenus.ukulele ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
            </div>

            <div className="mb-4">
              <button
                onClick={() => toggleMenu("accessories")}
                className="flex items-center justify-between w-full text-left font-medium mb-3 hover:text-orange-500 transition"
              >
                АКСЕССУАРЫ
                <span
                  className={`transform transition-transform ${
                    openMenus.accessories ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
            </div>

            <div className="mb-4">
              <button
                onClick={() => toggleMenu("strings")}
                className="flex items-center justify-between w-full text-left font-medium mb-3 hover:text-orange-500 transition"
              >
                СТРУНЫ
                <span
                  className={`transform transition-transform ${
                    openMenus.strings ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">Фильтры</h1>
                <span className="text-neutral-500">195</span>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-400">В названии</span>
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="bg-[#2a2a2a] text-white px-4 py-2 rounded text-sm outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-400">Сортировка</span>
                  <select className="bg-[#2a2a2a] text-white px-4 py-2 rounded text-sm outline-none cursor-pointer">
                    <option>По умолчанию</option>
                    <option>По цене возрастанию</option>
                    <option>По цене убыванию</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-400">
                    Показывать по
                  </span>
                  <select className="bg-[#2a2a2a] text-white px-4 py-2 rounded text-sm outline-none cursor-pointer">
                    <option>12</option>
                    <option>24</option>
                    <option>48</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://flagcdn.com/w20/es.png"
                    alt="ES"
                    className="cursor-pointer"
                  />
                  <img
                    src="https://flagcdn.com/w20/ru.png"
                    alt="RU"
                    className="cursor-pointer"
                  />
                  <img
                    src="https://flagcdn.com/w20/us.png"
                    alt="EN"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className=" flex flex-col gap-4">
              <div className="flex gap-4 ">
                <img src={ping} alt="" />
                <div className="w-[660px] bg-[#323136] py-5 rounded-br-4xl">
                  <div className="flex justify-between items-center px-5">
                    <h2 className="flex flex-col gap-1">
                      <span className="text-[#FFFFFF] text-[14px]">Комбоусилитель</span>
                      <span className="text-[24px] text-[#FFFFFF]">Joyo AC - 20</span>
                    </h2>
                    <img src={sertsi} alt="" />
                  </div>
                  <p className="px-5">
                    <span className="text-[#FFFFFF] text-[18px]">₽23 890</span>
                    <img src={star} alt="" />
                  </p>
                  <div className=" flex items-end gap-3 px-5">
                      <img src={toplam} alt="" />
                    <div>
                      <button className="w-[183px] p-2.5 bg-[#FFD60099] rounded-2xl hover:bg-amber-200 cursor-pointer">ПЕРЕЙТИ В КОРЗИНУ</button>
                      <p className="text-[14px] text-neutral-600">Добавить к сравнению </p>
                    </div>
                  </div>
                  <p className="text-[#FFD60099] px-5 text-[14px] ">в наличии</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src={magni} alt="" />
                <div className="w-[660px] bg-[#323136] py-5 rounded-br-4xl">
                  <div className="flex justify-between items-center px-5">
                    <h2 className="flex flex-col gap-1">
                      <span className="text-[#FFFFFF] text-[14px]">Комбоусилитель</span>
                      <span className="text-[24px] text-[#FFFFFF]">Joyo AC - 20</span>
                    </h2>
                    <img src={sertsi} alt="" />
                  </div>
                  <p className="px-5">
                    <span className="text-[#FFFFFF] text-[18px]">₽23 890</span>
                    <img src={star} alt="" />
                  </p>
                  <div className=" flex items-end gap-3 px-5">
                      <img src={toplam} alt="" />
                    <div>
                      <button className="w-[183px] p-2.5 bg-[#FFD60099] rounded-2xl hover:bg-amber-200 cursor-pointer">ПЕРЕЙТИ В КОРЗИНУ</button>
                      <p className="text-[14px] text-neutral-600">Добавить к сравнению </p>
                    </div>
                  </div>
                  <p className="text-[#FFD60099] px-5 text-[14px] ">в наличии</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src={qolif} alt="" />
                <div className="w-[660px] bg-[#323136] py-5 rounded-br-4xl">
                  <div className="flex justify-between items-center px-5">
                    <h2 className="flex flex-col gap-1">
                      <span className="text-[#FFFFFF] text-[14px]">Комбоусилитель</span>
                      <span className="text-[24px] text-[#FFFFFF]">Joyo AC - 20</span>
                    </h2>
                    <img src={sertsi} alt="" />
                  </div>
                  <p className="px-5">
                    <span className="text-[#FFFFFF] text-[18px]">₽23 890</span>
                    <img src={star} alt="" />
                  </p>
                  <div className=" flex items-end gap-3 px-5">
                      <img src={toplam} alt="" />
                    <div>
                      <button className="w-[183px] p-2.5 bg-[#FFD60099] rounded-2xl hover:bg-amber-200 cursor-pointer">ПЕРЕЙТИ В КОРЗИНУ</button>
                      <p className="text-[14px] text-neutral-600">Добавить к сравнению </p>
                    </div>
                  </div>
                  <p className="text-[#FFD60099] px-5 text-[14px] ">в наличии</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-8">
              <button className="px-4 py-2 bg-[#2a2a2a] rounded hover:bg-orange-500 transition">
                Первая
              </button>
              <button className="px-4 py-2 bg-[#2a2a2a] rounded hover:bg-orange-500 transition">
                «
              </button>
              {[1, 2, 3, 4, 5, 6].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded transition ${
                    page === 1
                      ? "bg-orange-500"
                      : "bg-[#2a2a2a] hover:bg-orange-500"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 bg-[#2a2a2a] rounded hover:bg-orange-500 transition">
                »
              </button>
              <button className="px-4 py-2 bg-[#2a2a2a] rounded hover:bg-orange-500 transition">
                Последняя
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
