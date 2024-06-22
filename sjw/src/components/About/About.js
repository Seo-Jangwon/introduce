import React, { useState, useEffect } from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { MdOutlineWork } from "react-icons/md";
import styles from "./About.module.css"; // CSS 모듈 import

const About = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const intervals = [
      setTimeout(() => setVisibleIndex(1), 1000),
      setTimeout(() => setVisibleIndex(2), 2000),
      setTimeout(() => setVisibleIndex(3), 3000),
    ];

    // 클린업 함수에서 타이머 제거
    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftAlignedText}>
        <h1>저는...</h1>
        <h3 className={visibleIndex >= 1 ? styles.visible : styles.hidden}>
          <GrPersonalComputer />
          &nbsp; 컴퓨터 공학 전공
        </h3>
        <h3 className={visibleIndex >= 2 ? styles.visible : styles.hidden}>
          <MdOutlineWork />
          &nbsp; 인턴경험 1번
        </h3>
        <h3 className={visibleIndex >= 3 ? styles.visible : styles.hidden}>
          수업보다 프로젝트가 재밌었어요
        </h3>
      </div>
    </div>
  );
};

export default About;
