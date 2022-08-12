import Image from "next/image";
import Button from "../ui/button/main-button";
import styles from "./homepage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Trackle</h1>
        <p className={styles.subheading}>An All-In-One tracking solution</p>
        <div className={styles.buttons}>
          <Button text="Log in" direct="/login" />
          <Button text="Sign up" direct="/signup" />
        </div>
      </div>
    </div>
  );
}
