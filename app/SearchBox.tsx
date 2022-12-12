'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm) return;
    router.push(`search?term=${searchTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-6xl mx-auto flex justify-between items-center px-5'
    >
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search keywords...'
        className='w-full h-14 rounded-sm placeholder:gray-500 text-gray-500 outline-none
        flex-1 bg-transparent dark:text-orange-400'
      />
      <button
        type='submit'
        disabled={!searchTerm}
        className='
      text-orange-400 disabled:text-gray-400'
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
