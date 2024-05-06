const Menu = ({ img, text }: { img: string; text: string; }) => {
    return (
        <div className="bg-primary rounded h-20 sm:h-40 relative flex items-end justify-center gap-3 shadow-2">
            <img src={img} className="absolute left-0 right-0 -top-[60px] sm:-top-[120px] m-auto w-[120px] h-[120px] sm:w-60 sm:h-60" alt="غذای اصلی" />
            <button className="py-2 px-4 bg-neutral-300 text-neutral-900 text-xs sm:text-xl font-normal w-24 sm:w-36 -mb-6 rounded shadow-2">{text}</button>
        </div>
    )
}

export default Menu