import { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  const handleDelete = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="todo-container">
      <h2>Мій список справ</h2>
      <div className="input-block">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Нова справа..."
        />
        <button onClick={handleAdd}>Додати</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
