import React, {useReducer, useRef} from 'react';
import './App.css';

export const buttonCss = 'bg-blue-400 border border-gray-100 mx-2 px-2 rounded text-white hover:bg-gray-300 hover:text-black font-semibold'

// every possible action is here!
enum actionEnum {
    INCREMENT,
    DECREMENT,
    RESET,
    UPDATE_INCREMENTOR
}

// finite type of event for this component
interface actionEvent {
    type: actionEnum,
    incrementor: number,
    value: number,
}

const MIN_INCREMENT = 1;

// known empty state
const defaultValue = {
    type: actionEnum.INCREMENT,
    incrementor: MIN_INCREMENT,
    value: 0,
}


// all business logic for the entire component is in here. All state is tracked in one spot.
const myReducer = (state: actionEvent, action: actionEvent): actionEvent => {
    switch(action.type) {
        case actionEnum.INCREMENT:
            return { ...state, value: action.value + action.incrementor};
        case actionEnum.DECREMENT:
            return { ...state, value: action.value - action.incrementor};
        case actionEnum.RESET:
            return { ...state, value: 0};
        case actionEnum.UPDATE_INCREMENTOR:
            return { ...state, incrementor: action.incrementor <= 0 ? MIN_INCREMENT : action.incrementor};
        default: return state;
    }
}

function App() {
    const textInputRef = useRef<HTMLInputElement>(null);
    const [state, dispatch] = useReducer(myReducer, defaultValue)

    // handlers remove any business logic from the layout code
    const increment = () => { dispatch({ ...state, type: actionEnum.INCREMENT})}
    const decrement = () => { dispatch({ ...state, type: actionEnum.DECREMENT}) }
    const reset = () => { dispatch({ ...state, type: actionEnum.RESET}) }
    const updateIncrementor = () => {dispatch({ ...state, type: actionEnum.UPDATE_INCREMENTOR, incrementor: Number(textInputRef?.current?.value)})}

    // NO business logic, only layout!
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
          <div className='flex justify-center mt-2'>
              <button className={buttonCss} onClick={increment}>Increment</button>
              <button className={buttonCss} onClick={reset}>Reset</button>
              <button className={buttonCss} onClick={decrement}>Decrement</button>
          </div>
          <div className='flex justify-center mt-2'>
              <div className='text-sm font-semibold mr-1 mt-0.5'>Incrementor:</div>
              <div>
                  <input value={state.incrementor} onChange={updateIncrementor} ref={textInputRef} defaultValue={1} className='border border-1 rounded w-12 pl-2' type='number' />
              </div>
          </div>
          <div className='flex justify-center mt-24 font-semibold text-8xl'>{state.value}</div>
      </main>
  );
}

export default App;
