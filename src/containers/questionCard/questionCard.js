import React, { useEffect, useState } from "react";
import Question from "../../components/question";
import axios from "axios";
import ResultCard from "../../components/result/resultCard"

let api_url = "https://the-trivia-api.com/api/questions";
function QuestionContainer(){
    let [question,setQuestions]= useState([])
    let [index,setIndex] = useState({});
    let [score,setScore] = useState(0);
    let [choosedAnswer,setChoosedAnswer] = useState({});
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
            console.log(index, question.length)
            if(choosedAnswer !== null){
                console.log("choosedAnswer: ",choosedAnswer);
                console.log("index: ", index);
                incrementScore(question[index].correctAnswer,choosedAnswer)
                setIndex(index + 1)
            }else{
                return alert("please enter an answer")
            }
            
        }
    }
    function incrementScore(correctAnswer,choosedAnswer){
        if(correctAnswer === choosedAnswer){
            setScore(score+= 100)
            console.log(score)
            return console.log("correct Answer");
        }else{
            console.log(score);
            return console.log("incorrect Answer")
        }
    }
    return (
        <div>
            {question[index] && question[index].question &&// questions && to make sure that data arrived first before returning it.
                <Question
                    questionCard={question[index]}
                    key={question[index].id}
                    incrementIndex={() => {incrementIndex( )}}
                    question={question[index].question}
                    incorrectAnswers={question[index].incorrectAnswers}
                    correctAnswer={question[index].correctAnswer}
                />
            }
            {index === 10 && 
                <ResultCard/>
            }
        </div>
    );
    
}
export default QuestionContainer;