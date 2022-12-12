'use client';
import { useRouter } from 'next/navigation';

interface ReadMoreButtonProps {
  article: Article;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ article }) => {
  const router = useRouter();

  const handelClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    const url = `/article?${queryString}`;
    router.push(url);
  };
  return (
    <button
      className='bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500'
      onClick={handelClick}
    >
      Read More
    </button>
  );
};

export default ReadMoreButton;
