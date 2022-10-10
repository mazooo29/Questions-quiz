import React, { useEffect, useState } from "react";
import Question from "../../components/question";
import FetchQuestions from "../../components/question/DataFetching";

export const QuestionContainer = () => {

    let [question,assignQ] = useState([]);
    useEffect(() =>{
        let {questions} = FetchQuestions();
        assignQ(questions);
    },[])
    // if you want to see the code working just remove the comment from code below and comment above 
    //let {questions} = FetchQuestions();
    return (
        <div>
            {question && question.map((question) => ( // questions && to make sure that data arrived first before returning it.
                <Question
                    key={question.id}
                    question={question.question}
                    incorrectAnswers={question.incorrectAnswers}
                    correctAnswer={question.correctAnswer}
                />
            ))}
        </div>
    );
}
export default QuestionContainer;