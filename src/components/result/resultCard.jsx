import styles from "./resultCarde.module.css"
import Heading from "../question/Header/Heading";
import winnerPic from "../../assets/winners.svg"
function ResultCard({score}){
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
                    <p>You got <span className={styles.numOfCorrSpan}>{score/100}</span> correct answers</p>
                </div>
                <div className={styles.numOfCorrDiv}>
                    <p>Your <span className={styles.scoreSpan}>Score</span> is <span className={styles.scoreSpan}>{score}</span></p>
                </div>
                <div>
                    <button className={styles.tryAgainBtn} onClick={() => window.location.reload()}>Try Again</button>
                </div>
            </div>
        </main>
    );
}

export default ResultCard;