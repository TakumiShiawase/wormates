import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBookDetail } from '../../hooks/useBookDetail';
import styles from './BookDetail.module.scss';
import RecommendationsList from '../../components/reccomendation/Reccom';
import { ReactComponent as Download } from '../../assets/icon/download.svg';
import { ReactComponent as Like } from '../../assets/icon/heart.svg';
import { ReactComponent as Dislike } from '../../assets/icon/dislike.svg';
import { ReactComponent as Share } from '../../assets/icon/share.svg';
import { ReactComponent as Views } from '../../assets/icon/views.svg';
import { ReactComponent as Pencel } from '../../assets/icon/pencil.svg';
import { ReactComponent as Page } from '../../assets/icon/page.svg';
import DetailTabs from '../../components/tabs/DetailTabs';
import ChaptersGrid from '../../components/detailContent/Chapters/Chapters';

const BookDetail = () => {
  const { book_id } = useParams();
  const { bookDetail } = useBookDetail(book_id);
  const tabsData = [
    {
      key: 'chapters',
      label: 'Chapters',
      content: <ChaptersGrid bookId={book_id} />,
    },
    {
      key: 'reviews',
      label: 'Reviews',
    },
    {
      key: 'comments',
      label: 'Comments',
    },
  ];

  return (
    <div className={styles.book_detail_page}>
      <div className={styles.book_detail_page_content}>
        <div className={styles.book_detail}>
          <div className={styles.book_detail_genre_views}>
            {bookDetail.genre}
            {bookDetail.subgenre ? ` / ${bookDetail.subgenre}` : ''}
          </div>
          <div className={styles.book_detail_name_views}>
            <span>{bookDetail.series_name}</span>/{bookDetail.name}
          </div>
          <div className={styles.book_detail_coverpage_container}>
            <img className={styles.book_detail_coverpage} src={bookDetail.coverpage} alt="" />
            <div className={styles.book_detail_genre_coverpage_menu}>
              {' '}
              <div className={styles.book_detail_coverpage_menu_vol}>
                Vol. {bookDetail.volume_number}
              </div>
              <button className={styles.book_detail_coverpage_menu_dowload}>
                <Download className={styles.book_detail_coverpage_menu_dowload_icon} />
              </button>
              <button className={styles.book_detail_coverpage_menu_wish}>+ Wish List</button>
              <Link to={`/book/${book_id}/chapter/`}>
                <button className={styles.book_detail_coverpage_menu_read}>Read</button>
              </Link>
              <div className={styles.book_detail_coverpage_menu_vote}>
                <Like className={styles.book_detail_coverpage_menu_like_icon} />{' '}
                {bookDetail.upvotes}
              </div>
              <div className={styles.book_detail_coverpage_menu_vote}>
                <Dislike className={styles.book_detail_coverpage_menu_dislike_icon} />
                {bookDetail.downvotes}
              </div>
              <button className={styles.book_detail_coverpage_menu_share}>
                <Share className={styles.book_detail_coverpage_menu_share_icon} />
                Share
              </button>
            </div>
          </div>
          <div className={styles.book_detail_book_name_container}>
            <div className={styles.book_detail_book_name}> {bookDetail.name}</div>
            <div className={styles.book_detail_book_views_container}>
              <div className={styles.book_detail_book_views}>
                <Views className={styles.book_detail_book_views_icon} />
                {bookDetail.views_count} Viewings
              </div>
              <div
                className={`${
                  bookDetail?.display_price === 'Free' ? `${styles.free}` : `${styles.price}`
                }`}>
                {bookDetail?.display_price}
              </div>
            </div>
          </div>
          <div className={styles.book_detail_author}>
            <div className={styles.book_detail_author_container}>
              <img
                className={styles.book_detail_author_img}
                src={bookDetail.author_profile_img}
                alt=""
              />
              <div className={styles.book_detail_author_name}>{bookDetail.author}</div>
              <div className={styles.book_detail_author_fol}>
                {bookDetail.author_followers_count} Followers
              </div>
            </div>
            <button className={styles.book_detail_author_follow_button}>Follow</button>
          </div>
          <div className={styles.book_detail_subgenre_container}>
            <div className={styles.book_detail_subgenre_item}>{bookDetail.subgenre}</div>
          </div>
          <div className={styles.book_detail_about}>
            <div className={styles.book_detail_author_about_views}>About Book</div>
            <div className={styles.book_detail_author_about_views}>
              <Pencel className={styles.book_detail_author_about_views_icon} />
              Changed: {new Date(bookDetail.last_modified).toLocaleDateString()}
            </div>
            <div className={styles.book_detail_author_about_views}>
              <Page className={styles.book_detail_author_about_views_icon} />
              {bookDetail.total_pages}
            </div>
          </div>

          <div className={styles.book_detail_description}>{bookDetail.description}</div>
        </div>
        <div className={styles.recom}>
          <DetailTabs tabs={tabsData} />
        </div>
      </div>
      <RecommendationsList book_id={book_id} />
    </div>
  );
};

export default BookDetail;
