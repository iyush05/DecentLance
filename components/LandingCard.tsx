"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

  
const LandingCard = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )

    return (

        <div className="text-white sm:p-6">
        <div className="mt-12 grid-cols-2 gap-4 w-full h-full md:flex">
            <div className="w-full h-full">
            <Carousel
      plugins={[plugin.current]}
      className="w-full h-full max-w-lg bg-neutral-900 "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    <Image
                    src={`/assets/images/${index}.jpg`}
                    height={512}
                    width={512}
                    alt="carousel"></Image>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

            </div>
            <div>
                <p className="text-6xl font-sans text-white font-extrabold sm:pb-5 pt-5">Web3 Environment for Enhanced Collaboration and A Better World</p>
                <p className="text-lg pt-2 text-gray-400 sm:pb-5">The freelance industry is evolving, and DecentLancer is at the forefront of the revolution. With our decentralized approach, we're connecting freelancers and recruiters, leveraging the power of blockchain technology.</p>
                <Button asChild className="bg-green-600 mt-2 hover:bg-transparent hover:border-solid border-2 border-green-600 font-semibold">
                    <Link href="/api/auth/signin">Sign up</Link>
                    </Button>
            </div>

        </div>
        <div className="mt-11 text-3xl font-sans font-extrabold flex items-center justify-center h-full w-  full tracking-widest mb-10">WHY US</div>
        <div className="bg-gray-800 flex w-full h-full grid-cols-4 justify-around rounded-md">
            <div className="mt-10 mb-10">
                <div className="flex justify-center mb-4">
                <Image
                src="/assets/images/dtp.png"
                height={60}
                width={60}
                alt="dtp"
                className="rounded-full bg-white p-1 "></Image>
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
                alt="dtp"
                className="flex justify-center items-center rounded-full bg-white p-0.5 "></Image>
            </div>
                <p className="text-center mb-4 text-2xl font-bold font-sans">Streamlined Project</p>
                <p className="mx-11 text-center text-gray-300">DecentLancer simplifies the entire project lifecycle from hiring to completion.</p>
            </div>
            <div className="mt-10 mb-10">
            <div className="flex justify-center mb-4">
            <Image
                src="/assets/images/dtp.png"
                height={60}
                width={60}
                alt="dtp"
                className="flex justify-center items-center rounded-full bg-white p-1 "></Image>
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
                alt="dtp"
                className="flex justify-center items-center rounded-full bg-white p-0.5 "></Image>
            </div>
                <p className="text-center mb-4 text-2xl font-bold font-sans">Cost Effective Solutions</p>
                <p className="mx-11 text-center text-gray-300">Find cost-effective freelance services to fit your budget and project requirements.</p>
            </div>
        </div>
        </div>
    )
}

export default LandingCard