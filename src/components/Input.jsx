import React, { useState } from "react";

export default function Input() {
  const [taskarr, setTaskArr] = useState([]);
  const [task, setTask] = useState("");
  const [checkedTasks, setCheckedTasks] = useState({});

  function onChangeHandle(event) {
    setTask(event.target.value);
  }

  function showData() {
    if (task.trim() !== "") {
      setTaskArr(prevTasks => [...prevTasks, task]);
      setTask(""); 
    }
  }

  function deleteData(index) {
    const updatedTasks = taskarr.filter((_, i) => i !== index);
    setTaskArr(updatedTasks);

  
   
  }

  function handleCheckboxChange(index) {
    setCheckedTasks(prevCheckedTasks => ({
      ...prevCheckedTasks,
      [index]: !prevCheckedTasks[index]
    }));
  }

  return (
    <div className='flex justify-center items-center mt-10'>
      <form className="bg-gray-200 p-4 rounded-lg shadow-xl w-96">
        <input
          placeholder='add item'
          className='mt-5 border-2 border-slate-500 p-2 rounded-xl w-80'
          type="text"
          value={task}
          onChange={onChangeHandle}
        />
        <button className='w-20 bg-black text-white mt-2 rounded-xl h-10' type="button" onClick={showData}>Add</button>
        <div className="mt-8 mb-8">
          {taskarr.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className={`bg-gray-400 p-4 rounded-lg shadow-xl w-56 mt-4 mb-4 text-white text-xl ${checkedTasks[index] ? 'line-through  text-black ' : ''}`}>
                {item}
              </div>
              <button className='w-16 bg-black text-white mt-4 rounded-xl h-10 ml-4 mb-4' type="button" onClick={() => deleteData(index)}>Delete</button>
              <input  
                className="mr-4 w-8 h-6 form-checkbox accent-green-600 ml-4"
                type="checkbox"
                checked={checkedTasks[index] || false}
                onChange={() => handleCheckboxChange(index)}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
