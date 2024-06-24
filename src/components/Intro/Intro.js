import React, { useState, useEffect } from "react";
import styles from "./Intro.module.css";
import myphoto from "../../logos/photo.jpg";
import { FaLink } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
const Intro = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const intervals = [
      setTimeout(() => setVisibleIndex(1), 1000),
      setTimeout(() => setVisibleIndex(2), 2000),
      setTimeout(() => setVisibleIndex(3), 3000),
      setTimeout(() => setVisibleIndex(4), 4000),
      setTimeout(() => setVisibleIndex(5), 5000),
    ];
    return () => intervals.forEach(clearTimeout);
  }, []);
  const blogUrl = "https://mole-mole.tistory.com/";
  const gitUrl = "https://github.com/Seo-Jangwon";
  return (
    <div className={styles.container}>
      <img src={myphoto} height="300px" alt="" />
      <div className={styles.textContainer}>
        <h1>안녕하세요</h1>
        <h1 className={visibleIndex >= 1 ? styles.visible : styles.hidden}>
          서장원입니다.
        </h1>
      </div>
      <br />
      <br />
      <span>
        <div
          className={visibleIndex >= 2 ? styles.visible : styles.hidden}
          onClick={() => {
            window.open(blogUrl);
          }}
        >
          &nbsp;
          <FaLink />
          &nbsp; 블로그 (클릭) &nbsp;
        </div>
        <div
          className={visibleIndex >= 2 ? styles.visible : styles.hidden}
          onClick={() => {
            window.open(gitUrl);
          }}
        >
          <FaGithub />
          &nbsp; Github (클릭) &nbsp;
        </div>
        <div className={visibleIndex >= 2 ? styles.visible : styles.hidden}>
          <IoMdPhonePortrait />
          &nbsp; 010-9057-7957 &nbsp;
        </div>
        <div className={visibleIndex >= 2 ? styles.visible : styles.hidden}>
          <MdEmail />
          &nbsp; seojang980510@naver.com &nbsp;
        </div>
      </span>
    </div>
  );
};

export default Intro;
