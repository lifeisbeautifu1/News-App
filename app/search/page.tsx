import fetchNews from '../../lib/fetchNews';
import NewsList from '../NewsList';

interface SearchPageProps {
  searchParams?: { term: string };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const news: NewsResponse = await fetchNews(
    'general',
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className='header-title'>Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
