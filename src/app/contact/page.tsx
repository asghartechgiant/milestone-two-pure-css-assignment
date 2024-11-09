import styles from "./ContactPage.module.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          We're here to assist you. Please don't hesitate to reach out with any
          inquiries or project ideas. Our team will respond promptly.
        </p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <div className={styles.contactDetails}>
              <p className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <span>asghar.akram004@gmail.com</span>
              </p>
              <p className={styles.contactItem}>
                <FaPhoneAlt className={styles.icon} />
                <span>03130242024</span>
              </p>
              <p className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <span>
                  123 Business Avenue, Suite 100
                  <br />
                  Korangi no 1/2 sector 48/A
                </span>
              </p>
            </div>
          </div>

          <form className={styles.contactForm}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="Full Name"
                required
              />
              <label htmlFor="name" className={styles.label}>
                Full Name
              </label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="Email Address"
                required
              />
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="subject"
                name="subject"
                className={styles.input}
                placeholder="Subject"
                required
              />
              <label htmlFor="subject" className={styles.label}>
                Subject
              </label>
            </div>
            <div className={styles.formGroup}>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                rows={4}
                placeholder="Your Message"
                required
              ></textarea>
              <label htmlFor="message" className={styles.label}>
                Your Message
              </label>
            </div>
            <button type="submit" className={styles.submitButton}>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
