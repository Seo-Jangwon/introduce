import React, { useState, useEffect, useMemo } from "react";
import jwt from "../../logos/jwt.png";
import mybatis from "../../logos/mybatis.png";
import mysql from "../../logos/mysql.png";
import react from "../../logos/react.png";
import springData from "../../logos/springData.png";
import springBoot from "../../logos/springBoot.png";
import vue from "../../logos/vue.png";
import styles from "./WhatCanIDo.module.css"; // CSS 파일을 임포트합니다.

const WhatCanIDo = () => {
  const primarySkills = useMemo(
    () => [
      {
        src: springBoot,
        alt: "spring boot",
        description: ["Spring Boot"],
      },
      { src: mysql, alt: "mysql", description: ["MySQL"] },
      { src: mybatis, alt: "mybatis", description: ["MyBatis"] },
      {
        src: react,
        alt: "react",
        description: ["React", "이것도 리액트로 만들었어요"],
      },
      { src: vue, alt: "vue", description: ["Vue"] },
    ],
    []
  );

  const secondarySkills = useMemo(
    () => [
      {
        src: springData,
        alt: "spring data",
        description: ["JPA", "방학 동안 공부했어요"],
      },
      { src: jwt, alt: "jwt", description: ["JWT", "방학 동안 공부했어요"] },
    ],
    []
  );

  const [visiblePrimary, setVisiblePrimary] = useState(false);
  const [visibleSecondary, setVisibleSecondary] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setVisiblePrimary(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setVisibleSecondary(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>skills</h1>
      <div className={styles.row}>
        {primarySkills.map((skill, index) => (
          <div
            key={index}
            className={`${styles.imageContainer} ${
              visiblePrimary ? styles.visible : styles.hidden
            }`}
          >
            <img src={skill.src} height="150px" alt={skill.alt} />
            <div className={styles.description}>
              {skill.description.map((line, idx) => (
                <span key={idx} className={styles.descriptionLine}>
                  {line}
                  {idx < skill.description.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.row}>
        {secondarySkills.map((skill, index) => (
          <div
            key={index}
            className={`${styles.imageContainer} ${
              visibleSecondary ? styles.visible : styles.hidden
            }`}
          >
            <img src={skill.src} height="150px" alt={skill.alt} />
            <div className={styles.description}>
              {skill.description.map((line, idx) => (
                <span key={idx} className={styles.descriptionLine}>
                  {line}
                  {idx < skill.description.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatCanIDo;
