import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";


const client = generateClient<Schema>();

function App() {
  
  const { signOut } = useAuthenticator();

  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li 
          onClick={() => deleteTodo(todo.id)}
          key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 Aplikacja shostowana pomyślnie.
        <br />
        <br />
        <p>Link do repozytorium</p>
        <a href="https://github.com/tlopwo/amplify-vite-react-UIPDDAWC_BBR_INF_NW">
          Kamil Kowalczyk 88168
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
