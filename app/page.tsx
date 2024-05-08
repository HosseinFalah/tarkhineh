import About from "@/components/templates/index/about/About"
import Banner from "@/components/templates/index/banner/Banner"
import Menus from "@/components/templates/index/menu/Menus"

const Home = () => {
    return (
        <main>
            {/* Banner */}
            <Banner/>
            {/* Menu Restaurant */}
            <Menus/>
            {/* About Restaurant */}
            <About/>
        </main>
    )
}

export default Home