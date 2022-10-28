import ACTION from '../redux/constant'
const initState = [
  { id: 1, name: "learn react", priority: "High", isCompleted: false }
];


const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...state, action.payload];
    default: return state;
  }
};

export { todoReducer }
