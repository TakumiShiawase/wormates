import React from 'react';
import { useBooks } from '../../../../../hooks/useProfileBooks';
import HistoryItem from '../../../../items/book/HistoryItem';
const Library = ({ username }) => {
  const { books } = useBooks(username);

  return (
    <div
      style={{
        marginBottom: '36px',
      }}>
      {books.map((book) => (
        <HistoryItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Library;
