import React, {useState} from 'react';
import './App.css';

export const buttonCss = 'bg-blue-400 border border-gray-100 mx-2 px-2 rounded text-white hover:bg-gray-300 hover:text-black font-semibold'

function App() {
    const [count, setCount] = useState<number>(0)

  return (
      <main>
        <div className="App container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 w-80">
            <p className="text-3xl text-gray-700 font-bold mb-5">
                Counter
            </p>
            <p className="text-gray-500 text-lg">
                Testing your counter skillz!
            </p>
        </div>
          <div className='flex justify-center'>
              <button className={buttonCss} onClick={() => setCount(count+1)}>Increment</button>
              <button className={buttonCss} onClick={() => setCount(0)}>Reset</button>
              <button className={buttonCss} onClick={() => setCount(count -1)}>Decrement</button>
          </div>
          <div className='flex justify-center mt-24 font-semibold text-8xl'>{count}</div>
      </main>
  );
}

export default App;
