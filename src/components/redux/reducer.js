import { filterReducer } from "../Filters/filterSlice";
import { todoReducer } from "../TodoList/todoListSlice";
import { combineReducers } from 'redux';
// const reducer = (state = {}, action) => {
//   return {
//     todoList: todoReducer(state.todoList, action),
//     filters: filterReducer(state.filters, action)
//   }
// };
const reducer = combineReducers({
  todoList: todoReducer,
  filters: filterReducer
});
export { reducer }
