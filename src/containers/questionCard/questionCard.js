import React, { useEffect, useState } from "react";
import Question from "../../components/question";
import axios from "axios";
import ResultCard from "../../components/result/resultCard"

let api_url = "https://the-trivia-api.com/api/questions";
function QuestionContainer(){
    let [question,setQuestions]= useState([])
    let [index,setIndex] = useState({});
    let [score,setScore] = useState(0);
    useEffect(()=>{
        if(question.length === 0){
            try{
                axios.get(api_url)
            .then((res) => {
                setQuestions(res.data);
                setIndex(0);
            })
            .catch((err) => {
                return err;
            });
            }catch(err){console.log("Error 404")}
        }
    },[question]);
    let handleClick = () =>{
        return question[index].correctAnswer;
    }
    function incrementIndex(){
        if(index < 10){
            console.log(question[index].correctAnswer)
            if(question[index].correctAnswer === handleClick()){
                setScore(score += 100);
                console.log("correct answer:",score);
                return setIndex(index + 1)
            }else{
                console.log("incorrect answer:",score);
                return setIndex(index + 1);
            }
        }else{
            <ResultCard/>
        }
    }

    return (
        <div>
            {question[index] && question[index].question &&// questions && to make sure that data arrived first before returning it.
                <Question
                    questionCard={question[index]}
                    key={question[index].id}
                    incrementIndex={() => {incrementIndex()}}
                    incrementScore={score}
                    question={question[index].question}
                    incorrectAnswers={question[index].incorrectAnswers}
                    correctAnswer={question[index].correctAnswer}
                />
            }
        </div>
    );
    
}
export default QuestionContainer;