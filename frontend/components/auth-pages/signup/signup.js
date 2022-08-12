import styles from "./signup.module.css";
import Button from "../../ui/button/main-button";
import { useRef } from "react";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.formcontainer}>
          <form>
            <h1 className={styles.title}>Trackle</h1>

            <div className={styles.inputfield}>
              <label className={styles.label} htmlFor="">
                Email
              </label>
              <input
                className={styles.input}
                type="email"
                id="email"
                ref={emailRef}
                placeholder="Email@domain.com"
              />
            </div>
            <div className={styles.inputfield}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                className={styles.input}
                type="password"
                id="password"
                ref={passwordRef}
                placeholder="Password"
              />
            </div>
            <div className={styles.inputfield}>
              <label className={styles.label} htmlFor="password">
                Confirm Password
              </label>
              <input
                className={styles.input}
                type="password"
                id="confirm-password"
                ref={confirmPasswordRef}
                placeholder="Password"
              />
            </div>
            <div className={styles.alignedbutton}>
              <Button text="Sign up" direct="/api/signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
