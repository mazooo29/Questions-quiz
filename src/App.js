import React from "react";
import QuestionContainer from './containers/questionCard/questionCard';
import Footerfun from './components/question/footer/footer.jsx'
import './App.module.css';
import './components/question/footer/footer.module.css'

function App() {
    return (
        <div>
            {/* call questionCard component */}
            <QuestionContainer/>  
            <Footerfun/>
        </div>
    );
}

export default App;
