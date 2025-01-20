import Link from 'next/link';
import React from 'react';
import styles from './navigation.module.css'
import { FaHome } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { MdReviews } from "react-icons/md";



function NavigationMenu(props) {
    return (
        <div className={styles.NavigationMenuContainer}>
            <div className={styles.navigationImg}>
                <img src='/it-helpdesk.png'/>
            </div>
            <ul>
               <Link href='/'> <li><FaHome className={styles.navtigationIcons} /> Home</li></Link>
               <Link href='/pending'><li><MdOutlinePendingActions className={styles.navtigationIcons} /> Pending Task</li></Link>
               <Link href='/completed'><li><MdIncompleteCircle className={styles.navtigationIcons} /> Completed Task</li></Link>
               <Link href='/customer-review'><li><MdReviews className={styles.navtigationIcons} /> Customer Review</li></Link>

            </ul>
            
        </div>
    );
}

export default NavigationMenu;