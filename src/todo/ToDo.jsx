import { useState } from 'react';
import { Trash, PencilSquare } from 'react-bootstrap-icons';

function ToDo() {

    const todoskey = 'toDoList';

    const [toDoValue, setToDoValue] = useState('');
    const [todoListData, setToDoListData] = useState(()=>
        {
        const rawToDos = localStorage.getItem(todoskey);
        if (!rawToDos)
            return [];
        else
            return JSON.parse(rawToDos);
        }
    );
    const [isToggle, setIsToggle] = useState(false);
    const [editIndex, setEditIndex] = useState(null)


    //Store To Do Data to local storage
    localStorage.setItem(todoskey, JSON.stringify(todoListData))

    //Add To Do Data
    const AddToDo = () => {
        const istoDoData = todoListData.includes(toDoValue)
        
        if(!toDoValue) return
        
        if (!istoDoData)
        {
            setToDoListData((prev)=> [...prev ,toDoValue]);
            //storeToDo(todoListData);
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
    const saveEditToDo = () => {
        if (toDoValue && editIndex !== null) {
            let updateToDo = todoListData.map((todo, i) => {
                return i === editIndex ? toDoValue : todo
            })

            setToDoListData(updateToDo);
        }
        setIsToggle(false);
        setEditIndex(null)
        setToDoValue("")
    }


    //Set Index of Data to be Change
    const handleUpdate = (index) => {
        setIsToggle(true);
        setEditIndex(index);
        setToDoValue(todoListData[index]);
    }

    return (
        <>
            <div className='text-center'>
                <h1 className="text-decoration-underline text-success">To Do List</h1>
                <div className="d-flex w-50 mx-auto input-group mb-3 row">
                    <div className="input-group mb-3">
                    <input type="text" className="col-11 mt-3 mb-3 mx-auto form-control" placeholder="Enter To Do" aria-label="Example text with button addon" aria-describedby="button-addon1" value={toDoValue} onChange={(e) => setToDoValue(e.target.value)}/>
                        {!isToggle ?
                            <button className="col-1 btn btn-success h-50 mt-3 mx-2" type="submit" onClick={() => AddToDo()}>Add</button>
                            :
                            <button type="submit" className="col-1 btn btn-success h-50 mx-2 mt-3" onClick={() => saveEditToDo()}>Edit</button>
                        }
                    </div>
                </div>
            </div>

        <ul className="text w-50 mx-auto d-block">
                {todoListData.map((item, index) => (
                    <>
                        <li className="fst-italic list-group-item border-bottom-1 pb-2" key={index}>{item}
                            <button className="btn btn-link" onClick={() => handleUpdate(index)
                            }>
                                        <PencilSquare size={20} color="blue" />
                            </button>
                            <button className="btn btn-link" onClick={() => handleDelete(item)
                            }>
                                       <Trash size={20} color="red" />
                            </button>
                            
                        </li>
                    </>      
            ))}   
        </ul>
    </>
    );
}

export default ToDo;