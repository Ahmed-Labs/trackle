import { useState } from 'react';
import styles from './tracking-item.module.css'


function TrackingItem(props) {
  const { item, index } = props;

  const carriers = ['Canada Post', 'DHL', 'UPS', 'FedEx']
  const trackingNumber = '302637327299'



  return <div className={styles.trackingitem}>
    <div>

    </div>
    <p className={styles.data}>{trackingNumber.slice(0,10)}...</p>
    <p className={styles.data}></p>
    <p className={styles.data}>Date added</p>
    <p className={styles.data}>Status</p>
    <div className={styles.bar}>Progress bar</div>
    <div className={styles.btn}>Edit</div>
    <div className={styles.btn}>Delete</div>
    
  </div>;
}

export default TrackingItem;
