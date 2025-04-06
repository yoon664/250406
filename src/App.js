import { useState } from 'react';
import './App.css';
import Step01 from './step/step01';
import Step02 from './step/step02';
import Step03 from './step/step03';
import Step04 from './step/step04';
import Step05 from './step/step05';
import Step06 from './step/step06';
import { useRecoilState } from 'recoil';
import { counterState } from './store';

function App() {
  const [count, setCount] = useRecoilState(counterState);
  
    return (
      <>
        {/* <Step01 /> */}
        {/* <Step02 /> */}
        {/* <Step03 /> */}
        {/* <Step04 /> */}
        {/* <Step05 /> */}
        <Step06 />
        <h2>카운트 : {count}</h2>
      </>
    );
}

export default App;
