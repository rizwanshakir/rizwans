import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(result.concat(value));
  };

  const calculate = () => {
    try {
      const evaluatedResult = eval(result);
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="max-w-md mx-auto bg-gray-200 p-4 rounded-lg">
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          value={result}
          className="px-4 py-2 rounded-lg border border-gray-300"
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          <button
            className="col-span-2 p-2 rounded-lg bg-gray-100"
            onClick={() => handleClick('7')}
          >
            7
          </button>
          <button
            className="p-2 rounded-lg bg-gray-100"
            onClick={() => handleClick('8')}
          >
            8
          </button>
          <button
            className="p-2 rounded-lg bg-gray-100"
            onClick={() => handleClick('9')}
          >
            9
          </button>
          <button
            className="p-2 rounded-lg bg-gray-300"
            onClick={() => handleClick('+')}
          >
            +
          </button>
          <button
            className="p-2 rounded-lg bg-gray-100"
            onClick={() => handleClick('4')}
          >
            4
          </button>
          <button
            className="p-2 rounded-lg bg-gray-100"
            onClick={() => handleClick('5')}
          >
            5
          </button>
          <button
            className="p-2 rounded-lg bg-gray-100"
            onClick={() => handleClick('6')}
          >
            6
          </button>
          <button
            className="p-2 rounded-lg bg-gray-300"
            onClick={() => handleClick('-')}
          >
            -
          </button>
          <button
            className="p-2 rounded-lg bg-gray-100"
            onClick={() => handleClick('1')}
          >
            1
          </button>
          <button
            className="p-2 rounded-lg bg-gray-100"
            onClick={() => handleClick('2')}
          >
            2
          </button>
          <button
            className="p-2 rounded-lg bg-gray-100"
            onClick={() => handleClick('3')}
          >
            3
          </button>
          <button
            className="p-2 rounded-lg bg-gray-300"
            onClick={() => handleClick('*')}
          >
            *
          </button>
          <button
            className="p-2 rounded-lg bg-gray-100"
            onClick={() => handleClick('0')}
          >
            0
          </button>
          <button
            className="p-2 rounded-lg bg-gray-100"
            onClick={() => handleClick('.')}
          >
            .
          </button>
          <button
            className="p-2 rounded-lg bg-blue-500 text-white"
            onClick={calculate}
          >
            =
          </button>
          <button
            className="p-2 rounded-lg bg-red-500 text-white"
            onClick={clear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
