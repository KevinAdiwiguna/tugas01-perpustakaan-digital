'use client'

import { useState } from "react"
import { FaRegSquarePlus } from "react-icons/fa6";
// import { MdOutlineSwitchAccount } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import { TbUserQuestion } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { MdBook } from "react-icons/md";



export const useSidebar = () => {
  const [open, setOpen] = useState(true)

  const userSettings = [
    { title: 'User Settings', icons: <GrUserSettings />, header: true },
    { title: 'Account Information', icons: <TbUserQuestion /> },
    // { title: 'Create User', icons: <MdOutlineSwitchAccount /> },
  ]
  const bookSettings = [
    { title: 'Book Settings', icons: < MdBook />, header: true },
    { title: 'Create Books', icons: <MdCategory /> },
    { title: 'Create Category', icons: <FaRegSquarePlus /> },
  ]
  const signOut = [
    { title: 'Sign Out', icons: < MdBook />, header: true },
  ]

  return {
    userSettings,
    bookSettings,
    open,
    setOpen,
    signOut
  }
}