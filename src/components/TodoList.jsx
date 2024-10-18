import "./TodoList.css";
import TodoItem from "./TodoItem";
function TodoList({ data, onToggle, onToggleAll }) {
  const isAllCompleted = data.every((item) => item.completed);

  return (
    <div className="todo-list">
      <div className="todo-header">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={isAllCompleted}
          onChange={(event) => onToggleAll(event.target.checked)}
        />
        <p className="todo-header-text">할 일</p>
        <button className="todo-header-button">삭제</button>
      </div>
      <div>
        {data.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={() => onToggle(item.id)}
          />
        ))}
        {/* <TodoItem /> */}
      </div>
    </div>
  );
}

export default TodoList;
