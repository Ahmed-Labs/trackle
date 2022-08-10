import Link from "next/link";
import styles from "./main-button.module.css"

function Button(props) {
  const { text, direct } = props;
  return (
    <Link href={direct}>
      <button className={styles.btn}>{props.text}</button>
    </Link>
  );
}

export default Button;
