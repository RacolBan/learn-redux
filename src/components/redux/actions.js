import ACTION from './constant';
const addTodo = (payload) => {
  return {
    type: ACTION.ADD_TODO,
    payload
  }
};
const toggleTodo = (id) => {
  return {
    type: ACTION.TOGGLE_TODO,
    payload: id
  }
};
const searchTodo = payload => {
  return {
    type: ACTION.SEARCH_TODO,
    payload
  }
};
const filterStatusTodo = payload => {
  return {
    type: ACTION.FILTER_STATUS,
    payload
  }
}
const priorityFilterTodo = arr => {
  return {
    type: ACTION.FILTER_PRIORITY,
    payload: arr
  }
}
export { addTodo, searchTodo, filterStatusTodo, priorityFilterTodo, toggleTodo };