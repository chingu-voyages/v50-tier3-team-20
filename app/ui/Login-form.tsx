import Link from "next/link";
import { inter } from "./fonts";

export default function LoginForm() {
  return (
    <form
      className={`${inter.className} antialiased space-y-3 w-full md:w-1/3`}
    >
      <div className="flex-1 rounded-lg bg-slate-900 px-6 pb-4 pt-8">
        <div className="w-full">
          <div>
            <label className="mb-3 mt-5 block font-medium" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-slate-900   placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-gray-400 font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-slate-900 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              {/* <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>
        <button className="bg-[#7D6B3B] mt-4 w-full py-2 rounded-lg">
          Log in
        </button>
        <div className="mt-4">
          <Link href="/" className="underline">
            Forgot Password?{" "}
          </Link>
        </div>

        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}
