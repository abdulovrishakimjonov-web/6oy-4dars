import React, { useState } from 'react'
import glav from '../assets/img/glav.png'
import racing from '../assets/svg/racing.svg'

const Catalog = () => {
  const [activeTab, setActiveTab] = useState('ОПИСАНИЕ')
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState(0)

  const images = [
    'racing',
    '/path-to-amplifier-2.jpg',
    '/path-to-amplifier-3.jpg',
    '/path-to-amplifier-4.jpg'
  ]

  const tabs = ['ОПИСАНИЕ', 'ХАРАКТЕРИСТИКИ', 'ОТЗЫВЫ', 'ДОСТАВКА И ОПЛАТА', 'ВИДЕО']

  return (
    <div className='bg-[#0f0f0f] min-h-screen text-white'>
      <div className='max-w-[1400px] m-auto px-4 md:px-10 py-8'>
        
        {/* Main Product Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12'>
          
          {/* Left Side - Images */}
          <div className='flex items-center gap-7'>
            <div className='flex flex-col w-[90px] gap-8 '>
              {images.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setMainImage(index)}
                  className={`bg-[#2a2a2a] rounded-lg aspect-square cursor-pointer hover:ring-2 hover:ring-orange-500 transition ${
                    mainImage === index ? 'ring-2 ring-orange-500' : ''
                  }`}
                >
                  <div className='w-full h-full flex items-center justify-center'>
                    <span className='text-xs text-neutral-600'>Img {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
            <img src={glav} alt="" />
          </div>

          {/* Right Side - Product Info */}
          <div className='space-y-6'>
            <div>
              <p className='text-sm text-neutral-500 mb-2'>Комбоусилитель</p>
              <h1 className='text-4xl font-bold mb-2'>Joyo AC - 20</h1>
              <div className='inline-block bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded mb-4'>
                ⚡ ОЖИДАЕТСЯ В КОНЦЕ НЕДЕЛИ
              </div>
            </div>

            <p className='text-neutral-400 leading-relaxed'>
              Самая хорошая домашняя студия просто не может существовать без отличной акустики. Благодаря мягко, насыщенно и ясно звучащему звуку этот комбо-усилитель делает вас героями на любых концертах и идеальных студийных записях, подробнее читайте в описании...
            </p>

            {/* Price and Rating */}
            <div className='flex items-end gap-6'>
              <div>
                <p className='text-5xl font-bold text-orange-500'>₽24 890</p>
                <p className='text-sm text-neutral-500 mt-1'>в наличии</p>
              </div>
              
              <div className='flex flex-col items-start'>
                <div className='flex gap-1 mb-1'>
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star} className='text-orange-500 text-xl'>★</span>
                  ))}
                </div>
                <p className='text-sm text-neutral-400'>42 ОТЗЫВА В 5 СОЦК.</p>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className='flex gap-4'>
              <div className='flex items-center bg-[#2a2a2a] rounded-lg'>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='px-4 py-3 hover:text-orange-500 transition text-xl'
                >
                  −
                </button>
                <span className='px-6 py-3 border-x border-neutral-700'>{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className='px-4 py-3 hover:text-orange-500 transition text-xl'
                >
                  +
                </button>
              </div>

              <button className='flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition'>
                В КОРЗИНУ
              </button>

              <button className='bg-[#2a2a2a] hover:bg-orange-500 p-3 rounded-lg transition'>
                🤍
              </button>
            </div>

            {/* Additional Actions */}
            <div className='flex gap-3'>
              <button className='flex-1 bg-[#2a2a2a] hover:bg-neutral-700 text-white py-3 px-4 rounded-lg transition text-sm'>
                КУПИТЬ В 1 КЛИК
              </button>
              <button className='flex-1 bg-[#2a2a2a] hover:bg-neutral-700 text-white py-3 px-4 rounded-lg transition text-sm'>
                В СРАВНЕНИЕ →
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className='bg-[#1a1a1a] rounded-lg overflow-hidden'>
          {/* Tab Headers */}
          <div className='flex border-b border-neutral-700 overflow-x-auto'>
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition ${
                  activeTab === tab 
                    ? 'text-orange-500 border-b-2 border-orange-500' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className='p-8'>
            {activeTab === 'ОПИСАНИЕ' && (
              <div className='space-y-3 text-neutral-400'>
                <p className='text-white font-semibold mb-4'>ОСОБЕННОСТИ:</p>
                <ul className='space-y-2 list-none'>
                  <li className='flex items-start gap-2'>
                    <span className='text-orange-500 mt-1'>•</span>
                    <span>Кленовый 12" динамик</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-orange-500 mt-1'>•</span>
                    <span>Два динамических драйвертика за 5см</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-orange-500 mt-1'>•</span>
                    <span>Вес: 6,8 кг</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-orange-500 mt-1'>•</span>
                    <span>Габариты: 378 x 345 x 195мм (Ш*В*Г)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-orange-500 mt-1'>•</span>
                    <span>Цифровые эффекты: Chorus, Delay</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-orange-500 mt-1'>•</span>
                    <span>Множество простых элементов 200мвт</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-orange-500 mt-1'>•</span>
                    <span>Reverb</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-orange-500 mt-1'>•</span>
                    <span>Регулятор громкости</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'ХАРАКТЕРИСТИКИ' && (
              <div className='text-neutral-400'>
                <p>Характеристики товара будут здесь...</p>
              </div>
            )}

            {activeTab === 'ОТЗЫВЫ' && (
              <div className='text-neutral-400'>
                <p>Отзывы покупателей будут здесь...</p>
              </div>
            )}

            {activeTab === 'ДОСТАВКА И ОПЛАТА' && (
              <div className='text-neutral-400'>
                <p>Информация о доставке и оплате будет здесь...</p>
              </div>
            )}

            {activeTab === 'ВИДЕО' && (
              <div className='text-neutral-400'>
                <p>Видео обзоры будут здесь...</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Catalog