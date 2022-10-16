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
    function incrementIndex(choosedAnswer){
        if(index < question.length){
            if(choosedAnswer === question[index].correctAnswer){
                setScore(score + 100);
            }
            setIndex(index + 1);
        }
    }
    return (
        <div>
            {question[index] && question[index].question &&// questions && to make sure that data arrived first before returning it.
                <Question
                    questionCard={question[index]}
                    key={question[index].id}
                    incrementIndex={incrementIndex}
                    question={question[index].question}
                    incorrectAnswers={question[index].incorrectAnswers}
                    correctAnswer={question[index].correctAnswer}
                />
            }
            {index === question.length && <ResultCard score={score}/>}
        </div>
    );
    
}
export default QuestionContainer;