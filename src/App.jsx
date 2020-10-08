//import React from 'react';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Congrates from './component/greeting';
import './css/style.css';

//Create app function with the return statement 
const App = () => {
    //Create a state varibale 
    const [name, setName] = useState();
    return (
        //Using onchange to change the name value and use set name to set new value
        <>
            <input onChange={({ target: { value } }) => setName(value)}
            
                placeholder="Enter Your name"
            />
            <Congrates name={name}></Congrates>  
        </>    
    );
};
//Export the App function
export default App;

