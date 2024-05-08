"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false);    

    return (
        <header className="container max-w-screen-xl m-auto py-3 md:py-8">
            <nav className="hidden md:flex items-center justify-between">
                <Image
                    src={'/images/Logo.png'}
                    width={155}
                    height={51}
                    className="w-36 h-12 object-cover"
                    alt="Logo"
                />
                <ul className="flex items-center gap-x-4 lg:gap-x-6 text-sm lg:text-xl text-neutral-800">
                    <li>
                        <Link href={`/`} className="text-primary font-bold border-b-2 border-primary">صفحه اصلی</Link>
                    </li>
                    <li>
                        <Link href={`/`} className="relative flex items-center gap-x-1 group">
                            شعبه
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            <ul className="invisible divide-y divide-neutral-500 *:p-2 text-sm text-neutral-900 absolute top-10 -right-20 bg-white w-36 z-10 rounded-sm shadow opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                                <li>
                                    اکباتان
                                </li>
                                <li>
                                    چالوس
                                </li>
                                <li>
                                    اقدسیه
                                </li>
                                <li>
                                    ونک
                                </li>
                            </ul>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/`} className="relative flex items-center gap-x-1 group">
                            منو
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            <ul className="invisible divide-y divide-neutral-500 *:p-2 text-sm text-neutral-900 absolute top-10 right-0 bg-white w-36 z-10 rounded-sm shadow opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                                <li>
                                    غذای اصلی
                                </li>
                                <li>
                                    پیش غذا
                                </li>
                                <li>
                                    دسر
                                </li>
                                <li>
                                    نوشیدنی
                                </li>
                            </ul>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/`}>اعطای نمایندگی</Link>
                    </li>
                    <li>
                        <Link href={`/`}>درباره ما</Link>
                    </li>
                    <li>
                        <Link href={`/`}>تماس با ما</Link>
                    </li>
                </ul>
                <div className="flex items-center gap-x-2">
                    <button className="bg-tint-100 text-primary p-sm rounded-xs transition-all duration-150 ease-in hover:bg-primary hover:text-tint-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <button className="bg-tint-100 text-primary p-sm rounded-xs transition-all duration-150 ease-in hover:bg-primary hover:text-tint-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                    <button className="bg-tint-100 text-primary p-sm rounded-xs transition-all duration-150 ease-in hover:bg-primary hover:text-tint-100 relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <ul className="invisible divide-y divide-neutral-500 *:p-2 text-sm text-neutral-900 absolute rounded-sm top-14 -right-[6.5rem] bg-white w-36 z-10 text-start shadow opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <li className="flex text-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                پروفایل
                            </li>
                            <li className="flex text-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>
                                پیگیری سفارش
                            </li>
                            <li className="flex text-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                علاقه‌مندی‌ها
                            </li>
                            <li className="flex text-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                آدرس‌های من
                            </li>
                            <li className="flex text-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>
                                خروج از حساب
                            </li>
                        </ul>
                    </button>
                </div>
            </nav>
            <div className="flex items-center justify-between md:hidden">
                <div className={`${isOpenMenu ? 'w-64 bg-white h-full fixed top-0 right-0 z-10 opacity-100' : 'bg-white h-full fixed top-0 -right-64 z-10 opacity-0'} transition-all duration-300 ease-in-out`}>
                    <div className="relative">
                        <Image
                            src={'/images/menu.jpg'}
                            width={256}
                            height={94}
                            alt="menu"
                        />
                        <div className="absolute top-0 left-0 right-0 p-md z-10">
                            <div className="flex items-center justify-between">
                                <Image
                                    src={'/images/Logo-sidebar.png'}
                                    width={67}
                                    height={30}
                                    alt="menu"
                                />
                                <div className="cursor-pointer" onClick={() => setIsOpenMenu(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-full h-full bg-[#000000] top-0 left-0 right-0 bottom-0 opacity-70"></div>
                    </div>
                    <div className="p-md">
                        <ul className="divide-y divide-neutral-500 *:p-2">
                            <li>
                                <Link href={`/`} className="flex items-center gap-x-2 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li>
                                <Link href={`/`}>
                                    <div className="flex items-center justify-between w-full" onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}>
                                        <div className="flex items-center gap-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                            منو
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                    <ul className={`${isOpenSubMenu ? 'visible' : 'hidden'} divide-y divide-neutral-500 *:p-2 pr-2 text-sm transition-all duration-300 ease-in-out`}>
                                        <li>
                                            غذای اصلی
                                        </li>
                                        <li>
                                            پیش غذا
                                        </li>
                                        <li>
                                            دسر
                                        </li>
                                        <li>
                                            نوشیدنی
                                        </li>
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/`}>
                                    <div className="flex items-center justify-between w-full" onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}>
                                        <div className="flex items-center gap-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                                            </svg>
                                            شعبه
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                    <ul className={`${isOpenSubMenu ? 'visible' : 'hidden'} divide-y divide-neutral-500 *:p-2 pr-2 text-sm transition-all duration-300 ease-in-out`}>
                                        <li>
                                            اکباتان
                                        </li>
                                        <li>
                                            چالوس
                                        </li>
                                        <li>
                                            اقدسیه
                                        </li>
                                        <li>
                                            ونک
                                        </li>
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/`} className="flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    درباره ما
                                </Link>
                            </li>
                            <li>
                                <Link href={`/`} className="flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    تماس با ما
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {isOpenMenu && (
                    <div
                        className="bg-[#000000] w-full h-screen fixed top-0 left-0 right-0 bottom-0 z-[2] opacity-60 transition-all duration-300 ease-in-out"
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
                    ></div>
                )}

                <div className="cursor-pointer" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <Image
                    src={'/images/Logo.png'}
                    width={102}
                    height={32}
                    alt="Logo"
                />
                <div className="flex items-center gap-x-2">
                    <button className="bg-tint-100 text-primary p-sm rounded-xs transition-all duration-150 ease-in hover:bg-primary hover:text-tint-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                    <button className="bg-tint-100 text-primary p-sm rounded-xs transition-all duration-150 ease-in hover:bg-primary hover:text-tint-100 relative group z-[1]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <ul className="invisible divide-y divide-neutral-500 *:p-2 text-sm text-neutral-900 absolute rounded-sm top-14 -right-[6.5rem] bg-white w-36 text-start shadow opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <li className="flex text-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                پروفایل
                            </li>
                            <li className="flex text-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>
                                پیگیری سفارش
                            </li>
                            <li className="flex text-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                علاقه‌مندی‌ها
                            </li>
                            <li className="flex text-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                آدرس‌های من
                            </li>
                            <li className="flex text-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>
                                خروج از حساب
                            </li>
                        </ul>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar