"use client";
import Image from "next/image";
import styles from "./styles.module.css";
interface BloglistCardProps {
  key: number;
  src: string;
  alt: string;
  caption: string;
}
const BloglistCard = (props: BloglistCardProps) => {
  return (
    <div key={props.key} className="w-full relative">
      <Image src={props.src} alt={props.alt} width={300} height={300} />
      <div
        className={
          styles.captiondiv +
          " absolute w-3/4 bottom-[20px] bg-white/50 left-[12.5%] cursor-pointer"
        }
      >
        <h4 className={styles.captionText}>{props.caption}</h4>
      </div>
    </div>
  );
};
export default BloglistCard;
