import './globals.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-yellow-500">
      <div className='h-400 w-800 text-5xl text-black'>
        Healing
      </div>
      <Image
        src="/homepage.jpg"
        width={6016}
        height={4016}
        alt="family photo for the homepage"
      />
    </main>
  );
}
