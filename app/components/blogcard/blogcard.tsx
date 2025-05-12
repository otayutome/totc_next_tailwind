"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
interface BlogCardProps {
  key: number;
  src: string;
  alt: string;
  title: string;
  text: string;
  author: string;
  avatarsrc: string;
  views: number;
}
const BlogCard = (props: BlogCardProps) => {
  return (
    <div
      key={props.key}
      className="w-full py-[60px] px-[20px] bg-white rounded-[20px]"
    >
      <Image src={props.src} alt={props.alt} width={900} height={900} />
      <div>
        <p className={styles.title}>{props.title}</p>
      </div>
      <div className="flex items-center flex-start ml-[20px]">
        <div className="w-[70px] h-[70px] border-radius-[50%]">
          <Image
            src={props.avatarsrc}
            alt={props.author}
            width={70}
            height={70}
          />
        </div>
        <h6 className={styles.author}>{props.author}</h6>
      </div>
      <div>
        <p className={styles.text}>{props.text}</p>
      </div>
      <div className="flex justify-between">
        <Link className={styles.readmore} href={""}>
          <span>Read more</span>
        </Link>
        <div className="flex items-center">
          <FaEye className="text-green-300 inline-block mr-[20px]" />
          <span>{props.views.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
