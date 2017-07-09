var articleModel = (function () {
    var articlesStorage = [{
        "id": "news/2017/02/28/rossiya-snimet-zapret-na-import-moldavskih-vin",
        "title": "Россия снимет запрет на импорт молдавских вин",
        "author": "sports",
        "createdAt": new Date("2017-02-28T05:24:23.856Z"),
        "content": "Content of post",
        "summary": "Summary of post"
    }, {
        "id": "news/2017/02/28/tramp-obvinil-obamu-v-organizatsii-protestov-po-vsey-strane-i-utechek-v-smi",
        "title": "Трамп обвинил Обаму в организации протестов по всей стране и утечек в СМИ",
        "author": "sports",
        "createdAt": new Date("2017-02-27T05:24:23.316Z"),
        "content": "Content of post",
        "summary": "Summary of post"
    }, {
        "id": "news/2017/02/28/rosneft-zainteresovalas-dobychey-v-meksikanskom-zalive",
        "title": "«Роснефть» заинтересовалась добычей в Мексиканском заливе",
        "author": "meduza",
        "createdAt": new Date("2017-02-26T05:24:22.818Z"),
        "content": "Content of post",
        "summary": "Summary of post"
    }, {
        "id": "news/2017/02/28/amerikanskiy-senator-predlozhil-nazvat-imenem-nemtsova-ulitsu-pered-posolstvom-rossii",
        "title": "Американский сенатор предложил назвать именем Немцова улицу перед посольством России",
        "author": "meduza",
        "createdAt": new Date("2017-02-25T05:24:21.043Z"),
        "content": "Content of post",
        "summary": "Summary of post"
    }, {
        "id": "news/2017/02/28/rossiya-otkazalas-zaderzhat-podozrevaemyh-v-ubiystve-kim-chen-nama",
        "title": "Россия отказалась задержать подозреваемых в убийстве Ким Чен Нама",
        "author": "meduza",
        "createdAt": new Date("2017-02-24T05:24:19.591Z"),
        "content": "Content of post",
        "summary": "Summary of post"
    }, {
        "id": "news/2017/02/28/spacex-anonsiroval-polet-kosmicheskih-turistov-k-lune-v-2018-godu",
        "title": "SpaceX пообещала отправить космических туристов к Луне в 2018 году",
        "author": "meduza",
        "createdAt": new Date("2017-02-22T05:23:51.252Z"),
        "content": "Content of post",
        "summary": "Summary of post"
    }, {
        "id": "news/2017/02/27/v-avstrii-vyhodtsa-iz-chechni-prigovorili-k-2-5-godam-tyurmy-za-uchastie-v-boyah-na-storone-ig",
        "title": "В Австрии выходца из Чечни приговорили к 2,5 годам тюрьмы за участие в боях на стороне ИГ",
        "author": "ria",
        "createdAt": new Date("2017-02-21T05:23:47.871Z"),
        "content": "Content of post",
        "summary": "Summary of post"
    }, {
        "id": "news/2017/02/27/v-peterburge-zaderzhali-uchastnika-aktsii-lgbt-spetsnaza-proshedshey-23-fevralya",
        "title": "В Петербурге задержали участника акции «ЛГБТ-спецназа», прошедшей 23 февраля",
        "author": "ria",
        "createdAt": new Date("2017-01-18T05:23:45.059Z"),
        "content": "Content of post",
        "summary": "Summary of post"
    }, {
        "id": "news/2017/02/27/nikolay-karachentsov-gospitalizirovan-posle-dtp-v-podmoskovie",
        "title": "Николай Караченцов госпитализирован после ДТП в Подмосковье",
        "author": "meduza",
        "createdAt": new Date("2017-01-16T05:23:41.378Z"),
        "content": "Content of post",
        "summary": "Summary of post"
    }, {
        "id": "news/2017/02/27/id-kommersant-nachnet-vypuskat-pod-nazvaniem-dengi-reklamnoe-prilozhenie",
        "title": "ИД «Коммерсант» начнет выпускать под названием «Деньги» рекламное приложение",
        "author": "ria",
        "createdAt": new Date("2017-01-15T05:23:36.803Z"),
        "content": "Content of post",
        "summary": "Summary of post"
    }];

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        return filterArtilces(articlesStorage, filterConfig).slice(skip, skip + top);
    }

    function getArticlesCount(filterConfig) {
        return filterArtilces(articlesStorage, filterConfig).length;
    }

    // todo: rename function, typo
    function filterArtilces(articles, filterConfig) {
        if (filterConfig && filterConfig.author) {
            return articles.filter(function (article) {
                return filterConfig.author === article.author;
            })
        } else {
            return articles;
        }
    }

    return {
        getArticles: getArticles,
        getArticlesCount: getArticlesCount
    };
}())

var articleRenderer = (function () {
    var aritcleTemplate;
    var articleListNode;

    function init() {
        /* DOM Загрузился.
           Можно найти в нем нужные элементы и сохранить в переменные */
        aritcleTemplate = document.querySelector('#template-article-list-item');
        articleListNode = document.querySelector('.article-list');
    }

    function insertArticlesInDOM(articles) {
        /* для массива объектов статей получим соотвествующие HTML элементы */
        var articlesNodes = renderArticles(articles);
        /* вставим HTML элементы в '.article-list' элемент в DOM. */
        articlesNodes.forEach(function (node) {
            articleListNode.appendChild(node);
        });
    }

    function removeArticlesFromDom() {
        articleListNode.innerHTML = '';
    }

    function renderArticles(articles) {
        /* каждый объект article из массива преобразуем в HTML элемент */
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {
        /*
         Используем template из DOM, заполним его данными конкретной статьи - article.
         Этот код можно сделать лучше ...
        */
        var template = aritcleTemplate;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);

        /*
         Склонируем полученный контент из template и вернем как результат
        */
        return template.content.querySelector('.article-list-item').cloneNode(true);
    }

    /* Date -> 16/05/2015 09:50 */
    function formatDate(d) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());

/*
    Этот модуль будет использоваться для пагинации:
        1. Содержит в себе данные о текущей странице, сколько всего статей на странице
        2. Содержит ссылку на кнопку "Показать еще", отбрабатывает клики на кнопку. Прячет кнопку, если больше статей начнет
*/

var pagination = (function () {
    var ITEMS_PER_PAGE = 3; // статей на 1-ой странице
    var total; // всего статей
    var currentPage; // текущая страница
    var showMoreButton;
    var showMoreCallback; // функция, которую вызывать, когда произошел клик по кнопке

    /*
        Total: Всего статей в ArticleModel. (Надо будет еще учесть, что total меняется при применении фильтров)
        showMoreCb: функция, которую надо вызвать при клике на кнопку "Показать Еще"
    */
    function init(_total, _showMoreCallback) {
        currentPage = 1;
        total = _total;
        showMoreCallback = _showMoreCallback;
        showMoreButton = document.getElementById('pagination-show-more');
        showMoreButton.addEventListener('click', handleShowMoreClick);

        /* Не показывать кнопку если статей нет */
        showOrHideMoreButton();

        /* Вернуть skip, top для начальной отрисовки статей */
        return getParams();
    }

    function handleShowMoreClick() {
        var paginationParams = nextPage();
        showMoreCallback(paginationParams.skip, paginationParams.top);
    }

    function getTotalPages() {
        return Math.ceil(total / ITEMS_PER_PAGE);
    }

    function nextPage() {
        currentPage = currentPage + 1;
        /* возможно, статей больше нет, спрятать кнопку */
        showOrHideMoreButton();

        return getParams();
    }

    function getParams() {
        return {
            top: ITEMS_PER_PAGE,
            skip: (currentPage - 1) * ITEMS_PER_PAGE
        };
    }

    function showOrHideMoreButton() {
        showMoreButton.hidden = getTotalPages() <= currentPage;
    }

    return {
        init: init
    }

}());

/*
    Этот модуль контролирует форму Filter.
    Собирает все данные из элементов в один объект filterConfig
    Он вызывает перерисовку статей, когда пользователь применил новый фильтр.
*/
var filter = (function () {
    var form;
    var submitButton;
    var filterChangedCallback;

    function init(_filterChangedCallback) {
        form = document.forms.filter;
        submitButton = form.elements.submit;
        submitButton.addEventListener('click', handleSubmitClick);
        filterChangedCallback = _filterChangedCallback;

        return getFilter();
    }

    function getFilter() {
        /* Тут происходит сбор всех фильтров: АВТОР + ДАТА + ТЕГИ. Потом этот объект передадим в функцию getArticles как fitlerConfig */
        var authorSelect = form.elements.author;
        if (authorSelect.value === 'all') {
            return {};
        } else {
            return {
                author: authorSelect.value
            }
        }
    }

    function handleSubmitClick() {
        return filterChangedCallback(getFilter());
    }

    return {
        init: init,
        getFilterConfig: getFilter
    };

}());

/*
    Функция startApp вызовется, когда браузер полностью загрузит и распарсит исходный HTML (index.html)
    DOMContentLoaded – означает, что все DOM-элементы разметки уже созданы,
    можно их искать, вешать обработчики, создавать интерфейс, но при этом, возможно,
    ещё не догрузились какие-то картинки или стили.
*/
document.addEventListener('DOMContentLoaded', startApp);

function startApp() {
    /* DOM Загрузился.
       Можно найти в нем нужные элементы и сохранить в переменные */
    articleRenderer.init();
    /*
        Инициализация фильтра. Это самое важное, потому что от него зависит и пагинация и статьи
        Функция renderArticlesWithFilterConfig будет вызываться, когда пользователь применит новый фильтр.
        Она удалит все статьи из DOM. Заново проинициализурет пагинацию. Нарисует нужные статьи
    */
    var filterConfig = filter.init(renderArticlesWithFilterConfig);
    /* Отрисовать статьи с начальным фильтром */
    renderArticlesWithFilterConfig(filterConfig);

    function renderArticlesWithFilterConfig(filterConfig) {
        /* Перед отображением статей с новым фильтром. Удалим из дома старые статьи */
        articleRenderer.removeArticlesFromDom();
        /*
            Инициализируем пагинацию.
            Для этого передаем сколько всего статей: total
            и функцию, которую вызывать при клике на кнопку "Показать Еще":
            анонимную функцию, которая, кроме переденных из pagination параметров skip и top, учтет текущий фильтр filterConfig.
        */
        var total = articleModel.getArticlesCount(filterConfig);
        var paginationParams = pagination.init(total, function (skip, top) {
            renderArticles(skip, top, filterConfig);
        });

        /* Нарисуем статьи из массива articles в DOM используя полученный фильтр и начальную пагинацию */
        renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
    }

    /* Свяжем модель и отображение списка статей. Функция добавит новые статьи в конец списка */
    function renderArticles(skip, top, filterConfig) {
        // 1. Достанем нужные статьи из модели
        var articles = articleModel.getArticles(skip, top, filterConfig);

        // 2. Отобразим статьи
        articleRenderer.insertArticlesInDOM(articles);
    }
}
