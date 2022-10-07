import React from "react";
import QuestionCard from './containers/questionCard/questionCard';
import Footerfun from './components/question/footer/footer.jsx'
import './App.module.css';
import './components/question/footer/footer.module.css'

function App() {
    return (
        <div>
            {/* call questionCard component */}
            <QuestionCard/>
            <Footerfun/>
        </div>
    );
}

export default App;
