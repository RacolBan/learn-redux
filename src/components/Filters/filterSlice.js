import ACTION from '../redux/constant'
const initState = {
  search: '',
  status: 'All',
  priority: []
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.SEARCH_TODO:
      return {
        ...state,
        search: action.payload
      }
    default: return state;
  }
};

export { filterReducer }
