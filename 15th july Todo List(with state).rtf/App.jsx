import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  return (
    <div style={styles.container}>
      <h1>Simple TODO List</h1>

      <div style={styles.inputSection}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddTodo} style={styles.button}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todoList.map((item, index) => (
          <li key={index} style={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  inputSection: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    flex: "1",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    backgroundColor: "#f2f2f2",
    margin: "5px 0",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "left",
  },
};

export default App;
