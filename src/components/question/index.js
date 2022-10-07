import React from "react";
import Heading from "../question/Header/Heading";
import advenPic from "../../assets/adventure.svg";
import {IncorrectAnswers,CorrectAnswer} from "./Answer.jsx";
import styles from '../../App.module.css';


const Question = ({question, incorrectAnswers, correctAnswer}) => {
    return (
        <main className={styles.centerDiv}>
            <Heading />
            <div className={styles.adventurePicDiv}>
                <img src={advenPic} alt="pic" className={styles.adventurePic} />
            </div>
            <div className={styles.mainContent}>
                <div className={styles.questionTextDiv}>
                    <h1 className={styles.questionText}>{question}</h1>
                </div>
                <div className={styles.liDiv}>
                    <ol>
                        {handleshuffle(
                        <CorrectAnswer answer={correctAnswer}/>,
                        incorrectAnswers?.map((incorrectAnswers) => {return <IncorrectAnswers answers={incorrectAnswers}/>;}))}
                    </ol>
                </div>
                <div className={styles.nextBtnDiv}>
                    <button className={styles.nextBtn}>Next</button>
                </div>
            </div>
        </main>
    );
};                
let handleshuffle = (correctAnswer,incorrectAnswers) =>{
    let handleOptions = [correctAnswer,incorrectAnswers.map((incorrectAnswers)=> incorrectAnswers)];
    return handleOptions.sort(()=> Math.random() - 0.5);
}
export default Question;
