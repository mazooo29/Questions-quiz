import styles from "./resultCarde.module.css"
import Heading from "../question/Header/Heading";
import winnerPic from "../../assets/winners.svg"
function ResultCard(){
    return(
        <main className={styles.countryTextDiv}>
            <Heading />
            <div className={styles.mainContentDiv}>
                <div className={styles.winnerPicDiv}>
                    <img src={winnerPic} alt="pic"/>
                </div>
                <div className={styles.ResultTextDiv}>
                    <h1>Results</h1>
                </div>
                <div className={styles.numOfCorrDiv}>
                    <p>You got <span className={styles.numOfCorrSpan}>4</span> correct answers</p>
                </div>
                <div>
                    <button className={styles.tryAgainBtn}>Try Again</button>
                </div>
            </div>
            {/* <div className={styles.mainContent}>
                <div>
                    <h1>Results</h1>
                </div>
                <div className={styles.tryAgainDiv}>
                    <button className={styles.tryAgainBtn}>Try Again</button>
                </div>
            </div> */}
        </main>
    );
}

export default ResultCard;