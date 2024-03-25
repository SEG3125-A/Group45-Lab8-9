import React, { useState } from 'react';
import './Calculator.css';

const Calculator = ({title}) => {
  const [result, setResult] = useState('');

  const appendToResult = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const calculateResult = () => {
    setResult(eval(result));
  };

  const clearResult = () => {
    setResult('');
  };

  return (
    <div className='card'>
      <h1>{title}</h1>
      <div className="calculator">
        <input type="text" value={result} readOnly />
        <button onClick={clearResult} className="clear">C</button>
        <button onClick={() => appendToResult('1')}>1</button>
        <button onClick={() => appendToResult('2')}>2</button>
        <button onClick={() => appendToResult('3')}>3</button>
        <button onClick={() => appendToResult('+')} className="operator">+</button>
        <button onClick={() => appendToResult('4')}>4</button>
        <button onClick={() => appendToResult('5')}>5</button>
        <button onClick={() => appendToResult('6')}>6</button>
        <button onClick={() => appendToResult('-')} className="operator">-</button>
        <button onClick={() => appendToResult('7')}>7</button>
        <button onClick={() => appendToResult('8')}>8</button>
        <button onClick={() => appendToResult('9')}>9</button>
        <button onClick={() => appendToResult('*')} className="operator">*</button>
        <button onClick={() => appendToResult('0')}>0</button>
        <button onClick={() => appendToResult('.')}>.</button>
        <button onClick={calculateResult} className="operator">=</button>
        <button onClick={() => appendToResult('/')} className="operator">/</button>
      </div>
    </div>
  );
};

export default Calculator;
