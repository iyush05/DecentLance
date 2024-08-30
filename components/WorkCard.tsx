import Image from "next/image";

interface PropsSchema {
    work: string;
    img: string;
    stars: number;
}
const WorkCard = (props: PropsSchema) => {
    return (
        <div className="rounded-md flex border-2 max-w-80 border-gray-400">
        <div className="my-4">
        <Image
        src={props.img}
        height={50}
        width={50}
        alt="design"></Image>
        </div>
        <div className="mt-3 text-lg font-semibold tracking-wide pl-10">{props.work}</div>
        <div className="flex w-full h-full justify-end pr-4">
        <Image
        src="/assets/images/star.png"
        height={40}
        width={40}
        alt="rating"></Image>
        <div className="mt-7 ml-1 justify-end">{props.stars}/5</div></div>
        </div>

    )
}

export default WorkCard