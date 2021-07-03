import HomeLayout from "../layouts/HomeLayout";
import HeroHome from "../components/SubPages/Home/HeroHome";
import FeatureHome from "../components/SubPages/Home/FeatureHome";
import FeaturesBlocks from "../components/SubPages/Home/FeaturesBlocks";
import Testimonials from "../components/SubPages/Home/Testimonials";
import Newsletter from "../components/SubPages/Home/NewsLetter";



const Home = () => {
  return (
      <HomeLayout>
          <main className="flex-grow">

              {/*  Page sections */}
              <HeroHome />
              <FeatureHome />
              <FeaturesBlocks />
              <Testimonials />
              <Newsletter />
          </main>
      </HomeLayout>
  )
}

export default Home
