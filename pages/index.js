import { useState, useEffect } from 'react';

import MainContainer from '../components/layout/MainContainer';
import ArticleList from '../components/article/ArticleList';

import { getArticles, createArticle } from '../lib/api/article';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [lastId, setId] = useState(6);
  const [pageNo, setPageNo] = useState(0);

  const loadArticles = async () => {
    const newArticles = await getArticles(pageNo);
    if (newArticles.length === 0) {
      return;
    }
    setArticles([...articles, ...newArticles]);
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const addArticle = async () => {
    await createArticle({
      id: lastId,
      title: '새로운거',
      summary: '새로운 내용',
    });
    setId(lastId + 1);
  }

  return (
    <>
      <MainContainer>
        <button onClick={addArticle}>추가</button>
        <button onClick={loadArticles}>추가로드</button>
        <ArticleList articles={articles} />
      </MainContainer>
    </>
  );
}