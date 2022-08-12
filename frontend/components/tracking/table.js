import styles from "./tracking-grid.module.css";
import { useState } from "react";
import TrackingItem from "./tracking-item";
import Button from "../ui/button/main-button";

function Table() {
  const [userTableData, setUserTableData] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ]);

  const nonEmptyArray = (
    <div>
      <div>
        <Button text="Add" direct="/" />
        <Button text="Delete" direct="/" />
        <h1>Tracking ({userTableData.length}) Packages</h1>
      </div>
      <div className={styles.tablecontent}>
        {userTableData.map((item, index) => {
          return <TrackingItem key={index} itemNumber={index} item={item} />;
        })}
      </div>
    </div>
  );

  const emptyArray = (
    <div className={styles.addbutton}>
      <Button text="Add" direct="/" />
    </div>
  );

  return (
    <div className={styles.container}>
      {userTableData.length === 0 ? emptyArray : nonEmptyArray}
    </div>
  );
}

export default Table;
