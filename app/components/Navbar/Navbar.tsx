"use client";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import styles from "./styles.module.css";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className={
          styles.navbar + " w-full sticky top-0 z-[100] bg-white h-[145px]"
        }
      >
        <div className={"flex justify-between items-center px-[6.25%]"}>
          <Link href="/">
            <Image src="/logo.svg" alt="TOTC" width={114} height={83} />
          </Link>
          <div className="flex items-center md:gap-[80px] gap-[20px]">
            <ul className={"md:flex md:gap-[80px] hidden"}>
              <li className={styles.navItem}>Home</li>
              <li>Courses</li>
              <li>Careeras</li>
              <li>Blog</li>
              <li>About Us</li>
            </ul>
            <div className="flex items-center gap-[10px]">
              <div>
                <Image src="/avatar.png" alt="avatar" width={63} height={63} />
              </div>
              <div className="flex items-center gap-[10px]">
                Line
                <FaChevronDown className="text-xl text-gray-600" />
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <AiOutlineMenu
              onClick={handleMenu}
              className="text-2xl text-black mb-4"
            />
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden"></div>
      </nav>
    </div>
  );
};

export default Navbar;
