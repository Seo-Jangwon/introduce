import React, { useState, useEffect } from "react";
import styles from "./Intro.module.css";
import myphoto from "../../logos/photo.jpg";

const Intro = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const intervals = [
      setTimeout(() => setVisibleIndex(1), 1000),
      setTimeout(() => setVisibleIndex(2), 2000),
      setTimeout(() => setVisibleIndex(3), 3000),
    ];
    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.container}>
      <img src={myphoto} height="300px" alt="" />
      <div className={styles.textContainer}>
        <h1>안녕하세요</h1>
        <h1 className={visibleIndex >= 1 ? styles.visible : styles.hidden}>
          서장원입니다.
        </h1>
      </div>
    </div>
  );
};

export default Intro;
