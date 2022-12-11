import React from 'react'
import { useContext } from 'react'
import { categories } from './AddTask'
import { ToDoContext } from '../contexts/ToDoContext'
import { type } from '@testing-library/user-event/dist/type'

const Filter = () => {
    const {state, dispatch} = useContext(ToDoContext)
    const changeCategory = (cat_id) => {
        dispatch({ type: "change-category", payload: cat_id })
    }
    return (
        <div className='Tasks_container'>
            {
                categories?.map((item) => (
                    <span 
                        className={`filter_category $ ${state.categoryID === item.id ? "selected_filter_category" : ""}`} 
                        key={item.id}
                        onClick={e => changeCategory(item.id)}
                    >
                        {item.name}
                    </span>
                ))
            }
        </div>
    )
}

export default Filter