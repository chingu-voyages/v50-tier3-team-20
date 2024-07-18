import './globals.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-yellow-500 items-center justify-center">
      <div className='flex flex-row items-start'>
        <div className='pt-40 h-400 w-800 text-8xl text-black mr-10'>
          Healing
        </div>
        <div className='p-10'>
          <Image
            src="/homepage.jpg"
            width={500}
            height={25}
            alt="family photo for the homepage"
          />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='w-600 h-300 bg-customGray '>
          <button className='py-6 px-8 text-4xl'> Log In </button>
        </div>
        <div className='ml-40 w-500 h-250 bg-customGray'>
          <button className='py-6 px-8 text-4xl'> Sign In </button>
        </div>
      </div>
    </main>
  );
}
