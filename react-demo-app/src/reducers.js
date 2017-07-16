import { FILTER_CHANGE, PAGINATION_CHANGE } from './actions';

const DEFAULT_STATE = {
  filterConfig: {
    author: 'all',
    date: null
  },
  paginationConfig: {
      skip: 0,
      top: 3
  }
};

function filterConfigReducer(state, action) {
  return Object.assign({}, state, {
    filterConfig: action.payload
  });
}

function paginationConfigReducer(state, action) {
    return Object.assign({}, state, {
        paginationConfig: action.payload
    });
}

export default function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FILTER_CHANGE:
      return filterConfigReducer(state, action);
    case PAGINATION_CHANGE: 
        return paginationConfigReducer(state, action);      
    default:
      return state;
  }
}
