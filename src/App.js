import React from "react";
import QuestionCard from './containers/questionCard';
import Footerfun from './components/question/footer.jsx'
    import './App.css';


function App() {
    // console.log(DataFetching())
    return (
        <div>
            {/* call questionCard component */}
            <QuestionCard/>
            <Footerfun/>
        </div>
    );
}

export default App;
