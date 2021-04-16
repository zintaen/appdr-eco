import { useState } from "react";
import "./App.scss";

function App() {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(0);

  // tinh toan
  function caculate() {
    setResult(0);
  }
  return (
    <div className="container">
      <div className="user-input">&nbsp;{userInput}</div>
      <div className="result">&nbsp;{result}</div>
      <div className="click-number">
        <button className="yellow child" onClick={()=>setUserInput('')}>C</button>
        <div className="yellow child"><button type="button" class="btn btn-primary"><span className="del">Del</span></button></div>
        <div className="yellow child"><button type="button" class="btn btn-primary">%</button></div>
        <div className="yellow child"><button type="button" class="btn btn-primary">÷</button></div>
        <div className="grey child" onClick={()=>setUserInput(userInput + '7')}>
          7
        </div>
        <div className="grey child" onClick={()=>setUserInput(userInput + '8')}>
          8
        </div>
        <div className="grey child" onClick={()=>setUserInput(userInput + '9')}>
          9
        </div>
        <div className="yellow child"><button type="button" class="btn btn-primary">*</button></div>
        <div className="grey child" onClick={()=>setUserInput(userInput + '4')}>
          4
        </div>
        <div className="grey child" onClick={()=>setUserInput(userInput + '5')}>
          5
        </div>
        <div className="grey child" onClick={()=>setUserInput(userInput + '6')}>
          6
        </div>
        <div className="yellow child"><button type="button" class="btn btn-primary">+</button></div>
        <div className="grey child" onClick={()=>setUserInput(userInput + '1')}>
          1
        </div>
        <div className="grey child" onClick={()=>setUserInput(userInput + '2')}>
          2
        </div>
        <div className="grey child" onClick={()=>setUserInput(userInput + '3')}>
          3
        </div>
        <div className="yellow child"><button type="button" class="btn btn-primary">-</button></div>
        <div className="grey child double">0</div>
        <div className="grey child">.</div>
        <div className="orange child" onClick={()=>caculate()}><button type="button" class="btn btn-primary">=</button></div>
      </div>
    </div>
  );
}

export default App;
