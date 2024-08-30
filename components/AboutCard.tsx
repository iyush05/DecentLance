import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const AboutCard = () => {
    return (
        <div className="text-white h-full w-full grid grid-cols-4 bg-transparent mx-14 pr-20 my-20">
            <div className="col-span-2 ">
                <div className="flex mx-8">
                <p className="text-7xl font-extrabold">W</p>
                <p className="pt-8 font-semibold text-3xl">e're passionate about reshaping the  </p>
                </div>
                <p className="font-semibold text-3xl mx-8 mb-5">world of freelancing and recruitment.</p>
                <Image
                src="/assets/images/water-drops.png"
                height={80}
                width={80}
                alt="water-drop"></Image>
                <p className="mx-8 font-sans text-lg text-gray-400">We believe in the power of innovation, transparency, and trust. Our Web3-based platform is designed to empower both freelancers and employers, 
                    making the entire process seamless and efficient. With a commitment to excellence, we're dedicated to creating a decentralized collaboration 
                    space that brings the future of work closer to you.</p>
            </div>
            <div className="hidden md:block">
                <Image 
                src="/assets/images/npc.png"
                height={400}
                width={400}
                alt="npc"></Image>
            </div>
            <div className="grid-cols-1">
                <ul className="mx-4 my-14">
                    <li className="flex">
                        <Image
                        src="/assets/images/tick-circle.svg"
                        height={20}
                        width={20}
                        alt="tick-mark"></Image>
                        <div>
                        <p className="mx-4 my-3 font-bold text-xl">Fully Decentralised</p>
                        <p className="mx-4 text-gray-400">World's first fully decentralized freelance network</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image
                        src="/assets/images/tick-circle.svg"
                        height={20}
                        width={20}
                        alt="tick-mark"></Image>
                        <div>
                        <p className="mx-4 my-3 font-bold text-xl">Zero Commission</p>
                        <p className="mx-4 text-gray-400">No other platform offers Zero Commission in the industry</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image
                        src="/assets/images/tick-circle.svg"
                        height={20}
                        width={20}
                        alt="tick-mark"></Image>
                        <div>
                        <p className="mx-4 my-3 font-bold text-xl">Instant Withdrawal</p>
                        <p className="mx-4 text-gray-400">Unlimited ownership Instant Withdrawal recruitment platform</p>
                        </div>
                    </li>
                    <Button asChild className="mt-11 ml-8 pl-14 pr-14 rounded-full bg-green-700 hover:bg-green-600">
                    <Link href="/signup">Sign up</Link>
                    </Button>
                </ul>
            </div>

        </div>
    )
}

export default AboutCard