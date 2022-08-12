import styles from "./main-navigation.module.css";
import Link from "next/link";
import Button from "../../ui/button/main-button";

function MainNavigation() {
  return (
    <div className={styles.navcontainer}>
      <ul>
        <li className={styles.navitem}>
          <Link href="/dashboard">
            <a>Tracking</a>
          </Link>
        </li>

        <li className={styles.navitem}>
          <Link href="/dashboard/settings">
            <a>Settings</a>
          </Link>
        </li>
      </ul>
      <div className={styles.logout}>
        <Button text="Logout" direct="/dashboard" />
      </div>
    </div>
  );
}

export default MainNavigation;
