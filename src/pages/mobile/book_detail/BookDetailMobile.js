import React from 'react';
import styles from './BookDetailMobile.module.scss';
import { useParams } from 'react-router-dom';
import BookInfo from './components/detail_book_img/BookInfo';
import BookAuthorInfo from './components/book_author_info/BookAuthorInfo';
import BookChapterInfo from './components/book_chapter_info/BookChapterInfo';
import { useBookDetail } from '../../../hooks/useBookDetail';

const BookDetailMobile = () => {
  const { book_id } = useParams();
  const { bookDetail } = useBookDetail(book_id);
  return (
    <div className={styles.book_detail}>
      <BookInfo
        src={bookDetail.coverpage}
        name={bookDetail.name}
        volume={bookDetail.volume_number}
        like={bookDetail.rating}
        dislike={bookDetail.user_vote}
        views={bookDetail.views_count}
        book_id={book_id}
      />
      <BookAuthorInfo
        src={bookDetail.author_profile_img}
        author_name={bookDetail.author}
        followers={bookDetail.author_followers_count}
      />
      <BookChapterInfo
        genre={bookDetail.genre}
        subgenres={bookDetail.subgenres}
        page={bookDetail.total_pages}
        date={bookDetail.last_modified}
        text={bookDetail.description}
      />
    </div>
  );
};

export default BookDetailMobile;
