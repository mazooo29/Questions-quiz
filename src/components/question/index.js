import React from "react";
import Heading from "./Heading";
import advenPic from "../../assets/adventure.svg";
import {WrongAnswers,CorrectAnswer} from "./Answer";
import styles from '../../App.module.css';


const Question = ({ question, wrongAnswers, correctAnswer }) => {
    return (
        <main className="centerDiv">
            <Heading />
            <div className="adventurePicDiv">
                <img src={advenPic} alt="pic" className="adventurePic" />
            </div>
            <div className={styles.mainContent}>
                <div className="questionTextDiv">
                    <h1 className="questionText">{question}</h1>
                </div>
                <div className="liDiv">
                    <ol>
                        {wrongAnswers?.map((wrongAnswers) => {return <WrongAnswers answers={wrongAnswers}/>;})}
                        <CorrectAnswer answer={correctAnswer}/>
                    </ol>
                </div>
                <div className="nextBtnDiv">
                    <button className="nextBtn">Next</button>
                </div>
            </div>
        </main>
    );
};

export default Question;
