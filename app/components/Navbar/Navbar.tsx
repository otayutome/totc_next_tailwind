"use client";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="w-full sticky top-0 z-[100] bg-white h-[145px]">
        <div className="flex justify-between items-center px-[6.25%]">
          <Link href="/">
            <Image src="/logo.svg" alt="TOTC" width={114} height={83} />
          </Link>
          <ul className={"md:flex gap-[80px]"}>
            <li className={styles.navItem}>Home</li>
            <li>Courses</li>
            <li>Careeras</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
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
