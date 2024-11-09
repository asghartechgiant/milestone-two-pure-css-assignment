// HeroSection.js
import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textSection}>
        <h1 className={styles.heroTitle}>
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <div className={styles.heroDescription}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet{" "}
          <br />
          sint. Velit officia consequat duis enims velit mollit. Exercitation
          veniam <br /> consequat sunt nostrud amet.
        </div>
        <button className={styles.downloadButton}>Download Resume</button>
      </div>

      <div className={styles.imageSection}>
        <Image src="/main.jpg" alt="hero" width={250} height={250} />
      </div>
    </div>
  );
}
