import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext(undefined);

function useMyContext() {
  const context = useContext(Context);
  if (context === undefined) throw new Error("Contet 를 받아올 수 없습니다");

  return context;
}


const GrandChildComponent = () => {
  const { hello } = useMyContext();  

  useEffect(() => {
    console.log("GrandChildComponent 렌더링");
  })

  return <h1>{hello}</h1>
}

const ChildComponent = () => {
  useEffect(() => {
    console.log("ChildComponent 렌더링");
  })

  return (
    <GrandChildComponent />
  )
}

export default function UseContext() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    console.log('UseContext 렌더링');
  })

  return (
    <>  
      <input value={text} onChange={handleChange} />    
      <Context.Provider value={{ hello : text }}>
        
        <ChildComponent />
      </Context.Provider>
    </>
  )
}
