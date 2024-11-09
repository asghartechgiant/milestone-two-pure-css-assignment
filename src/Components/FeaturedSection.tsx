// FeaturedSection.js
import FeaturedCard from "./FeaturedCard";
import styles from "./FeaturedSection.module.css";

export default function FeaturedSection() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Featured Works</div>
      <div className={styles.cardContainer}>
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
        <FeaturedCard
          image="/forth.png"
          title="Components"
          year="2018"
          sidebar="Components, Design"
          paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
    </div>
  );
}
