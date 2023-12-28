import { useReducer } from 'react';
import './App.css';
import ContextProvider from './context/ContextProvider';

import Header from './header';

function App() {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };
  const [counter, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    // wrap app in context provider
    <ContextProvider>
      <div className='App'>
        <Header />
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          Decrement
        </button>
        count: {counter.count}
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </ContextProvider>
  );
}

export default App;
