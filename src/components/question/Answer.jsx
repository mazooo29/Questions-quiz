export function IncorrectAnswers({answers}){
    return <li key={Math.random()*423}>{answers}</li>
}
export function CorrectAnswer({answer}){
    return <li key={Math.random()*593}>{answer}</li>
}
export default IncorrectAnswers; 