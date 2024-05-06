import Menu from "./Menu"

const Menus = () => {
    return (
        <div className="container max-w-screen-xl m-auto">
            <h4 className="text-base sm:text-2xl font-bold text-center text-neutral-900 mt-12 mb-[72px] sm:mb-[152px]">منوی رستوران</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[106px] sm:gap-y-40 gap-x-4 md:gap-x-6">
                <Menu img="/images/menu_1.png" text="غذای اصلی"/>
                <Menu img="/images/menu_2.png" text="پیش غذا"/>
                <Menu img="/images/menu_3.png" text="دسر"/>
                <Menu img="/images/menu_4.png" text="نوشیدنی"/>
            </div>
        </div>
    )
}

export default Menus