import React, { createContext, useContext } from 'react';

const Context = createContext(undefined);

const ChildComponent = () => {
  const value = useContext(Context);

  return (
    <>
      {value? value.hello : ''}
    </>
  )
}

export default function UseContext() {
  return (
    <>
      <Context.Provider value={{ hello : 'react' }}>
        <Context.Provider value={{ hello : 'js' }}>
          <ChildComponent />
        </Context.Provider>
      </Context.Provider>
    
    </>
  )
}
