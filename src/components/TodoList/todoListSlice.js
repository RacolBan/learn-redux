import ACTION from '../redux/constant'
const initState = [
  { id: 1, name: "learn react", priority: "High", isCompleted: false },
  { id: 2, name: "learn be", priority: "Low", isCompleted: true },
  { id: 3, name: "learn cc", priority: "Medium", isCompleted: true }
];


const todoReducer = (state = initState, action) => {
  console.log(state, action)
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...state, action.payload];
    case ACTION.TOGGLE_TODO:
      return state.map(todo => todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo);
    default: return state;
  }
};
export { todoReducer }
