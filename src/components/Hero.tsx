import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import HeroImage from "/public/hero.webp"



const Hero = () => {
    return (
        <div className='wrapper flex flex-col gap-y-10 md:flex-row'>
            {/* Left Content */}
            <div className='flex-1 mt-8'>
                <Badge className='text-lg bg-blue-100 text-blue-600 px-6'>Badge</Badge>
                <h1 className="scroll-m-20 mt-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    An Industrial Take on Streetwear
                </h1>
                <p className='mt-5'>
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <Button className='px-6 h-12 text-lg bg-black mt-5  '>
                    <ShoppingCart className="mr-2 h-6 w-6" />
                    Button
                </Button>
            </div>

            {/* Right Image */}
            <div className='flex-1'>
                <Image src={HeroImage} alt='Hero image' />
            </div>
        </div>
    )
}

export default Hero