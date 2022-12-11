import React, { useContext, useEffect, useState } from 'react'
import { ToDoContext } from '../contexts/ToDoContext'

export const categories = [
    {
        id: null,
        name: "Select a category"
    },
    {
        id: 1,
        name: "University"
    },
    {
        id: 2,
        name: "Home"
    },
    {
        id: 3,
        name: "Work"
    },
    {
        id: 4,
        name: "Project"
    }
]

const AddTask = () => {
    const {state, dispatch} = useContext(ToDoContext)
    const [title, setTitle] = useState("")
    const [categoryID, setCategoryID] = useState("")
    const handleSubmit = () => {
        if (state.inputType === "add") {            
            dispatch({ type: "add-task", payload: {title: title, categoryID: categoryID}})
            setTitle("")
            setCategoryID("")
        } else {
            dispatch({ type: "update-task", payload: { id: state.selectedTask.id, title: title, categoryID: categoryID }})
            setTitle("")
            setCategoryID("")
        }
    } 
    useEffect(() => {
        if (state.inputType === "add") {
            setTitle("")
            setCategoryID("")
        } else {
            setTitle(state.selectedTask.title)
            setCategoryID(state.selectedTask.categoryID)
        }
    }, [state.inputType])
    return (
        <div className='AddTask Tasks_container'>
            <input 
                className='form-control'
                type="text" 
                placeholder='type here...'
                onChange={e => setTitle(e.target.value)}
                value={title}
            />
            <select className='form-select form-select-lg mb-3" aria-label=' onChange={(e) => setCategoryID(Number(e.target.value))} value={categoryID}>
                {
                    categories?.map((item) => (
                        <option key={item.id} value={item.id}><span className='select_text'>{item.name}</span></option>
                    ))
                }
            </select>
            <button
                type="button" className="btn btn-success"
                onClick={handleSubmit}
            >
                save
            </button>
        </div>
    )
}

export default AddTask