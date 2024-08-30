import AboutCard from "@/components/AboutCard";
import FindJob from "@/components/FindJob";
import Footer from "@/components/Footer";
import LandingCard from "@/components/LandingCard";
import Navbar from "@/components/Navbar";
import TopFreeCard from "@/components/TopFreeCard";


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar></Navbar>
      <LandingCard/>
      <AboutCard/>
      <TopFreeCard/>
      <FindJob/>
      <Footer/>
    </div>
      
      );
}

export default Home