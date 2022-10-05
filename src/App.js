import React from "react";
import Question from './components/question';
import './App.css';

function App() {
    return (
        <div>
            <Question question="Q1: what is your name" answers={["answer1", "answer2", "answer3", "answer4"]}/>
        </div>
    );
}

export default App;
