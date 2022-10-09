import React from "react";
import Question from "../../components/question";
import FetchQuestions from "../../components/question/DataFetching";

const QuestionContainer = () => {
    let {questions} = FetchQuestions()
    console.log(questions)
    return (
        <div>
            {questions.map((question) => (
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