import { useState } from 'react';

function ToDo() {
    const [toDoValue, setToDoValue] = useState('');
    const [todoListData, setToDoListData] = useState([]);
    const [isToggle, setIsToggle] = useState(false);


    //Add To Do Data
    const AddToDo = () => {
        const istoDoData = todoListData.includes(toDoValue)
        
        if(!toDoValue) return
        
        if (!istoDoData)
        {
            setToDoListData((prev)=> [...prev ,toDoValue]);
        }
        setToDoValue("");
        setIsToggle(false);
        
    }

    //Delete To Do Data
    const handleDelete = (value) => {
        const deleteTodoData = todoListData.filter((currentTodo) => currentTodo !== value)
        setToDoListData(deleteTodoData);

        setToDoValue("");
    }

    //Update To Do Data
    const handleUpdate = (value) => {
        setIsToggle(true);
        setToDoValue(value);
        
        const istoDoData = todoListData.includes(toDoValue)

        const updateTodoData = todoListData.find((elem) => { return elem === value })
        
        // console.log(toDoValue, "++++");
        
        // const newTodoData = todoListData.splice(index, 1, toDoValue);
        // return  elem.id === index
        console.log("updateTodoData", updateTodoData);
        
        if(!toDoValue) return
        
        if (!istoDoData) {
            //setToDoListData(updateTodoData);
        }
    }

    return (
        <>
            <div className='text-center'>
                <div className="input-group mb-3 row .align-self-*">
                    <input type="text" className="col-10 mt-3 mb-3 mx-auto d-block w-50 rounded" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={toDoValue} onChange={(e) => setToDoValue(e.target.value)} />
                    
                    {!isToggle?
                    <button type="submit" className='col-2 btn btn-success btn-sm' onClick={()=>AddToDo()}>Add</button>
                        :
                    <button type="submit" className='col-2 btn btn-success btn-sm' onClick={() => handleUpdate(toDoValue)}>Edit</button>
                    }
                </div>
            </div>

        <ul class="list-group w-50 mx-auto d-block">
                {todoListData.map((item, index) => (
                    <>
                        <li class="list-group-item" key={index}>{item}
                            <button className="btn btn-warning btn-sm me-2" onClick={() => handleUpdate(item, index)
                            }>
                                        Edit
                            </button>
                            <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(item)
                            }>
                                        Delete
                            </button>
                        </li>
                    </>      
            ))}   
        </ul>
    </>
    );
}

export default ToDo;