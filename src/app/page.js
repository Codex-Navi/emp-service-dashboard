'use client'
import React from 'react';
import styles from './home.module.css'
import Barchart from '@/Components/Barcharts/Barchart';
import Piechar from '@/Components/PieCharts/Piechar';
import Linecharts from '@/Components/Linecharts/Linecharts';
import Gauges from '@/Components/Gauge/Gauges';


function page(props) {
  return (
    <div className={styles.mainPageConatiner}>
     <section className={styles.homeHeaderSection}>

           <div className={styles.homeHeaderPending}>
            <h1>Pending</h1>
            <h2>2000</h2>
           </div>
           
           <div className={styles.homeHeaderCompleted}>
            <h1>Completed</h1>
            <h2>4000</h2>
           </div>

           <div className={styles.homeHeaderCustomerReview}>
            <h1>Customer Review</h1>
            <h2>1000</h2>
           </div>

           <div className={styles.homeHeaderCustomerextra}>
            <h1>Extra</h1>
            <h2>2000</h2>
           </div>

     </section>

      <section className={styles.chatsection}>
        <Barchart/>
        <Piechar/>
      </section>

      <section className={styles.customerChats}>
        <Linecharts/>
        <Gauges/>
      </section>

    

    </div>
  );
}

export default page;