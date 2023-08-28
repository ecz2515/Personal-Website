import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Biography from "./biography";
import WorkExp from "./workexperience";
import Projects from "./projects";
import React from "react";
import { useRef } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Hey! My name is Evan Chen</h1>

        <p className={styles.description}>
          Thanks for visiting my website! Try some of these shortcuts below:
        </p>

        <div className={styles.grid}>
          <a href="./biography.js" className={styles.card}>
            <h3>Biography &rarr;</h3>
            <p>A little bit about me!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Work Experience &rarr;</h3>
            <p>My internships...</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Some cool stuff I built.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Music &rarr;</h3>
            <p>I play the violin!</p>
          </a>
        </div>

        <Biography id="biobio"></Biography>
        <WorkExp></WorkExp>
        <Projects></Projects>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}