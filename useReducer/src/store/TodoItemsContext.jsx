import { createContext, useRef, useReducer } from "react";

// Create the context
 const TodoItemContext = createContext(); // No need to initialize with an array

// Reducer function for managing to-do items state
function todoItemsReducer(currentTodoItem, action) {
  switch (action.type) {
    case "NEW_ITEM":
      return [
        ...currentTodoItem,
        { todoName: action.payload.newname, dueDate: action.payload.newDate },
      ];
    case "DELETE_ITEM":
      return currentTodoItem.filter((_, i) => i !== action.payload.index);
    default:
      return currentTodoItem;
  }
}

// Context Provider component
const TodoItemContextProvider = ({ children }) => {
  // State management using useReducer
  const [todoItemsList, dispatchReducedItem] = useReducer(todoItemsReducer, []);

  // Refs for input fields
  const nameRef = useRef(null);
  const dateRef = useRef(null);

  // Function to handle adding a new item
  const addBtnClickHandle = () => {
    const newname = nameRef.current.value;
    const newDate = dateRef.current.value;

    if (!newname || !newDate) return; // Ensure non-empty inputs

    dispatchReducedItem({
      type: "NEW_ITEM",
      payload: { newname, newDate },
    });

    // Clear input fields
    nameRef.current.value = "";
    dateRef.current.value = "";
  };

  // Function to handle deleting an item
  const handleDeleteBtn = (index) => {
    dispatchReducedItem({
      type: "DELETE_ITEM",
      payload: { index },
    });
  };

  // Provide context values
  return (
    <TodoItemContext.Provider
      value={{
        todoItemsList,
        nameRef,
        dateRef,
        addBtnClickHandle,
        handleDeleteBtn,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export {TodoItemContext , TodoItemContextProvider} ;
