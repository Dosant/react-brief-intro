import format from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';

export function shortDate (date) {
    return format(date, 'MMM[ ]DD', {locale: ruLocale});
}

export function beautifulDate(date) {
    return format(date, 'DD[ / ]MMM[ / ]YYYY HH:mm', {locale: ruLocale});
}