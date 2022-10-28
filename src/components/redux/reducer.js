import { filterReducer } from "../Filters/filterSlice";
import { todoReducer } from "../TodoList/todoListSlice";

const reducer = (state = {}, action) => {
  return {
    todoList: todoReducer(state.todoList, action),
    filters: filterReducer(state.filters, action)
  }
};

export { reducer }
