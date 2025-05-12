import Image from "next/image";

import styles from "./styles.module.css";
export default function Blog() {
  return (
    <div>
      <div className={styles.heroback}>
        <div className="flex flex-wrap justify-between md:px-[100px] px-[20px] py-[70px]">
          <div className="md:w-1/2 w-full">
            <div className="flex flex-col gap-[10px]">
              <span className={styles.inspirationText}>
                By Themadbrains in{" "}
                <span style={{ color: "#49BBBD" }}>inspiration</span>
              </span>
              <h3 className={styles.blogTitle + " md:pr-[19%]"}>
                Why Swift UI Should Be on the Radar of Every Mobile Developer
              </h3>
              <p className={styles.loremText + " md:pr-[18%]"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
                elit, sed do eiusmod tempor
              </p>
              <button className={styles.blogbutton}>
                <span className={styles.blogbuttonText}>
                  Start learning now
                </span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full pt-[10px]">
            <Image
              className="w-full"
              src="/heroimg.png"
              alt="Blog"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="md:py-[7%] px-[80px]">
        <div>
          <h4 className={styles.listText}>Reading blog list</h4>
          <div className="flex flex-wrap"></div>
        </div>
      </div>
    </div>
  );
}
