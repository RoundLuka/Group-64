import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);

    const [text, setValue] = useState("Task")


    function addTask() {
      setTasks([...tasks, text])
    }
    
    return (
      <>
        <input value={text} onChange={(e) => setValue(e.target.value)} placeholder='Task' />
        <button onClick={addTask}>Add</button>

        <ul>
          {tasks.map((task, index) => <li key={Date.now() + index}>{task}</li>)}
        </ul>
      </>
    );
};

export default App;