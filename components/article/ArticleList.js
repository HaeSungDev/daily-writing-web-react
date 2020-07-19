import ArticleItem from './ArticleItem';

export default function ArticleList(props) {
  const ArticleItems = props.articles.map((article) => {
    return (
      <ArticleItem key={article.id} title={article.title} summary={article.summary} />
    );
  });

  return (
    <div>
      {ArticleItems}
    </div>
  );
}
