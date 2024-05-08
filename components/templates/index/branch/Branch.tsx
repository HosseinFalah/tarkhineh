import Image from "next/image"

const Branch = ({ img, title, description }: { img: string, title: string, description: string }) => {
    return (
        <div className="flex sm:block overflow-hidden rounded-sm border border-neutral-500 relative group">
            <Image
                src={img}
                width={228}
                height={230}
                className="w-36 sm:w-full object-cover"
                alt="شعبه ها"
            />
            <div className="w-full sm:w-auto px-1 py-2 sm:px-2 sm:py-4 pb-2 text-center transition-all duration-300 bg-white sm:group-hover:-translate-y-10">
                <p className="text-neutral-900 text-sm font-medium sm:text-xl sm:font-semibold pb-2">{title}</p>
                <span className="text-[10px] font-normal sm:text-sm sm:font-medium text-neutral-800 block pb-2">{description}</span>
                <button className="hidden absolute -bottom-8 left-0 right-0 opacity-0 sm:group-hover:opacity-100 text-xs group-hover:flex items-center justify-center m-auto p-2 gap-x-1 text-shade-200 border border-shade-200 rounded w-32 h-8 transition-all duration-300 ease-in">
                    صفحه شعبه
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-shade-200 w-4 h-4">
                        <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z" fill="#315F41" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Branch