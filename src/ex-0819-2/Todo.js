import { useState } from 'react';

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '學React', completed: false },
  ]);
  return (
    <>
      <h1>代辦事項</h1>
      <hr />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          // console.log(e.key);
          if (inputValue === '') return;
          if (e.key === 'Enter') {
            // id: +new Date() 用時間(微秒)當ID,多人使用可能會有重複情形
            const newTodos = [{ id: +new Date(), text: inputValue }, ...todos];
            setTodos(newTodos);
            setInputValue('');
          }
        }}
      />
      <ul>
        {todos.map((v, i) => {
          //FIXME:這裡用index當key會有問題
          return (
            <li key={v.id}>
              {v.completed ? <del>{v.text}</del> : v.text}
              <button
                onClick={() => {
                  // const index = todos.findIndex((v2) => {
                  //   return v2.id == v.id;
                  // });
                  const newTodos = todos.map((todo) => {
                    return { ...todo };
                  });
                  newTodos[i].completed = !todos[i].completed;

                  setTodos(newTodos);
                }}
              >
                完成
              </button>
              <button
                onClick={() => {
                  // console.log(v.id);
                  const newTodos = todos.filter((todo) => {
                    // console.log(todo);
                    // console.log(todos[i]);
                    return todo.id !== todos[i].id;
                  });
                  setTodos(newTodos);
                }}
              >
                刪除
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Todo;
