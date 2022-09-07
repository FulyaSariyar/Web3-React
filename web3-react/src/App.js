import { useCallback, useEffect, useMemo, useRef, useState} from "react";
import './App.css';

function App() {
  
   const [ value, setValue ] = useState(5);

  


  return (
    <div className="App">
    <h1>Introduction {value} to custom hooks</h1>
    <button onClick={() => setValue(10)}>Button</button>
    </div>
  );
}

export default App;
