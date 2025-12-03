import React from 'react'
import logomain from '../assets/img/logomain.png'
import watsab from '../assets/svg/watsab.svg'
import teligram from '../assets/svg/teligram.svg'
import vk from '../assets/svg/vk.svg'
import vaybet from '../assets/svg/vaybet.svg'
import yutube from '../assets/svg/yutube.svg'
import insta from '../assets/svg/insta.svg'
import phone from '../assets/img/phone.png'


const Footer = () => {
  return (
    <footer className='bg-[#1a1a1a] text-white py-12'>
      <div className='max-w-[1100px] m-auto px-4 md:px-10'>
        <div className='flex justify-between'>
          
          <div className='space-y-4'>
            <img src={logomain} alt="Guitar Lavka" className=' mb-4' />
            <p className='text-[14px] text-neutral-300 leading-relaxed'>
              Мы работаем по всей России,<br />
              поэтому можем сделать онлайн-показ<br />
              инструмента и доставить его до вашей двери
            </p>
            
            <div className='space-y-2 pt-4'>
              <p className='text-[14px] text-neutral-400'>Остались вопросы?</p>
              <a href="tel:88001002680" className='text-[20px] font-semibold hover:text-orange-500 transition'>
                8 (800) 100-26-80
              </a>
              <p className='text-[13px] text-neutral-400'>ЕЖЕДНЕВНО 10:00 - 20:00</p>
              <a href="mailto:info@guitarlavka.ru" className='text-[14px] text-neutral-300 hover:text-orange-500 transition'>
                info@guitarlavka.ru
              </a>
            </div>

            <div className='flex items-center gap-3 pt-2'>
              <img src={watsab} alt="WhatsApp" className='w-6 h-6 cursor-pointer hover:opacity-80 transition' />
              <img src={teligram} alt="Telegram" className='w-6 h-6 cursor-pointer hover:opacity-80 transition' />
              <img src={vk} alt="VK" className='w-6 h-6 cursor-pointer hover:opacity-80 transition' />
              <img src={vaybet} alt="Viber" className='w-6 h-6 cursor-pointer hover:opacity-80 transition' />
              <img src={yutube} alt="YouTube" className='w-6 h-6 cursor-pointer hover:opacity-80 transition' />
              <img src={insta} alt="Instagram" className='w-6 h-6 cursor-pointer hover:opacity-80 transition' />
            </div>

            <div className='pt-4'>
              <p className='text-[13px] text-neutral-400 mb-3'>СПОСОБЫ ОПЛАТЫ</p>
              <div className='flex items-center gap-2 flex-wrap'>
                <div className='bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold'>MIR</div>
                <div className='bg-white text-black px-3 py-1 rounded text-xs font-semibold'>СБП</div>
                <div className='bg-blue-500 text-white px-3 py-1 rounded text-xs font-semibold'>💳</div>
                <div className='bg-white text-blue-600 px-3 py-1 rounded text-xs font-semibold'>VISA</div>
                <div className='bg-gray-200 text-black px-3 py-1 rounded text-xs font-semibold'>💳</div>
              </div>
            </div>
          </div>

        <div className='flex flex-col'>
          <div className='flex gap-12 mb-8'>
          <div>
            <h3 className='text-[16px] font-semibold mb-4'>КАТАЛОГ</h3>
            <ul className='space-y-2 text-[14px] text-neutral-300'>
              <li><a href="#" className='hover:text-orange-500 transition'>Гитары</a></li>
              <li><a href="#" className='hover:text-orange-500 transition'>Укулеле</a></li>
              <li><a href="#" className='hover:text-orange-500 transition'>Аксессуары</a></li>
              <li><a href="#" className='hover:text-orange-500 transition'>Струны</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-[16px] font-semibold mb-4'>СЕРВИС</h3>
            <ul className='space-y-2 text-[14px] text-neutral-300'>
              <li><a href="#" className='hover:text-orange-500 transition'>Оплата</a></li>
              <li><a href="#" className='hover:text-orange-500 transition'>Гарантия</a></li>
              <li><a href="#" className='hover:text-orange-500 transition'>Доставка</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-[16px] font-semibold mb-4'>УСЛУГИ</h3>
            <ul className='space-y-2 text-[14px] text-neutral-300'>
              <li><a href="#" className='hover:text-orange-500 transition'>Ремонт</a></li>
              <li><a href="#" className='hover:text-orange-500 transition'>Онлайн подбор</a></li>
              <li><a href="#" className='hover:text-orange-500 transition'>Обучение</a></li>
              <li><a href="#" className='hover:text-orange-500 transition'>Комиссионка</a></li>
            </ul>
          </div>
          </div>

          <div className='hidden lg:block  right-10 bottom-0'>
          <img src={phone} alt="Instagram" className='w-64 h-auto' />
        </div>

          </div>
        </div>

        

        <div className='border-t border-neutral-700 mt-12 pt-6 text-center'>
          <p className='text-[13px] text-neutral-400'>© 2021 GuitarLavka - музыкальный магазин</p>
          <a href="#" className='text-[13px] text-neutral-400 hover:text-orange-500 transition'>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer