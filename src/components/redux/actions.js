import ACTION from './constant';
const addTodo = (payload) => {
  return {
    type: ACTION.ADD_TODO,
    payload
  }
};
const searchTodo = payload => {
  return { 
    type: ACTION.SEARCH_TODO,
    payload
  }
};
export { addTodo, searchTodo };