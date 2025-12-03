import React, { useState } from 'react'
import watsab from '../assets/svg/watsab.svg'
import teligram from '../assets/svg/teligram.svg'
import vk from '../assets/svg/vk.svg'
import vaybet from '../assets/svg/vaybet.svg'
import yutube from '../assets/svg/yutube.svg'
import insta from '../assets/svg/insta.svg'
import search from '../assets/svg/search.svg'
import logo from '../assets/svg/logo.svg'
import { NavLink } from 'react-router-dom'
import sertsi from '../assets/svg/sertsi.svg'
import shop from '../assets/svg/shop.svg'

const Hemader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='text-white mb-8'>
        <div className='sticky top-0 left-0 z-50 bg-[#1a1a1a]'>
            <div className='px-4 md:px-10 py-3 flex items-center justify-between flex-wrap gap-3'>
                <div className='flex items-center gap-3'>
                    <p className='text-[11px] md:text-[13px] text-neutral-400'>Ваш город:</p>
                    <p className='text-[11px] md:text-[13px] text-white'>Самара</p>
                </div>

                <div className='hidden lg:flex items-center gap-4'>
                    <img src={watsab} alt="WhatsApp" className='w-5 h-5 cursor-pointer hover:opacity-80 transition' />
                    <img src={teligram} alt="Telegram" className='w-5 h-5 cursor-pointer hover:opacity-80 transition' />
                    <img src={vk} alt="VK" className='w-5 h-5 cursor-pointer hover:opacity-80 transition' />
                    <img src={vaybet} alt="Viber" className='w-5 h-5 cursor-pointer hover:opacity-80 transition' />
                    <img src={yutube} alt="YouTube" className='w-5 h-5 cursor-pointer hover:opacity-80 transition' />
                    <img src={insta} alt="Instagram" className='w-5 h-5 cursor-pointer hover:opacity-80 transition' />
                </div>

                <div className='flex items-center gap-3 md:gap-6'>
                    <a href="tel:88001002680" className='text-[11px] md:text-[13px] text-white hover:text-orange-500 transition'>
                        📞 8 (800) 100 26 80
                    </a>
                    <p className='hidden sm:block text-[11px] md:text-[13px] text-neutral-400'>ЕЖЕДНЕВНО 10:00-20:00</p>
                </div>
            </div>
            <div className='w-full h-0.5 bg-neutral-700'></div>
        </div>

        <div className='max-w-[1100px] m-auto px-4 md:px-6 py-4'>
            <div className='flex items-center justify-between flex-wrap lg:flex-nowrap gap-4'>
                <div className='flex items-center gap-2 order-1'>
                   <img src={search} alt="" className='w-5 h-5' />
                   <p className='text-[12px] md:text-[14px] text-[#FFFFFF] hidden sm:block'>ПОИСК</p>
                </div>

                <div className='flex flex-col items-center order-2 lg:order-2 w-full lg:w-auto'>
                    <img src={logo} alt=""/>
                    
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='lg:hidden text-white text-2xl mb-2'
                    >
                        ☰
                    </button>
                    <div className='hidden lg:flex gap-3 xl:gap-6 text-[11px] xl:text-[13px]'>
                        <NavLink to={'/'} className='hover:text-orange-500 transition'>КАТАЛОГ</NavLink>
                        <NavLink to={'/katalog'} className='hover:text-orange-500 transition'>УСЛУГИ</NavLink>
                        <NavLink to={'/uslug'} className='hover:text-orange-500 transition'>О НАС</NavLink>
                        <NavLink to={'/tavare'} className='hover:text-orange-500 transition'>ДОСТАВКА</NavLink>
                        <NavLink to={'/remont'} className='hover:text-orange-500 transition'>ОТЗЫВЫ</NavLink>
                        <NavLink to={'/'} className='hover:text-orange-500 transition'>ОБУЧЕНИЕ</NavLink>
                        <NavLink to={'/'} className='hover:text-orange-500 transition'>КОНТАКТЫ</NavLink>
                        <NavLink to={'/'} className='hover:text-orange-500 transition'>ОПТ</NavLink>
                    </div>

                    {/* Mobile menu */}
                    {menuOpen && (
                        <div className='lg:hidden flex flex-col gap-3 text-[13px] mt-3 w-full text-center bg-[#252525] p-4 rounded'>
                            <NavLink to={'/'} className='hover:text-orange-500 transition' onClick={() => setMenuOpen(false)}>КАТАЛОГ</NavLink>
                            <NavLink to={'/katalog'} className='hover:text-orange-500 transition' onClick={() => setMenuOpen(false)}>УСЛУГИ</NavLink>
                            <NavLink to={'/uslug'} className='hover:text-orange-500 transition' onClick={() => setMenuOpen(false)}>О НАС</NavLink>
                            <NavLink to={'/tavare'} className='hover:text-orange-500 transition' onClick={() => setMenuOpen(false)}>ДОСТАВКА</NavLink>
                            <NavLink to={'/remont'} className='hover:text-orange-500 transition' onClick={() => setMenuOpen(false)}>ОТЗЫВЫ</NavLink>
                            <NavLink to={'/'} className='hover:text-orange-500 transition' onClick={() => setMenuOpen(false)}>ОБУЧЕНИЕ</NavLink>
                            <NavLink to={'/'} className='hover:text-orange-500 transition' onClick={() => setMenuOpen(false)}>КОНТАКТЫ</NavLink>
                            <NavLink to={'/'} className='hover:text-orange-500 transition' onClick={() => setMenuOpen(false)}>ОПТ</NavLink>
                        </div>
                    )}
                </div>

                {/* Icons */}
                <div className='flex items-center gap-5 md:gap-7 order-3'>
                    <img src={sertsi} alt="" className='w-6 h-6 cursor-pointer hover:opacity-80 transition' />
                    <img src={shop} alt="" className='w-6 h-6 cursor-pointer hover:opacity-80 transition' />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Hemader