import React from 'react';
import RecentChangeList from '@components/RecentChangeList';
import { MdArrowCircleRight } from 'react-icons/md';

const SearchResultPage = () => {
  const keyword = '테스트 검색어';
  const dummy: Array<{ id: number; title: string; content: string }> = [
    {
      id: 1,
      title: '부산대학교',
      content: '가나다라마바사아자차카타파하',
    },
    {
      id: 2,
      title: '테스트 페이지 제목',
      content: '테스트 페이지 내용',
    },
  ];

  return (
    <div className='flex p-14 gap-20'>
      <section className='result w-9/12'>
        <span className='text-3xl font-bold'>{keyword}</span>
        <div className='flex items-center justify-between bg-gray-200 rounded-lg p-4 my-8'>
          <span className='text-sm'>찾는 페이지가 없다면?</span>
          <div className='flex items-center gap-1 font-bold'>
            <span className='text-sm'>새 페이지 생성하기</span>
            <MdArrowCircleRight className='w-5 h-5' />
          </div>
        </div>
        {dummy.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-96'>
            <span className='text-xl font-bold mb-4'>검색 결과가 없습니다.</span>
            <span>다른 검색어로 검색하거나 직접 페이지를 만들어보세요.</span>
          </div>
        ) : (
          dummy.map((page) => (
            <div key={page.id} className='px-2 py-8 border-b border-gray-200'>
              <h2 className='text-lg font-bold mb-1'>{page.title}</h2>
              <p className='text-sm text-gray-500'>{page.content}</p>
            </div>
          ))
        )}
      </section>
      <aside>
        <RecentChangeList />
      </aside>
    </div>
  );
};

export default SearchResultPage;
