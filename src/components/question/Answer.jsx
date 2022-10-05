import React from "react";
function clickme(){
    alert('you clicked me');
}
function Answer({answer}){
    return <li onClick={clickme}>{answer}</li>
}

export default Answer;