import React from 'react';
import Columns from '../../../../components/studio_books/Columns';
import useStudioBooks from '../../../../hooks/useStudioBooks';

const StudioBook = () => {
  const { books, bookDelete } = useStudioBooks();
  return (
    <div>
      <div>
        Studio <span>/Books</span>
      </div>
      <Columns books={books} onDelete={bookDelete} />
    </div>
  );
};

export default StudioBook;
