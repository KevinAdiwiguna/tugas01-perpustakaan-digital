import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react'

interface sideBarListProps {
  datas: any
  open: boolean
  isSignOut: boolean
}

export const SidebarList = ({ datas, open, isSignOut }: sideBarListProps) => {
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: '/auth/sign-in',
      redirect: true
    })
  }
  return (
    <ul className="pt-6">
      {!isSignOut && datas.map((data: any, index: number) => {
        const result = data.title.toLowerCase().replace(/ /g, '-');
        return (
          <Link href={`/dashboard/${result}`} key={index} className={`flex rounded-md p-2 text-black text-sm items-center gap-x-4 mt-2 ${data?.header === true ? "font-bold mb-4 text-lg hover:bg-transparent pointer-events-none cursor-none" : "ml-4 hover:bg-slate-300 "} ${!open ? '!ml-0 w-fit p-4' : 'w-[85%]'}`}>
            {data?.icons}
            <span className={`${!open && "hidden"} origin-left duration-200 block`}>
              <span>{data.title}</span>
            </span>
          </Link>
        );
      })}

      {isSignOut && datas.map((data: any, index: number) => {
        return (
          <div onClick={() => handleSignOut()} key={index} className={`cursor-pointer pointer-events-auto flex rounded-md p-2 text-black items-center gap-x-4 mt-2 font-bold mb-4 text-lg hover:bg-transparent hover:bg-slate-300  ${!open ? '!ml-0 w-fit p-4' : 'w-[85%]'}`}>
            {data?.icons}
            <span className={`${!open && "hidden"} origin-left duration-200 block`}>
              <span>{data.title}</span>
            </span>
          </div>
        );
      })}
    </ul>
  )
}
