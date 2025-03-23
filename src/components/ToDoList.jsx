import React from 'react'
import { useState } from 'react'


const ToDoList = ( { initialList } ) => {

    const [list, setList] = useState(initialList); 
    const [text, setText] = useState(''); 

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleAdd() {
        const newList = [...list, {id: list.length + 1, text: text}];
        setList(newList);
        setText('');
    }Í

    function deleteItem(id) {
        return () => {
            const newList = list.filter((item) => item.id !== id);
            setList(newList);
        };

    }

    return (
        <div>
          <div>
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>

          </div>
    
          <ul>
            {list.map((item) => (
              <li key={item.id}>{item.text} <button onClick={deleteItem(item.id)}> Delete </button></li>
            ))}
          </ul>
        </div>
      );


};

export default ToDoList