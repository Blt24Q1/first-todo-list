import Layout from "./components/Layout";
import Title from "./components/Title";
import Controls from "./components/Controls";
import TodoList from "./components/TodoList";
import { useRef, useState } from "react";

function App() {
  const idRef = useRef(0);
  const [list, setList] = useState([
    // {
    //   id: 1,
    //   text: "hello",
    //   completed: false,
    // },
  ]);
  const handleSubmit = (value) => {
    setList((prevList) =>
      prevList.concat({
        id: (idRef.current += 1),
        text: value,
        completed: false,
      })
    );
  };
  const handleToggle = (id) => {
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleToggleAll = (flag) => {
    setList((prevList) =>
      prevList.map((item) => ({ ...item, completed: flag }))
    );
  };
  const handleDelete = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Layout>
        <Title />
        <Controls onSubmit={handleSubmit} />
        <TodoList
          data={list}
          onToggle={handleToggle}
          onToggleAll={handleToggleAll}
          onDelete={handleDelete}
        />
      </Layout>
    </div>
  );
}

export default App;
