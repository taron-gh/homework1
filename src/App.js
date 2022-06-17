import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className='App'>
      <button onClick={(e) => {setCount((prev) => (prev-1) > 1 ? prev - 1 : 1)}}>-</button>
      <div className='num'>{count}</div>
      <button onClick={(e) => {setCount(count + 1)}}>+</button>
    </div>
  );
}

export default App;
