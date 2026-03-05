import { useState } from "react";
import { add, subtract, multiply, divide, clear } from "../calculator/calculator";

function Calculator() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const handleAdd = () => setResult(add(Number(num1), Number(num2)));
  const handleSubtract = () => setResult(subtract(Number(num1), Number(num2)));
  const handleMultiply = () => setResult(multiply(Number(num1), Number(num2)));

  const handleDivide = () => {
    try {
      setResult(divide(Number(num1), Number(num2)));
    } catch (error) {
      setResult(error.message);
    }
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult(clear());
  };

  return (
    <div>
      <h1>Quick-Calc</h1>

      <input
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDivide}>/</button>
        <button onClick={handleClear}>C</button>
      </div>

      <h2 data-testid="result">Result: {result}</h2>
    </div>
  );
}

export default Calculator;
