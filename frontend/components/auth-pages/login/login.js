import styles from './login.module.css'
import Button from '../../ui/button/main-button';
import { useRef } from "react";

function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.formcontainer}>
          <form>
            <h1 className="text-center p-2 mt-24 mb-8 text-5xl font-semibold">Trackle</h1>

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
            <div className={styles.alignedbutton}>
              <Button text="Log in" direct="/login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
