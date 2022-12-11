import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { ToDoContext } from '../contexts/ToDoContext';
import { categories } from './AddTask';

const Tasks = () => {
    const {state, dispatch} = useContext(ToDoContext)

    const deleteTask = (taskID) => {
        dispatch({ type: "delete-task", payload: taskID})
        Swal.fire({
            icon: 'success',
            title: 'Deleted succesfully',
            showConfirmButton: false,
            timer: 1000
          })
    }

    const completeTask = (taskID) => {
        dispatch({ type: "complete-task", payload: taskID})
    }
    const unCompleteTask = (id) => {
        dispatch({ type: "uncomplete-task", payload: id})
    } 
    const updateTask = (item) => {
        dispatch({ type: "change-input-type", payload: item})
    }

    return (
        <div className='Tasks_container'>
            {
                state?.tasks?.length !== 0 ? (
                    state.tasks.filter(task => {
                        if (state.categoryID !== null) {
                            return task.categoryID === state.categoryID
                        }
                        return task
                    }).map((item) => (
                        
                        <div key={item.id} className={item.completed ? "task bg-green" : "task" }>
                            <div className={`${item.completed ? "line-through" : ""} task_and_category`}>
                                <p>{item.title}</p>
                                <span className={`${categories.find(category => category.id === item.categoryID)? "categories" : ""}`}>{categories.find(category => category.id === item.categoryID)?.name || ""}</span>
                            </div>
                            <div className='gap'>
                                <span onClick={() => updateTask(item)}>
                                    <box-icon name='pencil' ></box-icon>
                                </span>
                                {
                                    item.completed ? (
                                        <span onClick={() => unCompleteTask(item.id)}>
                                            <box-icon name='checkbox-checked' type='solid' ></box-icon>
                                        </span>                                        
                                    ) : (
                                        <span onClick={() => completeTask(item.id)}>
                                            <box-icon name='checkbox'></box-icon>
                                        </span>                                        
                                    )
                                }
                                <span onClick={() => deleteTask(item.id)}>
                                    <box-icon name='trash-alt'></box-icon>
                                </span>                                
                            </div>
                        </div>
                    ))
                ) : (
                    <center>
                        no ToDo was found
                    </center>
                )
            }
        </div>
    )
}

export default Tasks