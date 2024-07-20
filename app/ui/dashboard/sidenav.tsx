import Link from 'next/link';
import NavLinks from './nav-links';
import { hennyPenny } from "@/app/ui/fonts";

export default function SideNav() {
  return (
    <div className="flex w-full flex-row justify-between">
      <div className='p-10'>
        <Link
          href="/"
        >
          <div className={`${hennyPenny.className} text-2xl text-customBrown`}>
            Healing
          </div>
        </Link>
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <NavLinks />
          <form>
            <button className="flex items-center justify-center rounded-md text-customBrown hover:bg-customBrown hover:text-customWhite p-5 m-5">
              <div>Sign Out</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}