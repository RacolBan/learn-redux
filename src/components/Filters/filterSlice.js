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
    case ACTION.FILTER_STATUS:
      return {
        ...state,
        status: action.payload
      }
    case ACTION.FILTER_PRIORITY:
      return {
        ...state,
        priority: action.payload
      }
    default: return state;
  }
};

export { filterReducer }
