import Image from "next/image";

interface PropsSchema {
    job: string;
    img: string;
    positions: number;
}
const JobCard = (props: PropsSchema) => {
    return (
        <div className="rounded-md flex max-w-80 bg-green-700 ">
        <div className="my-4">
        <Image
        src={props.img}
        height={50}
        width={50}
        alt="design"
        className="mx-6"></Image>
        </div>
        <div className="">
        <div className="mt-3 text-lg font-semibold tracking-wide pl-10 whitespace-nowrap">{props.job}</div>
        <div className="ml-10 justify-end inline-block h-full w-full">{props.positions} Open Positions</div>
        </div>
        <div className="flex w-full h-full justify-end pr-4">
        </div>
        </div>

    )
}

export default JobCard