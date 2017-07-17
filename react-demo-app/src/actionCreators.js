import {FILTER_CHANGE, PAGINATION_CHANGE, REQUEST_ARTICLE, RECEIVE_ARTICLE, RECEIVE_ARTICLES, REQUEST_ARTICLES} from './actions';
import {getArticleById, getArticles} from './services/data';

export function changeFilter(newFilter) {
    return {
        type: FILTER_CHANGE,
        payload: newFilter
    };
}

export function changePagination(newPagination) {
    return {
        type: PAGINATION_CHANGE,
        payload: newPagination
    };
}

function requestArticle(id) {
    return {
        type: REQUEST_ARTICLE,
        payload: id
    }
}

function receiveArticle(id, article) {
    return {
        type: RECEIVE_ARTICLE,
        payload: article
    }
}

function fetchArticle(id) {
    return dispatch => {
        dispatch(requestArticle(id))
        return getArticleById(id)
            .then(article => {
                dispatch(receiveArticle(id, article));
            });
    }
}

function shouldFetchArticle(state, id) {
    const article = state.articles[id];
    if (!article) {
        return true;
    } else {
        return false;
    }
}

export function fetchArticleIfNeeded(id) {
    return (dispatch, getState) => {
        if (shouldFetchArticle(getState(), id)) {
            return dispatch(fetchArticle(id));
        }
    }
}

function requestArticleList() {
    return {
        type: REQUEST_ARTICLES
    }
}

function receiveArticleList(articles) {
    return {
        type: RECEIVE_ARTICLES,
        payload: articles
    }
}

export function fetchArticleList() {
    return (dispatch, getState) => {
        const {paginationConfig, filterConfig} = getState();
        dispatch(requestArticleList())
        getArticles(paginationConfig.skip, paginationConfig.top, filterConfig)
            .then((articles) => {
                dispatch(receiveArticleList(articles));
            });
    }
}
