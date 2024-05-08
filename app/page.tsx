import About from "@/components/templates/index/about/About"
import Banner from "@/components/templates/index/banner/Banner"
import Branchs from "@/components/templates/index/branch/Branchs"
import Menus from "@/components/templates/index/menu/Menus"

const Home = () => {
    return (
        <main>
            {/* Banner Restaurant */}
            <Banner/>
            {/* Menu Restaurant */}
            <Menus/>
            {/* About Restaurant */}
            <About/>
            {/* Branch Restaurant */}
            <Branchs/>
        </main>
    )
}

export default Home