import Article from './Article';

interface NewsListProps {
  news: NewsResponse;
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <main className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10'>
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
};

export default NewsList;
