import { createSelector } from 'reselect';
// get todo from store
const searchTextSelector = state => state?.filters.search;
const todoSelector = state => state?.todoList;
const filterStatus = state => state?.filters.status;
const filterPriority = state => state?.filters.priority;
// const useSelectTodo = (state) => {
//   const searchText = searchTextSelector(state)
//   const todosRemain = state.todoList.filter(todo => {
//     return todo.name.includes(searchText);
//   })
//   return todosRemain;
// }
const todoRemain = createSelector(todoSelector, filterStatus, searchTextSelector, filterPriority,
  (todoList, status, searchText, priorityArr) => {
    return todoList.filter(todo => {
      if (status === 'All') {
        return priorityArr.length
          ? todo.name.includes(searchText) && priorityArr.includes(todo.priority)
          : todo.name.includes(searchText)
      };
      return todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.isCompleted : !todo.isCompleted) &&
        (priorityArr.length ? todo.name.includes(searchText) && priorityArr.includes(todo.priority) : true)
    })
  })

// const todoFilterStatus = createSelector(todoSelector, filterStatus, (todoList, status) => {
//   return todoList.filter(todo => {
//     return todo.isCompleted
//   })
// })

export { todoRemain }