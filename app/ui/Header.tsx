import { ReactNode } from "react";

export default function Header({ children }:{ children : React.ReactNode }) {
  return(
    <h1 className="text-4xl text-black tracking-wider pb-3 mt-3 ml-3 border-b-2 border-gray-300">
      {children}
    </h1>
  )
}
