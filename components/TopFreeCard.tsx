import Image from "next/image"
import WorkCard from "./WorkCard"

const TopFreeCard = () => {
    return (
        <div className="text-white h-full w-full grid grid-cols-5">
            <div className="hidden md:block col-span-2">
                <Image
                src="/assets/images/laptop.png"
                height={450}
                width={450}
                alt="laptop"
                className="mx-20 rounded-sm"></Image>
            </div>
            <div className="col-span-3 mx-5 ">
                <div className="text-4xl font-extrabold my-6">FIND TOP FREELANCERS</div>
                <div className="text-gray-200 pr-10 text-lg mb-5">Discover the best freelance talent for your projects. Our platform connects you with top-rated freelancers
                     across a wide range of industries
                </div>
                <div className="grid grid-cols-2 mb-6">
                <WorkCard work="Writing Services" img="/assets/images/writing.png" stars={4}></WorkCard>
                <WorkCard work="Graphic Design" img="/assets/images/graphic-designer.png" stars={4.2}></WorkCard>
                </div>
                <div className="grid grid-cols-2 mb-6">
                <WorkCard work="Programming" img="/assets/images/coding.png" stars={4.5}></WorkCard>
                <WorkCard work="Digital Marketing" img="/assets/images/marketing.png" stars={4.7}></WorkCard>
                </div>
                <div className="grid grid-cols-2 mb-6">
                <WorkCard work="Admin Support" img="/assets/images/support.png" stars={4.9}></WorkCard>
                <WorkCard work="Translation" img="/assets/images/translation.png" stars={4.4}></WorkCard>
                </div>
                <div className="grid grid-cols-2 mb-6">
                <WorkCard work="Video & Animation" img="/assets/images/video.png" stars={4.8}></WorkCard>
                <WorkCard work="Audio Services" img="/assets/images/audio.png" stars={4.1}></WorkCard>
                </div>
            </div>
        </div>
    )
}

export default TopFreeCard