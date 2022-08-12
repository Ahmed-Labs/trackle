import styles from "./main-navigation.module.css";
import Link from "next/link";
import Button from "../../ui/button/main-button";

function MainNavigation() {
  return (
    <div className="p-10 items-center text-center bg-white h-screen flex flex-col w-[200px] border-r-2">
      <ul className="pt-6">
        <div>
          <h1 className="text-2xl font-bold mb-20">Trackle</h1>
        </div>
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
      <div className="mt-auto">
        <Button text="Logout" direct="/dashboard" />
      </div>
    </div>
  );
}

export default MainNavigation;
