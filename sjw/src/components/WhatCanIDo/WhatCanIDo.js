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
  const skills = useMemo(
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
      {
        src: springData,
        alt: "spring data",
        description: ["JPA", "방학 동안 공부했어요"],
      },
      { src: jwt, alt: "jwt", description: ["JWT", "방학 동안 공부했어요"] },
    ],
    []
  );

  const [visibleIndices, setVisibleIndices] = useState(new Set());

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setVisibleIndices((prevIndices) => {
        const newIndices = new Set(prevIndices);
        skills.forEach((skill, index) => {
          if (skill.alt !== "spring data" && skill.alt !== "jwt") {
            newIndices.add(index);
          }
        });
        return newIndices;
      });
    }, 1000);

    const timer2 = setTimeout(() => {
      setVisibleIndices((prevIndices) => {
        const newIndices = new Set(prevIndices);
        skills.forEach((skill, index) => {
          if (skill.alt === "spring data" || skill.alt === "jwt") {
            newIndices.add(index);
          }
        });
        return newIndices;
      });
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [skills]);

  return (
    <div className={styles.container}>
      <h1>skills</h1>
      <div className={styles.row}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${styles.imageContainer} ${
              visibleIndices.has(index) ? styles.visible : styles.hidden
            }`}
          >
            <img src={skill.src} height="150px" alt={skill.alt} />
            <div className={styles.description}>
              {skill.description.map((line, idx) => (
                <span key={idx}>
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
