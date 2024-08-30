import Image from "next/image"
import { Separator } from "./ui/separator"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="text-white mt-24">
            <Separator/>
            <div className="grid grid-cols-3 my-24">
                <div className="flex h-full w-full justify-center pb-12">
                    <Image
                    src="/assets/images/logo.svg"
                    height={200}
                    width={200}
                    alt="logo"></Image>
                </div>
                <div className="flex h-full w-full justify-between text-gray-400">
                    <p>Merchandise</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                    <p>Terms</p>
                    <p>About</p>
                </div>
                <div className="flex h-full w-full justify-center">

                    <Image 
                    src="/assets/images/twitter.png"
                    height={30}
                    width={30}
                    alt="twitter">
                    </Image>
                    <Image 
                    src="/assets/images/facebook.png"
                    height={30}
                    width={30}
                    alt="facebook">
                    </Image>
                    <Image 
                    src="/assets/images/instagram.png"
                    height={30}
                    width={30}
                    alt="instagram">
                    </Image>
                </div>
            </div>
        </div>
    )
}

export default Footer