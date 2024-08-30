import Image from "next/image"
import JobCard from "./JobCard"
import { Separator } from "@/components/ui/separator"

const FindJob = () => {
    return (
        <div className="text-white mt-24 w-full h-full ">
            <Separator/>
        <div className="w-full h-full flex justify-center">
        <Image
        src="/assets/images/findJob.png"
        height={300}
        width={300}
        alt="find-jobs"></Image></div>
        <div className="flex w-full h-full justify-center text-4xl font-bold">
            Find your Dream Jobs Today
        </div>
        <p className="h-full w-full justify-center flex my-6">Popular job categories</p>
        <div className="grid grid-cols-3 gap-3 ">
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/developer.png" job="Web Developer" positions={5}></JobCard>
            </div>
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/designer.png" job="Graphic Designer" positions={4}></JobCard>
            </div>
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/analyst.png" job="Data Analyst" positions={8}></JobCard>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-5">
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/machine.png" job="Machine Specialist" positions={11}></JobCard>
            </div>
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/manager.png" job="Product Manager" positions={6}></JobCard>
            </div>
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/designer.png" job="UX Designer" positions={10}></JobCard>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-3 my-5">
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/sales.png" job="Sales Representative" positions={14}></JobCard>
            </div>
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/writer.png" job="Content Writer" positions={2}></JobCard>
            </div>
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/hr.png" job="HR Coordinator" positions={6}></JobCard>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-3 my-5">
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/support.png" job="IT Support" positions={12}></JobCard>
            </div>
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/support.png" job="Customer Service" positions={6}></JobCard>
            </div>
            <div className="flex h-full w-full justify-center">
            <JobCard img="/assets/images/manager.png" job="Project Manager" positions={12}></JobCard>
            </div>
        </div>
        </div>
    )
}

export default FindJob