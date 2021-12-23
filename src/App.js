//useStateの使い方

import React, { useState }  from 'react';
import './App.css';

//現在の状態を管理:useState 現在の状態を管理する関数:count 現在の状態を変更する関数:setCount

function App(){
  const [count, setCount] = useState(0); 
  return(
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={ ()=> setCount(count + 1)}> 
        Click me
      </button>
    </div>
  )
}
//現在の状態を変更する関数setCountの引数をcount + 1とすることでuseStateの引数に1を追加するようになる
export default App;
