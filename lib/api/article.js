
const mockArticles = [
  {
    id: 1,
    title: '안녕',
    summary: '글작성 글작성',
  },
  {
    id: 2,
    title: '안녕',
    summary: '글작성 글작성',
  },
  {
    id: 3,
    title: '안녕',  
    summary: '글작성 글작성',
  },
  {
    id: 4,
    title: '안녕',
    summary: '글작성 글작성',
  },
  {
    id: 5,
    title: '안녕',
    summary: '글작성 글작성',
  },
];

const page_size = 5;

export async function getArticles(page_no) {
  return mockArticles.slice(page_no * page_size, page_no + (page_no + 1) * page_size);
}

export async function createArticle(article) {
  mockArticles.push(article);
}