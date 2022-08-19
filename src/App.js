import { useState } from 'react';
import Parent from './ex-0819-3/Parent';
// import Todo from './ex-0819-2/Todo';
import MainHeader from './map/MainHeader';
import Home from './Memorandum/Home';

function App() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <MainHeader />
      <Home />
      <Parent />
      {/* <Todo /> */}
      {/* <Student /> */}
      {/* <Proudcts/> */}
    </>
  );
}

export default App;
