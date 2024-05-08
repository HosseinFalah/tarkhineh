import Menu from "./Menu"

const Menus = () => {
    return (
        <div className="container max-w-screen-xl m-auto">
            <div className="bg-white border border-neutral-500 xs:hidden relative rounded py-2 px-4 mt-4">
                <input type="text" className="outline-none placeholder:text-neutral-900 smplaceholder:text-[10px]" placeholder="جستجو" />
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-3 left-4 w-4 h-4">
                    <path d="M7.66634 14.5C3.89967 14.5 0.833008 11.4333 0.833008 7.66665C0.833008 3.89998 3.89967 0.833313 7.66634 0.833313C11.433 0.833313 14.4997 3.89998 14.4997 7.66665C14.4997 11.4333 11.433 14.5 7.66634 14.5ZM7.66634 1.83331C4.44634 1.83331 1.83301 4.45331 1.83301 7.66665C1.83301 10.88 4.44634 13.5 7.66634 13.5C10.8863 13.5 13.4997 10.88 13.4997 7.66665C13.4997 4.45331 10.8863 1.83331 7.66634 1.83331Z" fill="#353535" />
                    <path d="M14.6666 15.1667C14.54 15.1667 14.4133 15.12 14.3133 15.02L12.98 13.6867C12.7866 13.4934 12.7866 13.1734 12.98 12.98C13.1733 12.7867 13.4933 12.7867 13.6866 12.98L15.02 14.3134C15.2133 14.5067 15.2133 14.8267 15.02 15.02C14.92 15.12 14.7933 15.1667 14.6666 15.1667Z" fill="#353535" />
                </svg>
            </div>
            <h4 className="text-base sm:text-2xl font-bold text-center text-neutral-900 mt-12 mb-[72px] sm:mb-[152px]">منوی رستوران</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[106px] sm:gap-y-40 gap-x-4 md:gap-x-6">
                <Menu img="/images/menu_1.png" text="غذای اصلی" />
                <Menu img="/images/menu_2.png" text="پیش غذا" />
                <Menu img="/images/menu_3.png" text="دسر" />
                <Menu img="/images/menu_4.png" text="نوشیدنی" />
            </div>
        </div>
    )
}

export default Menus