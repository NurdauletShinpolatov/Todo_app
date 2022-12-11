export const initialState = {
  tasks: 
  [
    {
      id: 1,
      title: "First task",
      completed: false,
      categoryID: 1
    },
    {
      id: 2,
      title: "Second task",
      completed: false,
      categoryID: 2
    },
    {
      id: 3,
      title: "Third task",
      completed: false,
      categoryID: 3
    },
    {
      id: 4,
      title: "Fourth task",
      completed: false,
      categoryID: 4
    }
  ],
  inputType: "add",
  selectedTask: {},
  categoryID: null
}

export function reducerFunc(state = initialState, action) {
  switch (action.type) {
    case "add-task":
      return {
        ...state,
        tasks: [...state.tasks, addTask(action.payload.title, action.payload.categoryID)]
      }
    case "delete-task":
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.payload)
      }
    case "complete-task":
      const newArray = state.tasks
      const completeIndex = newArray.findIndex(item => item.id === action.payload)
      newArray[completeIndex].completed = true
      return {
        ...state,
        tasks: newArray
      }
    case "uncomplete-task":
      const newTasks = state.tasks
      const uncompleteIndex = newTasks.findIndex(item => item.id === action.payload)
      newTasks[uncompleteIndex].completed = false
      return {
        ...state,
        tasks: newTasks
      }
    case "change-input-type":
        return {
            ...state,
            inputType: "update",
            selectedTask: action.payload
        }
    case "update-task":
        const newArrayForUpdate = state.tasks
        const updateTaskIndex = newArrayForUpdate.findIndex(item => item.id === action.payload.id)
        newArrayForUpdate[updateTaskIndex].title = action.payload.title
        newArrayForUpdate[updateTaskIndex].categoryID = action.payload.categoryID
        return {
            ...state,
            tasks: newArrayForUpdate,
            inputType: "add",
            selectedTask: {}
        }
    case "change-category":
      return {
        ...state,
        categoryID: action.payload
      }
    default:
      return state
  }
}

const addTask = (title, categoryID) => {
  return {id: Date.now(), title, categoryID, completed: false}
}