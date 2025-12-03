import React from 'react'
import gitari from '../assets/img/gitari.png'
import ukule from '../assets/img/ukule.png'
import sturn from '../assets/img/sturn.png'
import aksesuar from '../assets/img/aksesuar.png'
import odamcha from '../assets/svg/odamcha.svg'
import kepme from '../assets/svg/kepme.svg'
import elihe from '../assets/svg/elihe.svg'
import icon from '../assets/svg/icon.svg'
import gold from '../assets/svg/gold.svg'
import kremona from '../assets/svg/kremona.svg'
import imzo from '../assets/svg/imzo.svg'
import tom from '../assets/svg/tom.svg'
import enya from '../assets/svg/enya.svg'
import sembol from '../assets/svg/sembol.svg'

const About = () => {
  return (
    <section className='mb-20'>
        <div className='max-w-[1100px] m-auto mb-10'>
            <div className='flex flex-col items-center gap-8'>
                <div className='flex items-center justify-between gap-8'>
                    <img src={gitari} alt="" className='rounded-sm'/>
                    <img src={ukule} alt="" className='rounded-sm' />
                </div>
                <div className='flex items-center justify-between gap-8'>
                    <img src={aksesuar} alt="" className='rounded-sm'/>
                    <img src={sturn} alt="" className='rounded-sm' />
                </div>
            </div>
        </div>
        <div className='bg-[#CC7408] py-8'>
            <div className='max-w-[1100px] m-auto'>
                <div className='flex items-center justify-between '>
                    <img src={odamcha} alt=""  className='cursor-pointer'/>
                    <img src={kepme} alt="" className='cursor-pointer'/>
                    <img src={elihe} alt="" className='cursor-pointer'/>
                    <img src={icon} alt="" className='cursor-pointer'/>
                    <img src={gold} alt="" className='cursor-pointer'/>
                </div>
                <div className='flex items-center justify-between '>
                    <img src={kremona} alt="" className='cursor-pointer'/>
                    <img src={imzo} alt="" className='cursor-pointer'/>
                    <img src={tom} alt="" className='cursor-pointer'/>
                    <img src={enya} alt="" className='cursor-pointer'/>
                    <img src={sembol} alt="" className='cursor-pointer'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About