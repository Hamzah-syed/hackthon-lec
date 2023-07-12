import React from 'react'
import Image from "next/image"
import Logo from "/public/Logo.webp"
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ShoppingCart } from 'lucide-react'


const Header = () => {
    return (
        <div className='flex justify-between items-center py-6 wrapper'>
            <Image src={Logo} alt='ecom' />
            <div className='hidden md:block'>
                <ul className='flex gap-x-6'>
                    <li><Link href={"/"}>Female</Link></li>
                    <li><Link href={"/"}>Male</Link></li>
                    <li><Link href={"/"}>Kids</Link></li>
                    <li><Link href={"/"}>All Products</Link></li>
                </ul>
            </div>
            <div className='hidden md:block'>
                <input className='border-2' placeholder='Search' type='text' />
            </div>
            <div className='flex gap-x-2'>
                {/* Cart */}
                <div className='h-9 w-9 rounded-full bg-gray-200 _center'>
                    <ShoppingCart className='w-5 h-5 ' />
                </div>
                {/* Mobile Nav */}
                <div className='md:hidden'>
                    <Sheet>
                        <SheetTrigger>
                            <Menu className='w-8 h-8' />
                        </SheetTrigger>
                        <SheetContent >
                            <ul className='flex flex-col gap-y-3 text-xl'>
                                <li className='text-center'><Link href={"/"}>Female</Link></li>
                                <li className='text-center'><Link href={"/"}>Male</Link></li>
                                <li className='text-center'><Link href={"/"}>Kids</Link></li>
                                <li className='text-center'><Link href={"/"}>All Products</Link></li>
                            </ul>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </div>
    )
}

export default Header