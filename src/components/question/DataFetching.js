import React, {useState, useEffect} from "react";
import axios from "axios";


let api_url = "https://the-trivia-api.com/api/questions";

function FetchQuestions(){
    let [questions, setQuestions] = useState([]);
    useEffect(() => {
        axios.get(api_url)
        .then((res) => {
            console.log(res)
            setQuestions(res.data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
    },[])
    
    return {
        questions
    };
}

export default FetchQuestions;