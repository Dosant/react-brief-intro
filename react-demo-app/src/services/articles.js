const articlesStorage = [
  {
    id: 'rossiya-snimet-zapret-na-import-moldavskih-vin',
    title: 'Россия снимет запрет на импорт молдавских вин',
    author: 'sports',
    createdAt: new Date('2017-02-28T05:24:23.856Z'),
    content: 'Content of post',
    summary: 'Summary of post'
  },
  {
    id:
      'tramp-obvinil-obamu-v-organizatsii-protestov-po-vsey-strane-i-utechek-v-smi',
    title:
      'Трамп обвинил Обаму в организации протестов по всей стране и утечек в СМИ',
    author: 'sports',
    createdAt: new Date('2017-02-27T05:24:23.316Z'),
    content: 'Content of post',
    summary: 'Summary of post'
  },
  {
    id:
      'rosneft-zainteresovalas-dobychey-v-meksikanskom-zalive',
    title: '«Роснефть» заинтересовалась добычей в Мексиканском заливе',
    author: 'meduza',
    createdAt: new Date('2017-02-26T05:24:22.818Z'),
    content: 'Content of post',
    summary: 'Summary of post'
  },
  {
    id:
      'amerikanskiy-senator-predlozhil-nazvat-imenem-nemtsova-ulitsu-pered-posolstvom-rossii',
    title:
      'Американский сенатор предложил назвать именем Немцова улицу перед посольством России',
    author: 'meduza',
    createdAt: new Date('2017-02-25T05:24:21.043Z'),
    content: 'Content of post',
    summary: 'Summary of post'
  },
  {
    id:
      'rossiya-otkazalas-zaderzhat-podozrevaemyh-v-ubiystve-kim-chen-nama',
    title: 'Россия отказалась задержать подозреваемых в убийстве Ким Чен Нама',
    author: 'meduza',
    createdAt: new Date('2017-02-24T05:24:19.591Z'),
    content: 'Content of post',
    summary: 'Summary of post'
  },
  {
    id:
      'spacex-anonsiroval-polet-kosmicheskih-turistov-k-lune-v-2018-godu',
    title: 'SpaceX пообещала отправить космических туристов к Луне в 2018 году',
    author: 'meduza',
    createdAt: new Date('2017-02-22T05:23:51.252Z'),
    content: 'Content of post',
    summary: 'Summary of post'
  },
  {
    id:
      'v-avstrii-vyhodtsa-iz-chechni-prigovorili-k-2-5-godam-tyurmy-za-uchastie-v-boyah-na-storone-ig',
    title:
      'В Австрии выходца из Чечни приговорили к 2,5 годам тюрьмы за участие в боях на стороне ИГ',
    author: 'ria',
    createdAt: new Date('2017-02-21T05:23:47.871Z'),
    content: 'Content of post',
    summary: 'Summary of post'
  },
  {
    id:
      'v-peterburge-zaderzhali-uchastnika-aktsii-lgbt-spetsnaza-proshedshey-23-fevralya',
    title:
      'В Петербурге задержали участника акции «ЛГБТ-спецназа», прошедшей 23 февраля',
    author: 'ria',
    createdAt: new Date('2017-01-18T05:23:45.059Z'),
    content: 'Content of post',
    summary: 'Summary of post'
  },
  {
    id:
      'news/2017/02/27/nikolay-karachentsov-gospitalizirovan-posle-dtp-v-podmoskovie',
    title: 'Николай Караченцов госпитализирован после ДТП в Подмосковье',
    author: 'meduza',
    createdAt: new Date('2017-01-16T05:23:41.378Z'),
    content: 'Content of post',
    summary: 'Summary of post'
  },
  {
    id:
      'id-kommersant-nachnet-vypuskat-pod-nazvaniem-dengi-reklamnoe-prilozhenie',
    title:
      'ИД «Коммерсант» начнет выпускать под названием «Деньги» рекламное приложение',
    author: 'ria',
    createdAt: new Date('2017-01-15T05:23:36.803Z'),
    content: 'Content of post',
    summary: 'Summary of post'
  }
];

function filterArticles(articles, filterConfig) {
  if (filterConfig && filterConfig.author) {
    return articles.filter(function(article) {
      return filterConfig.author === article.author;
    });
  } else {
    return articles;
  }
}

function getArticles(skip, top, filterConfig) {
  skip = skip || 0;
  top = top || 10;
  return filterArticles(articlesStorage, filterConfig).slice(skip, skip + top);
}

function getArticlesCount(filterConfig) {
  return filterArticles(articlesStorage, filterConfig).length;
}

function getArticleById(id) {
  return articlesStorage.find((article) => article.id === id);
}

return {
  getArticles: getArticles,
  getArticlesCount: getArticlesCount,
  getArticleById: getArticleById
};
