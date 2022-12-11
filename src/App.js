import './App.css';
import React, { useReducer } from 'react'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { initialState, reducerFunc } from './reducers/ToDoReducer';
import { ToDoContext } from './contexts/ToDoContext';
import Filter from './components/Filter';

function App() {
  const [state, dispatch] = useReducer(reducerFunc, initialState)

  return (
    <ToDoContext.Provider value={{ state: state, dispatch: dispatch }}>
      <div className="App">
        <AddTask />
        <Filter />
        <Tasks />


      </div>
    </ToDoContext.Provider>
  );
}

export default App;
