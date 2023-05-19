import { useEffect, useState } from "react";
import {
  getAccount,
  listDocuments,
  createDocument,
  updateDocument,
} from "../appwrite";
const Home = () => {
  const [user, setUser] = useState();
  const [todos, setTodos] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    (async () => {
      const data = await getAccount();
      setUser(data);
      await getTodos();
    })();
  }, []);

  const getTodos = async () => {
    const data = await listDocuments();
    setTodos(data.documents);
  };

  const createTodo = async () => {
    await createDocument(text);
    await getTodos();
    setText("");
  };

  return (
    <div className="w-full h-[100vh] flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-semibold">
        Hello, {user ? user.name : ""}{" "}
      </h1>
      <div className="flex flex-row">
        <input
          className="w-64 h-12 rouned-md px-2 border"
          placeholder="Enter Your Task"
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="bg-blue-400 text-white px-4 rounded-e-md"
          onClick={createTodo}
        >
          Add Todo
        </button>
      </div>
      <ul className="w-96 flex flex-col gap-2">
        {todos ? (
          todos.map((todo) => {
            return (
              <li
                className={`bg-blue-400 rounded-md py-1 px-2 ${
                  todo.completed ? "text-black" : "text-white"
                }`}
                key={todo.$id}
                onClick={async () => {
                  await updateDocument(todo.$id, !todo.completed);
                  await getTodos();
                }}
              >
                {todo.text}
              </li>
            );
          })
        ) : (
          <h2>No TODOs Found</h2>
        )}
      </ul>
    </div>
  );
};

export default Home;
