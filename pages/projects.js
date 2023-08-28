import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { forwardRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.subtitle}>Projects</h1>
      <div className={styles.companyTextSubtitle}>
        Here's a short collection of what I've done and what I've been working
        on. Checkout my{" "}
        <a href="https://github.com/ecz2515" target="_blank">
          Github
        </a>{" "}
        or{" "}
        <a href="https:/google.com" target="_blank">
          Resume
        </a>{" "}
        for more info!
      </div>

      <a className={styles.projectGrid}>
        <a className={styles.card}>
          <div className={styles.companyText}>Trip Planner API</div>
          <div className={styles.companyTextSubtitle}>
            <ul>
              <li>
                Developed a trip planner API, employing an array of abstract
                data types such as graphs, dictionaries, and priority queues.
              </li>
              <li>
                Enabled seamless route searching and planning services,
                enhancing user experience. Effectively applied Dijkstra’s
                algorithm to efficiently determine the shortest path between
                destinations.
              </li>
            </ul>
          </div>
        </a>

        <a className={styles.card}>
          <div className={styles.companyText}>Note to Self</div>
          <div className={styles.companyTextSubtitle}>
            <ul>
              <li>
                Developed an application designed to act as a proactive tool
                during emotional crises, offering valuable assistance to young
                adults in managing their emotions.
              </li>
              <li>
                Designed a ”What makes you smile?” page alongside a
                comprehensive three-tiered action plan framework, empowering
                users to effectively mitigate anxiety.
              </li>
            </ul>
          </div>
        </a>

        <a className={styles.card}>
          <div className={styles.companyText}>2D Minesweeper Game</div>
          <div className={styles.companyTextSubtitle}>
            <ul>
              <li>
                Composed a minesweeper-style 2D game, using important concepts
                in object-oriented programming.
              </li>
              <li>
                Configured multiple difficulty levels, win/loss prompts, sound
                effects, and an ongoing timer. Engineered MVC design patterns
                for logical 2D implementation, user interface, and player
                control.
              </li>
            </ul>
          </div>
        </a>
      </a>
    </div>
  );
}
