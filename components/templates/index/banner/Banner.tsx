'use client';

import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/styles/banner.css';

const Banner = () => {
    return (
        <div className="w-full h-44 md:h-80">
            <Swiper
                autoplay={{
                    delay: 3000
                }}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next'
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className='mySwiper relative h-full'
            >
                <SwiperSlide>
                    <div className="relative h-full">
                        <Image
                            src={'/images/Slider.png'}
                            width={1440}
                            height={336}
                            className="w-full h-full object-cover"
                            alt="Banner"
                        />
                        <div className="flex flex-col items-center justify-center gap-y-10 absolute top-0 w-full h-full">
                            <h2 className="text-white text-base md:text-2xl lg:text-[2.5rem] font-bold text-center">تجربه غذای سالم و گیاهی به سبک ترخینه</h2>
                        </div>
                        <button className="text-[10px] md:text-base rounded bg-primary p-2 md:px-4 text-white text-center flex items-center justify-center absolute z-10 h-6 w-24 md:h-10 md:w-48 left-0 right-0 mx-auto bottom-10 md:bottom-16">سفارش آنلاین غذا</button>
                        <div className="w-20 h-5 md:h-6 md:w-32 absolute left-0 right-0 -bottom-[3px] z-10 mx-auto">
                            <svg id="navigation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 35" fill="none">
                                <path d="M13.1492 12.9957C15.3255 5.56588 21.9046 0 29.6466 0H125.118C132.571 0 138.998 5.16164 141.261 12.2634C144.25 21.6506 148.867 33 153.711 33C161.97 33 -9.49755 33 0.41389 33C6.07606 33 10.4444 22.2302 13.1492 12.9957Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full">
                        <Image
                            src={'/images/Slider.png'}
                            width={1440}
                            height={336}
                            className="w-full h-full object-cover"
                            alt="Banner"
                        />
                        <div className="flex flex-col items-center justify-center gap-y-10 absolute top-0 w-full h-full">
                            <h2 className="text-white text-base md:text-2xl lg:text-[2.5rem] font-bold text-center">تجربه غذای سالم و گیاهی به سبک ترخینه</h2>
                        </div>
                        <button className="text-[10px] md:text-base rounded bg-primary p-2 md:px-4 text-white text-center flex items-center justify-center absolute z-10 h-6 w-24 md:h-10 md:w-48 left-0 right-0 mx-auto bottom-10 md:bottom-16">سفارش آنلاین غذا</button>
                        <div className="w-20 h-5 md:h-6 md:w-32 absolute left-0 right-0 -bottom-[3px] z-10 mx-auto">
                            <svg id="navigation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 35" fill="none">
                                <path d="M13.1492 12.9957C15.3255 5.56588 21.9046 0 29.6466 0H125.118C132.571 0 138.998 5.16164 141.261 12.2634C144.25 21.6506 148.867 33 153.711 33C161.97 33 -9.49755 33 0.41389 33C6.07606 33 10.4444 22.2302 13.1492 12.9957Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="hidden sm:flex absolute top-0 z-10 left-0 right-0 items-center justify-between px-6 h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-8 h-8 prev cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-8 h-8 next cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
            </Swiper>
        </div>
    )
}

export default Banner