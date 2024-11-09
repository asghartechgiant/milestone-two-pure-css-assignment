// WorkPage.js
import FeaturedCard from "@/Components/FeaturedCard";
import styles from "./WorkPage.module.css";

export default function WorkPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Work</h1>
      <div className={styles.cardList}>
        <FeaturedCard
          image="/first.png"
          title="Designing Dashboards"
          year="2020"
          sidebar="Dashboard"
          paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <FeaturedCard
          image="/second.png"
          title="Vibrant Portraits of 2020"
          year="2018"
          sidebar="Illustration"
          paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <FeaturedCard
          image="/third.png"
          title="36 Days of Malayalam type"
          year="2022"
          sidebar="Typography"
          paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
    </div>
  );
}
