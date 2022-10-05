import React from "react";
import Heading from "./Heading";
import advenPic from "../../assets/adventure.svg";
import Answer from "./Answer";

const Question = ({ question, answers }) => {
    return (
        <main className="centerDiv">
            <Heading />
            <div className="adventurePicDiv">
                <img src={advenPic} alt="pic" className="adventurePic" />
            </div>
            <div className="mainContent">
                <div className="questionTextDiv">
                    <h1 className="questionText">{question}</h1>
                </div>
                <div className="liDiv">
                    <ol>
                        {answers?.map((answer) => {return <Answer answer={answer} />;})}
                    </ol>
                </div>
                <div className="nextBtnDiv">
                    <button className="nextBtn">
                        Next
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Question;
