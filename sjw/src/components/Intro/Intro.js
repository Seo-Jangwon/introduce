import React, { useState, useEffect } from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  const [visible, setVisible] = useState([true, false]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible([true, true]);
    }, 1000); // 1초 후에 "서장원입니다."를 보이게 함

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <div className={styles.centerContainer}>
      <div className={styles.leftAlignedText}>
        <h1 className={styles.visible}>안녕하세요</h1>
        <h1 className={visible[1] ? styles.visible : styles.hidden}>
          서장원입니다.
        </h1>
      </div>
    </div>
  );
};

export default Intro;
