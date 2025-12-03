import React from 'react'
import lest from '../assets/img/lest.png'

const Contact = () => {
  return (
    <section className='bg-[#1a1a1a] text-white py-16 relative overflow-hidden'>
      <div className='max-w-[1200px] m-auto px-4 md:px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          <div className='relative'>
            <div className='absolute -top-20 -left-20 w-[500px] h-[400px] bg-[#8B5A2B] rounded-[100px] opacity-80 blur-sm -z-10'></div>
            
            <div className='absolute -left-8 top-0 opacity-60'>
              <svg width="120" height="300" viewBox="0 0 120 300" fill="none">
                <ellipse cx="60" cy="250" rx="50" ry="50" fill="#333" stroke="#fff" strokeWidth="2"/>
                <rect x="50" y="50" width="20" height="200" fill="#333" stroke="#fff" strokeWidth="2"/>
                <circle cx="60" cy="100" r="35" fill="none" stroke="#fff" strokeWidth="2"/>
              </svg>
            </div>

            <div className='absolute -right-8 top-0 opacity-60'>
              <svg width="120" height="300" viewBox="0 0 120 300" fill="none">
                <ellipse cx="60" cy="250" rx="50" ry="50" fill="#333" stroke="#fff" strokeWidth="2"/>
                <rect x="50" y="50" width="20" height="200" fill="#333" stroke="#fff" strokeWidth="2"/>
                <circle cx="60" cy="100" r="35" fill="none" stroke="#fff" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className='relative z-10 rounded-lg overflow-hidden shadow-2xl'>
              <img src={lest} alt="" />
            </div>
          </div>

          <div className='space-y-6'>
            <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
              У НАС ШИРОКИЙ ВЫБОР<br />
              ИНСТРУМЕНТОВ
            </h2>

            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-0.5 bg-orange-500'></div>
                <p className='text-lg text-neutral-300'>Акустические</p>
              </div>
              
              <div className='flex items-center gap-3'>
                <div className='w-12 h-0.5 bg-orange-500'></div>
                <p className='text-lg text-neutral-300'>Трансакустические</p>
              </div>
              
              <div className='flex items-center gap-3'>
                <div className='w-12 h-0.5 bg-orange-500'></div>
                <p className='text-lg text-neutral-300'>Электроакустические</p>
              </div>
              
              <div className='flex items-center gap-3'>
                <div className='w-12 h-0.5 bg-orange-500'></div>
                <p className='text-lg text-neutral-300'>Классические</p>
              </div>
              
              <div className='flex items-center gap-3'>
                <div className='w-12 h-0.5 bg-orange-500'></div>
                <p className='text-lg text-neutral-300'>Тревел-гитары</p>
              </div>
              
              <div className='flex items-center gap-3'>
                <div className='w-12 h-0.5 bg-orange-500'></div>
                <p className='text-lg text-neutral-300'>Электрогитары</p>
              </div>
            </div>

            <div className='pt-6 space-y-4 text-[14px] text-neutral-400 leading-relaxed'>
              <p>
                Хорошая акустическая гитара – верный путь к правильному восприятию нот, а значит, она способна ускорить процесс обучения игры на музыкальном инструменте. Компания Guitar Lavka предлагает купить акустическую гитару с доставкой от ведущих производителей – Cort, Enya и Sigma Guitars.
              </p>
              
              <p>
                Каждая гитара акустическая, цена на которую меньше 5000 рублей (дешевые модели), часто искажают качество звука при игре, что затрудняет обучение, однако это не означает, что невозможно найти недорогую гитару в интернет- магазине Guitar Lavka. В каталоге имеется базовая акустика без каких-либо наворотов, стоимость до 10000 рублей. Такие модели лишены дополнительного лоска, но самое главное – они не искажают звук и способны правильно научить слушать ритм, ноты и такты при обучении.
              </p>
              
              <a href="#" className='text-orange-500 hover:underline inline-block'>
                подробнее...
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className='absolute top-0 right-0 w-[600px] h-[400px] bg-[#8B5A2B] rounded-[150px] opacity-60 blur-2xl -z-20 translate-x-1/3 -translate-y-1/4'></div>
    </section>
  )
}

export default Contact