import React, { useState, useEffect } from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  // visibleIndex 상태를 초기값 0으로
  const [visibleIndex, setVisibleIndex] = useState(0);

  // 컴포넌트가 마운트될 때 실행
  useEffect(() => {
    const intervals = [
      setTimeout(() => setVisibleIndex(1), 1000),
      setTimeout(() => setVisibleIndex(2), 2000),
      setTimeout(() => setVisibleIndex(3), 3000),
    ];
    // 컴포넌트가 언마운트될 때 타이머 제거
    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftAlignedText}>
        <h1>안녕하세요</h1>
        <h1 className={visibleIndex >= 1 ? styles.visible : styles.hidden}>
          서장원입니다.
        </h1>
      </div>
    </div>
  );
};

export default Intro;
