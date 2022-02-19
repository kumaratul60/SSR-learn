import { useEffect, useState } from "react";

function SimpleFetch() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.time("start time");
    fetchTodos();
    //  setTimeOut is not a good idea to fix User experince
    // fetchTodosWithSetTimeOut();
    console.timeEnd("end time");
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    // pass the data, this will give me data or list of todos
    const data = await res.json();
    setTodos(data);

    console.log("api res", data);
  };

  const fetchTodosWithSetTimeOut = async () => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);

      console.log("api res", data);
    }, 3000);
  };
  return (
    <>
      {todos.length === 0 ? (
        <div>Loading...</div>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <p>
              {todo.id} : {todo.title}
            </p>
          </div>
        ))
      )}
    </>
  );
}

export default SimpleFetch;
