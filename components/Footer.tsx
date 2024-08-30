import Image from "next/image"
import { Separator } from "./ui/separator"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="text-white mt-24">
            <Separator/>
            <div className="grid grid-cols-3 my-24">
                <div className="flex h-auto w-auto justify-center ">
                    <Image
                    src="/assets/images/logo.png"
                    height={200}
                    width={200}
                    alt="logo"
                    className="pb-32"></Image>
                </div>
                <div className="flex h-full w-full justify-between text-gray-400">
                    <p>Merchandise</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                    <p>Terms</p>
                    <p>About</p>
                </div>
                <div className="flex justify-center ">

                    <Image 
                    src="/assets/images/twitter.png"
                    height={50}
                    width={50}
                    alt="twitter"
                    className="pb-36 mx-2">
                    </Image>
                    <Image 
                    src="/assets/images/facebook.png"
                    height={60}
                    width={60}
                    alt="facebook"
                    className="pb-36 mx-2">
                    </Image>
                    <Image 
                    src="/assets/images/instagram.png"
                    height={50}
                    width={50}
                    alt="instagram"
                    className="pb-36 mx-2">
                    </Image>
                </div>
            </div>
        </div>
    )
}

export default Footer