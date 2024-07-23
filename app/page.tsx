"use client";

import './globals.css';

import Image from 'next/image';
import { hennyPenny } from "./ui/fonts";
import { headLandOne } from './ui/fonts';

export default function Home() {
 
    return (
         <main className="flex flex-col min-h-screen bg-yellow-500 justify-center items-center justify-evenly">
      <div className='flex flex-row justify-evenly w-[80%]'>
        <div className={`flex flex-col pt-20 text-8xl text-black ${hennyPenny.className} antialiased`}>
          <div className='text-center'>
            Healing
          </div>
          <div className='flex flex-col text-4xl items-center justify-center'>
            <p className='pt-10'>Welcome to Healing.</p> 
            <p className='pt-4'>This is a dating website.</p>
          </div>
        </div>
        <div className='flex'>
          <Image
            src="/homepage.jpg"
            width={500}
            height={20}
            alt="family photo for the homepage"
          />
        </div>
      </div>
      <div className='flex flex-row w-[60%] justify-evenly'>
        <div className='bg-customGray rounded-md'>
          <button className={`py-6 px-8 text-4xl ${headLandOne.className}`}> Log In </button>
        </div>
        <div className='bg-customGray rounded-md'>
          <button className={`py-6 px-8 text-4xl ${headLandOne.className}`}> Sign In </button>
        </div>
      </div>
    </main> 
    );
}

