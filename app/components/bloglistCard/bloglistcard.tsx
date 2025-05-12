"use client";
import Image from "next/image";
import styles from "./styles.module.css";
interface BloglistCardProps {
  src: string;
  alt: string;
  caption: string;
}
const BloglistCard = (props: BloglistCardProps) => {
  return (
    <div className="w-full relative">
      <Image src={props.src} alt={props.alt} />
      <div className="absolute bottom-[20px] h-[63px] w-4/5 bg-black/50">
        <h4 className={styles.captionText}>{props.caption}</h4>
      </div>
    </div>
  );
};
