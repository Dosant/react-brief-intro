import {FILTER_CHANGE, PAGINATION_CHANGE} from './actions';

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