import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import React, {forwardRef} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function WorkExperience() {
    return (
        <div className={styles.subcontainer}>
            <h1 className={styles.subtitle}>Work Experience</h1>
            <div className={styles.grid}>
                <Tabs>
                    <TabList>
                        <Tab>Cathay Pacific</Tab>
                        <Tab>Orbitel International</Tab>
                    </TabList>
                    <TabPanel>
                        <div className={styles.companyText}>Software Engineer Intern @ Cathay Pacific</div>
                        <div className={styles.companyTextSubtitle}>June 2023 - August 2023</div>
                        <ul>
                            <li>Enhanced ETL data processing pipelines by proficiently designing Pandas-based XML extraction scripts for the data integration team, resulting in more efficient data extraction and transformation processes.</li>
                            <li>Designed a real-time computer vision solution using OpenCV to monitor up to 500 people at Cathay Pacific’s airport lounges. Integrated with MongoDB and a user-friendly app to display capacity for multiple locations.</li>
                            <li>Developed a DevOps platform for Cathay Pacific’s annual hackathon using Node.js, reducing deployment time by 53% and increasing developer productivity through a streamlined deployment process and automated testing.</li>
                            <li>Utilized Jira for Agile project management as a key member of Scrum teams, while also contributing to technical documentation on Confluence to enhance knowledge sharing and project transparency.</li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                    <div className={styles.companyText}>Software Engineer Intern @ Orbitel International</div>
                    <div className={styles.companyTextSubtitle}>June 2022 - August 2022</div>
                        <ul>
                            <li>Received the Intern of the Year award for outstanding contributions during the summer 2022 cycle.</li>
                            <li>Engineered dynamic frontend solutions for 15+ e-commerce websites by employing HTML5, CSS, and React.js. Enhanced site functionality to bolster product visibility and streamlined client-team communication channels.</li>
                            <li>Executed a comprehensive A/B testing initiative spanning 2 weeks. Leveraged these insights to devise and implement impactful frontend technical enhancements, resulting in an impressive 62% surge in user engagement.</li>
                            <li>Analyzed user engagement metrics and collaborated with design teams to enhance code optimization for superior search engine visibility. Executed the development and deployment of websites for 5 online marketing initiatives.</li>
                        </ul>
                    </TabPanel>
                </Tabs>   
            </div>
        </div>
    )
}