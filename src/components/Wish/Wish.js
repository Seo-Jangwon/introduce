//하고싶은 것
import React, { useState, useEffect } from "react";
import styles from "./Wish.module.css";
import { SiSpringboot } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";

const Wish = () => {
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
        <h1>이런 일을 하고 싶어요</h1>

        <h3 className={visibleIndex >= 1 ? styles.visible : styles.hidden}>
          &nbsp;&nbsp;
          <SiSpringboot />
          &nbsp; 백엔드를 희망합니다.
        </h3>
        <h3 className={visibleIndex >= 2 ? styles.visible : styles.hidden}>
          &nbsp;&nbsp;
          <FaReact />
          &nbsp; 일손이 부족하다면 프론트엔드도 하고 싶습니다.
        </h3>
        <h3 className={visibleIndex >= 3 ? styles.visible : styles.hidden}>
          &nbsp;&nbsp;
          <AiOutlineComment />
          &nbsp; 코드 리뷰를 빡세게 받아보고 싶습니다.
        </h3>
      </div>
    </div>
  );
};

export default Wish;
