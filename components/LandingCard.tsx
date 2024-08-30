import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

  
const LandingCard = () => {
    return (
        <div className="text-white sm:p-6">
        <div className="mt-12 grid-cols-2 w-full h-full md:flex">
            <div className="w-full h-full">
            <Image 
            src="/assets/images/hero.jpg"
            height={800}
            width={600}
            alt="hero"></Image>
            </div>
            <div>
                <p className="text-6xl font-sans text-white font-extrabold sm:pb-5 pt-5">Web3 Environment for Enhanced Collaboration and A Better World</p>
                <p className="text-lg pt-2 text-gray-400 sm:pb-5">The freelance industry is evolving, and DecentLance is at the forefront of the revolution. With our decentralized approach, we're connecting freelancers and recruiters, leveraging the power of blockchain technology.</p>
                <Button asChild className="bg-green-600 mt-2 hover:bg-transparent hover:border-solid border-2 border-green-600 font-semibold">
                    <Link href="/signin">Sign up</Link>
                    </Button>
            </div>

        </div>
        <div className="mt-11 text-3xl font-sans font-extrabold flex items-center justify-center h-full w-  full tracking-widest mb-10">WHY US</div>
        <div className="bg-gray-800 flex w-full h-full grid-cols-4 justify-around">
            <div className="mt-10 mb-10">
                <div className="flex justify-center mb-4">
                <Image
                src="/assets/images/dtp.png"
                height={60}
                width={60}
                alt="dtp"></Image>
                </div>
                <p className="flex justify-center mb-4 text-2xl font-bold font-sans">Diverse Talent Pool</p>
                <p className="mx-11 text-center text-gray-300">Access a wide range of skilled freelancers with expertise in various industries.</p>
            </div>
            <div className="mt-10 mb-10">
            <div className="flex justify-center mb-4">
            <Image
                src="/assets/images/sp.png"
                height={60}
                width={60}
                alt="dtp"></Image>
            </div>
                <p className="text-center mb-4 text-2xl font-bold font-sans">Streamlined Project</p>
                <p className="mx-11 text-center text-gray-300">DecentLance simplifies the entire project lifecycle from hiring to completion.</p>
            </div>
            <div className="mt-10 mb-10">
            <div className="flex justify-center mb-4">
            <Image
                src="/assets/images/dtp.png"
                height={60}
                width={60}
                alt="dtp"></Image>
            </div>
                <p className="text-center mb-4 text-2xl font-bold font-sans">Quality Assurance</p>
                <p className="mx-11 text-center text-gray-300">We ensure top-notch work through our vetting and rating system.</p>
            </div>
            <div className="mt-10 mb-10">
            <div className="flex justify-center mb-4">
            <Image
                src="/assets/images/sp.png"
                height={60}
                width={60}
                alt="dtp"></Image>
            </div>
                <p className="text-center mb-4 text-2xl font-bold font-sans">Cost Effective Solutions</p>
                <p className="mx-11 text-center text-gray-300">Find cost-effective freelance services to fit your budget and project requirements.</p>
            </div>
        </div>
        </div>
    )
}

export default LandingCard