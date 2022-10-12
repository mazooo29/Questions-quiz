import React, {useEffect,useState} from "react";
import Heading from "../question/Header/Heading";
import advenPic from "../../assets/adventure.svg";
import styles from '../../App.module.css';


const Question = ({incrementIndex,incrementScore,question, incorrectAnswers, correctAnswer}) => {
    let [answer,setAnswers] = useState([]);
    useEffect(()=>{
        setAnswers(handleshuffle(correctAnswer, incorrectAnswers));
    },[correctAnswer, incorrectAnswers]) // dependency array run one time
    function Answers({answers}){ // make it one component
        return <li>{answers}</li>
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
                        {answer.map((answer,i) => <Answers key={i} answers={answer}/>)}
                    </ol>
                </div>
                <div className={styles.nextBtnDiv}>
                    <button className={styles.nextBtn} onClick={incrementIndex} >Next</button>
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