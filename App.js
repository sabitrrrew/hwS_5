// import React from "react";
import React, { useState } from "react";

function Monitor() {
    const [input, setInput] = useState("")
    const [resalt, setResalt] = useState(0)

    const handleInput = (e) => {
        setInput(e.target.value)
    };

    const handleAdd = () => {
        setResalt(resalt + Number(input));
        setInput("");
    }

    const handleSubtract = () => {
    setResalt(resalt - Number(input));
    setInput("");
    }

    const handleMultyplay = () => {
        setResalt(resalt * Number(input));
        setInput("");
    }

    const handleDivide = () => {
        setResalt(resalt / Number(input));
        setInput("");
    };

    return(
        <div>
            <input type="number" value={input} onChange={handleInput}/>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSubtract}>-</button>
            <button onClick={handleMultyplay}>*</button>
            <button onClick={handleDivide}>/</button>
            <p>Resalt: {resalt}</p>
        </div>
    );
}

export default Monitor;

