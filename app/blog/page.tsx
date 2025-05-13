import Image from "next/image";
import BloglistCard from "../components/bloglistCard/bloglistcard";
import BlogCard from "../components/blogcard/blogcard";
import styles from "./styles.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Blog() {
  const bloglist = [
    { key: 1, src: "/ux.png", alt: "UX/UI", caption: "UX/UI" },
    { key: 2, src: "/react.png", alt: "React", caption: "React" },
    { key: 3, src: "/ux.png", alt: "PHP", caption: "PHP" },
    { key: 4, src: "/react.png", alt: "Javascript", caption: "Javascript" },
  ];
  const blogs = [
    {
      index: 1,
      src: "/blog.png",
      alt: "Blog",
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      author: "Lina",
      avatarsrc: "/avatar.png",
      views: 251244,
    },
    {
      index: 2,
      src: "/blog.png",
      alt: "Blog",
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      author: "Lina",
      avatarsrc: "/avatar.png",
      views: 251232,
    },
  ];
  return (
    <div>
      <div className={styles.heroback}>
        <div className="flex flex-wrap justify-between md:px-[114px] px-[20px] py-[70px]">
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
              <button className={styles.blogbutton + " cursor-pointer"}>
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
      <div className="md:py-[7%] px-[110px]">
        <div>
          <h4 className={styles.listText}>Reading blog list</h4>
          <div className="flex gap-[20px] mt-[26px]">
            {bloglist.map((blog, index) => (
              <div key={index} className="w-1/4">
                <BloglistCard
                  key={blog.key}
                  src={blog.src}
                  alt={blog.alt}
                  caption={blog.caption}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={
          styles.heroback + " md:px-[116px] px-[20px] pt-[93px] pb-[60px]"
        }
      >
        <div>
          {/* Start of Related Blog */}
          <div className="flex justify-between">
            <h4 className={styles.listText + " inline-block"}>Related Blog</h4>
            <button className="cursor-pointer">
              <span className={styles.seeallText}>See all</span>
            </button>
          </div>
          {/* End of Related Blog */}

          {/* Start of Blog Card */}
          <div className="py-[41px]">
            <div className="flex gap-[40px]">
              {blogs.map((blo, index) => (
                <BlogCard key={index} {...blo} />
              ))}
            </div>
          </div>
          {/* End of Blog Card */}

          {/* Start of Button for next and previous blog */}

          <div className="flex justify-end gap-[15px]">
            <div className="w-[50px] h-[50px] bg-[#49BBBD] rounded-[4px] flex items-center justify-center hover:opacity-50">
              <button className="cursor-pointer">
                <FaArrowLeft className="text-white" />
              </button>
            </div>
            <div className="w-[50px] h-[50px] bg-[#49BBBD] rounded-[4px] flex items-center justify-center hover:opacity-50">
              <button className="cursor-pointer">
                <FaArrowRight className="text-white" />
              </button>
            </div>
          </div>

          {/* End of Button for next and previous blog */}
        </div>
      </div>

      {/* Start of Marketing Articles */}
      <div className="md:px-[116px] px-[20px] py-[60px]">
        <div>
          <div className="flex justify-between">
            <h4 className="inline-block font-['poppins'] font-[500] text-[30px]">
              Marketing Articles
            </h4>
            <button className="cursor-pointer">
              <span className={styles.seeallText}>See all</span>
            </button>
          </div>
        </div>
      </div>
      {/* End of Marketing Articles */}
    </div>
  );
}
