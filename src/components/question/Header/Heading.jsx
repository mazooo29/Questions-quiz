import React from "react";
import styles from './header.module.css';

function Heading(){
    return <div className="topHeaderDiv">
                <h1 className={styles.topHeader}>Country Quiz</h1>   
            </div>
}

export default Heading;