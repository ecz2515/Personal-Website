import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { forwardRef } from "react";

export default function Biography() {
  return (
    <div id='bio' className={styles.sectionCard}>
      <h1 className={styles.subtitle}>A little bit about me...</h1>
      <p className={styles.biotext}>
        Hey! I'm Evan, a current junior at Northwestern University pursuing dual
        degrees in Computer Science and Violin Performance. My technical
        interests lie in ___, ___, and ___, but I spent lots of time practicing
        violin and participating in orchestra/chamber groups as well. I'm
        currently seeking SWE internships for the summmer of 2024, in addition
        to any available research.
      </p>
      <p className={styles.biotext}>
        Over the past few years, I've had experiences in both startups and large
        companies, where I've created full-stack applications and websites
        across various industries. Most recently, I was a software engineer
        intern at Cathay Pacific, Hong Kong's flagship airline.
      </p>
      <p className={styles.biotext}>
        At school, I play the violin in the Northwestern University Symphony
        Orchestra (NUSO), and am involved in 1-2 chamber groups at a time. Check
        out the "Music" section to find my repertoire.
      </p>
      <p className={styles.biotext}>
        Additional hobbies include cooking and watching Formula 1. I'm a huge
        McLaren fan.
      </p>
    </div>
  );
}
