import React from "react";
import Question from "../../components/question";
import FetchQuestions from "../../components/question/DataFetching";

const QuestionContainer = () => {
    const {questions} = FetchQuestions()

    return (
        <div>
            {questions.map(question => <Question question={question.question} 
                wrongAnswers={question.incorrectAnswers} 
                correctAnswer={question.correctAnswer}/>)}
        </div>
    )
}

export default QuestionContainer;