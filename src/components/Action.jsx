import React from 'react'
import gitaru from '../assets/img/gitaru.png'
import star from '../assets/svg/star.svg'
import usta from '../assets/img/usta.png'
import spikin from '../assets/img/spikin.png'
import gusht from '../assets/img/gusht.png'

const Action = () => {
  return (
    <section>
        <div className='max-w-[1100px] m-auto'>
            <div className='flex flex-col justify-center items-center gap-2 mb-12'>
                <h2 className='text-[#FFFFFF] text-[36px] font-semibold'>Популярные товары</h2>
                <div className='w-[300px] h-0.5 bg-[#D87700]'></div>
            </div>
            <div className='flex items-center justify-center gap-10 mb-12'>
                <div className='w-[220px] bg-[#3B3A40] rounded-t-full'>
                    <img src={gitaru} alt="" />
                    <h3 className='flex flex-col mb-3 px-3'>
                        <span className='text-[14px] text-[#FFFFFF]'>Укулеле</span>
                        <span className='text-[#FFFFFF] text-[24px'>Enya EUC-MAD</span >
                    </h3>
                   <div className='flex items-center justify-between px-3 gap-7'>
                     <p className='flex flex-col '>
                        <span className='text-[#B1B0B3] text-[14px] line-through'>₽24 890</span>
                        <span className='text-[18px] text-[#FFFFFF]'>₽24 890</span>
                    </p>
                    <p>
                        <img src={star} alt="" />
                        <span className='text-[#B1B0B3] text-[14px]'>7 отзывов</span>
                    </p>
                    <p></p>
                   </div>
                </div>
                 <div className='w-[220px] bg-[#3B3A40] rounded-t-full'>
                    <img src={gitaru} alt="" />
                    <h3 className='flex flex-col mb-3 px-3'>
                        <span className='text-[14px] text-[#FFFFFF]'>Укулеле</span>
                        <span className='text-[#FFFFFF] text-[24px'>Enya EUC-MAD</span >
                    </h3>
                   <div className='flex items-center justify-between px-3 gap-7'>
                     <p className='flex flex-col '>
                        <span className='text-[#B1B0B3] text-[14px] line-through'>₽24 890</span>
                        <span className='text-[18px] text-[#FFFFFF]'>₽24 890</span>
                    </p>
                    <p>
                        <img src={star} alt="" />
                        <span className='text-[#B1B0B3] text-[14px]'>7 отзывов</span>
                    </p>
                    <p></p>
                   </div>
                </div>
                 <div className='w-[220px] bg-[#3B3A40] rounded-t-full'>
                    <img src={gitaru} alt="" />
                    <h3 className='flex flex-col mb-3 px-3'>
                        <span className='text-[14px] text-[#FFFFFF]'>Укулеле</span>
                        <span className='text-[#FFFFFF] text-[24px'>Enya EUC-MAD</span >
                    </h3>
                   <div className='flex items-center justify-between px-3 gap-7'>
                     <p className='flex flex-col '>
                        <span className='text-[#B1B0B3] text-[14px] line-through'>₽24 890</span>
                        <span className='text-[18px] text-[#FFFFFF]'>₽24 890</span>
                    </p>
                    <p>
                        <img src={star} alt="" />
                        <span className='text-[#B1B0B3] text-[14px]'>7 отзывов</span>
                    </p>
                    <p></p>
                   </div>
                </div>
                 <div className='w-[220px] bg-[#3B3A40] rounded-t-full'>
                    <img src={gitaru} alt="" />
                    <h3 className='flex flex-col mb-3 px-3'>
                        <span className='text-[14px] text-[#FFFFFF]'>Укулеле</span>
                        <span className='text-[#FFFFFF] text-[24px'>Enya EUC-MAD</span >
                    </h3>
                   <div className='flex items-center justify-between px-3 gap-7'>
                     <p className='flex flex-col '>
                        <span className='text-[#B1B0B3] text-[14px] line-through'>₽24 890</span>
                        <span className='text-[18px] text-[#FFFFFF]'>₽24 890</span>
                    </p>
                    <p>
                        <img src={star} alt="" />
                        <span className='text-[#B1B0B3] text-[14px]'>7 отзывов</span>
                    </p>
                    <p></p>
                   </div>
                </div>
            </div>

            <div>
                <div className='flex flex-col justify-center items-center gap-2 mb-12'>
                <h2 className='text-[#FFFFFF] text-[36px] font-semibold'>Услуги</h2>
                <div className='w-[300px] h-0.5 bg-[#D87700]'></div>
            </div>
                <div className='flex justify-center gap-13 '>
                <div class="relative">
                <img src={usta} class="w-[300px] object-cover" />
              <p class="absolute bottom-0 text-white bg-black/50 px-23 py-7 text-[24px]"> ОБУЧЕНИЕ</p>
            </div>
            <div>
                <img src={gusht} class="w-[300px] object-cover" />
              <p className='absolute bottom-0 bg-black/50 px-20 text-[19px] text-[#EA8305] p'>ПОКАЗАТЬ ЕЩЁ</p>
             </div>
                <div class="relative">
                <img src={spikin} class="w-[300px] object-cover" />
              <p class="absolute bottom-0 text-white bg-black/50 px-23 py-7 text-[24px]"> РЕМОНТ</p>
             </div>
             </div>
            </div>
        </div>
    </section>
  )
}

export default Action