import fetchNews from '../../../lib/fetchNews';
import NewsList from '../../NewsList';
import { categories } from '../../../constants';

interface NewsCategoryPageProps {
  params: {
    category: Category;
  };
}

const NewsCategoryPage = async ({
  params: { category },
}: NewsCategoryPageProps) => {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className='header-title'>{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategoryPage;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}
