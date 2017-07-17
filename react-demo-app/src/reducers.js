import {
  FILTER_CHANGE,
  PAGINATION_CHANGE,
  REQUEST_ARTICLE,
  RECEIVE_ARTICLE,
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES
} from './actions';

const DEFAULT_STATE = {
  filterConfig: {
    author: 'all',
    date: null
  },
  paginationConfig: {
    skip: 0,
    top: 3
  },
  articles: {},
  articleList: {
    isLoading: false,
    articles: []
  }
};

function articlesReducer(state, action) {
  switch (action.type) {
    case REQUEST_ARTICLE:
      const articleId = action.payload;
      return Object.assign({}, state, {
        [articleId]: {
          isLoading: true
        }
      });
    case RECEIVE_ARTICLE:
      const article = action.payload;
      return Object.assign({}, state, {
        [article.id]: article
      });
    default:
      return state;
  }
}

function filterConfigReducer(state, action) {
  switch (action.type) {
    case FILTER_CHANGE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

function paginationConfigReducer(state, action) {
  switch (action.type) {
    case PAGINATION_CHANGE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

function articleListReducer(state, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        isLoading: true,
        articles: []
      };
    case RECEIVE_ARTICLES:
      return {
        isLoading: false,
        articles: action.payload
      };
    default:
      return state;
  }
}

export default function rootReducer(state = DEFAULT_STATE, action) {
  return {
    filterConfig: filterConfigReducer(state.filterConfig, action),
    paginationConfig: paginationConfigReducer(state.paginationConfig, action),
    articles: articlesReducer(state.articles, action),
    articleList: articleListReducer(state.articleList, action)
  }
}
