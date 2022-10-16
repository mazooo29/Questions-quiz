import React, {useEffect,useState} from "react";
import Heading from "../question/Header/Heading";
import advenPic from "../../assets/adventure.svg";
import styles from '../../App.module.css';

const Question = ({incrementIndex,question, incorrectAnswers, correctAnswer}) => {
    let [answer,setAnswers] = useState([]);
    let [choosedAnswer,setChoosedAnswer] = useState();
    useEffect(()=>{
        setAnswers(handleshuffle(correctAnswer, incorrectAnswers));
    },[correctAnswer, incorrectAnswers]) // dependency array run one time
    let handleStyle = (answer) =>{
            if(choosedAnswer === correctAnswer && choosedAnswer === answer){
                return styles.correct_answer;
            }else if(choosedAnswer !== correctAnswer && answer === choosedAnswer){
                return styles.incorrect_answer;
            }else if(answer === correctAnswer && choosedAnswer !== undefined){
                return styles.correct_answer;
            }else{
                return styles.liAnswers;
            }
    }
    let handleNextBtn = () =>{
        if(choosedAnswer !== undefined){
            document.getElementById("nextBtn").disabled = true;
            incrementIndex(choosedAnswer);
        }else if(choosedAnswer === undefined){
            document.getElementById("nextBtn").disabled = false;
        }
    }
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
                        {answer.map((answer,i) => {
                        return <li key={i} id={answer} onClick={() => {setChoosedAnswer(answer);}} 
                            className={handleStyle(answer)}
                            >{answer}</li>
                    })}
                    </ol>
                </div>
                <div className={styles.nextBtnDiv}>
                    <button className={styles.nextBtn} id='nextBtn' onClick={handleNextBtn}>Next</button>
                </div>
            </div>
        </main>
    );
}; 
let handleshuffle = (correctAnswer,incorrectAnswers) =>{
    let array = [correctAnswer,...incorrectAnswers];
    let currentIndex = array.length, randomIndex;
    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;
        [array[currentIndex],array[randomIndex]] = [array[randomIndex],array[currentIndex]];
    }
    return array
}
export default Question;