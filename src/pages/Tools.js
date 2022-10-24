import { useState } from 'react';
import * as math from 'mathjs';

import Button from '../components/Button';
import Input from '../components/Input';
import "./Calculator.css";

const Tools = () => {
	const [text, setText] = useState('');
    const [result , setResult] = useState('');
	// const characterLimit = 200;

    const buttonColor = "orange"

	// const buttonClick = (event) => {
	// 	if (characterLimit - event.target.value.length >= 0) {
	// 		setText(event.target.value);
	// 	}
	// };
    const buttonClick = ( val ) => {
        setText((text) => [...text, val]);
        // console.log("valu",val)
    }

    const calcResult = () => {
        const input = text.join("");

        setResult(math.evaluate(input));
    }

	const clearFun = () => {
		// if (text.trim().length > 0) {
		// 	handleAddNote(text);
		// 	setText("");
        //     setResult("")
		// }
        setText("");
        setResult("")
	};


	return (
        <div className="App">
        <div className="calc-container">
          <Input text={text} result={result} />
          <div className="row">
            <Button symbol={"7"} onPress={buttonClick} />
            <Button symbol={"8"} onPress={buttonClick} />
            <Button symbol={"9"} onPress={buttonClick} />
            <Button symbol={"/"} color={buttonColor} onPress={buttonClick} />
          </div>
          <div className="row">
            <Button symbol={"4"} onPress={buttonClick} />
            <Button symbol={"5"} onPress={buttonClick} />
            <Button symbol={"6"} onPress={buttonClick} />
            <Button symbol={"*"} color={buttonColor} onPress={buttonClick} />
          </div>
          <div className="row">
            <Button symbol={"1"} onPress={buttonClick} />
            <Button symbol={"2"} onPress={buttonClick} />
            <Button symbol={"3"} onPress={buttonClick} />
            <Button symbol={"+"} color={buttonColor} onPress={buttonClick} />
          </div>
          <div className="row">
            <Button symbol={"0"} onPress={buttonClick} />
            <Button symbol={"."} onPress={buttonClick} />
            <Button symbol={"="} onPress={calcResult} />
            <Button symbol={"-"} color={buttonColor} onPress={buttonClick} />
          </div>
          <Button symbol="Clear" color="red" onPress={clearFun} />
        </div>
      </div>
	);
};

export default Tools;