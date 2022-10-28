import { createSelector } from 'reselect';
// get todo from store
const searchTextSelector = state => state.filters.search;
const todoSelector = state => state.todoList;
// const useSelectTodo = (state) => {
//   const searchText = searchTextSelector(state)
//   const todosRemain = state.todoList.filter(todo => {
//     return todo.name.includes(searchText);
//   })
//   return todosRemain;
// }
const todoRemain = createSelector(todoSelector, searchTextSelector, (todoList, searchText) => {
  return todoList.filter(todo => {
    return todo.name.includes(searchText)
  })
})

export { todoRemain }