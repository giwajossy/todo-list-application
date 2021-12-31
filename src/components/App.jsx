import React, { useState } from "react";
import Lottie from 'react-lottie-player'
import lottieJson from '../lotties/demo-anime.json'
import { v4 as uuidv4 } from 'uuid';
import Heading from "./Heading";
import Input from "./Input"
import List from "./TodoItem";

const App = () => {
    const [todoList, setTodoList] = useState([]);   
    const [errorMessage, setErrorMessage] = useState(""); 
    const [todoEntry, setTodoEntry] = useState("");    
    const [instruction, setInstruction] = useState("")    

    const addTodoItem = (userEntry) => {
        console.log("App.jsx", todoEntry)
        if (userEntry === "") {
            setErrorMessage("You have to enter a task");
            console.log("You have to enter a task");
        } else {
            setTodoList((previousArrayItem) => {
                return [...previousArrayItem, userEntry];
            });

            setTodoEntry("")
            setErrorMessage("");
            
            if (todoList.length >= 0) {
                setInstruction("👇🏼 Tap to remove task ")
            }
        }
    };

    const deleteItem = (id) => {
        console.log(id);
        setTodoList((previousItems) => {
            return previousItems.filter((data, index) => id !== index)
        })
    };

    return (
        <div className="container">
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: "100%", height: 320, marginTop: "-2%" }}
            />
            <Heading />

            <Input onAdd={addTodoItem} />


            <small style={{ background: "transparent", color: "red", padding: "1%" }}>
                {todoEntry === "" ? errorMessage : null}
            </small><br />

            <small style={{ background: todoList.length >= 1 ? "#50a3a2" : "transparent", color: "white", padding: "1%" }}>
                &nbsp; {todoList.length >= 1 ? instruction : null} &nbsp;
            </small>
            
            <div>
                <ul>
                    {todoList.map((item, index) => (
                        <List key={uuidv4()} id={index} text={item} onChecked={deleteItem} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
