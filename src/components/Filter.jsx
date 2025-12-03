import React, { useState } from "react";
import { Heart } from "lucide-react";
import gitaru from "../assets/img/gitaru.png";
import star from "../assets/svg/star.svg";

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
          {/* Left Sidebar - Filter */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 h-fit sticky top-4">
            <h2 className="text-xl font-semibold mb-6">Каталог</h2>

            {/* ГИТАРЫ */}
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

            {/* УКУЛЕЛЕ */}
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

            {/* АКСЕССУАРЫ */}
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

            {/* СТРУНЫ */}
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

          {/* Right Side - Products */}
          <div>
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">Фильтры</h1>
                <span className="text-neutral-500">195</span>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                {/* Search */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-400">В названии</span>
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="bg-[#2a2a2a] text-white px-4 py-2 rounded text-sm outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-400">Сортировка</span>
                  <select className="bg-[#2a2a2a] text-white px-4 py-2 rounded text-sm outline-none cursor-pointer">
                    <option>По умолчанию</option>
                    <option>По цене возрастанию</option>
                    <option>По цене убыванию</option>
                  </select>
                </div>

                {/* Display */}
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

                {/* Language flags */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
              <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
              <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
               <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
               <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
               <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
               <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
               <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
               <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
               <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
               <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
              <div iv className="w-[220px] bg-[#3B3A40] rounded-t-full">
                <img src={gitaru} alt="" />
                <h3 className="flex flex-col mb-3 px-3">
                  <span className="text-[14px] text-[#FFFFFF]">Укулеле</span>
                  <span className="text-[#FFFFFF] text-[24px">
                    Enya EUC-MAD
                  </span>
                </h3>
                <div className="flex items-center justify-between px-3 gap-7">
                  <p className="flex flex-col ">
                    <span className="text-[#B1B0B3] text-[14px] line-through">
                      ₽24 890
                    </span>
                    <span className="text-[18px] text-[#FFFFFF]">₽24 890</span>
                  </p>
                  <p>
                    <img src={star} alt="" />
                    <span className="text-[#B1B0B3] text-[14px]">
                      7 отзывов
                    </span>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>

            {/* Pagination */}
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
