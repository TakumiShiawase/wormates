import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux/profile/profileActions';
import styles from './Profile.module.scss';
import ProfileTabs from './ProfileTabs';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const {
    user,
    profileimg,
    banner_image,
    books_count,
    about,
    series_count,
    followers_count,
    following_count,
    error,
  } = useSelector((state) => state.profile);
  const { accessToken } = useSelector((state) => state.auth); // Извлекаем токен из стейта

  useEffect(() => {
    if (accessToken) {
      dispatch(getProfile()); // Загружаем профиль, если токен есть
    }
  }, [dispatch, accessToken]);

  // Если пользователь не авторизован, перенаправляем на страницу логина

  // Отображаем ошибку, если она есть
  if (error) {
    return <div>Ошибка при загрузке профиля: {error}</div>;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.profile_container}>
        <img className={styles.baner} src={banner_image} alt="banner" />
        <div className={styles.container}>
          <div className={styles.info_container}>
            <img className={styles.avatar} src={profileimg} alt="avatar" />
            <div className={styles.info}>
              <div className={styles.username}>
                {user?.first_name} {user?.last_name}
              </div>
              <div className={styles.user}>@{user?.username}</div>
              <div className={styles.follow_container}>
                <div className={styles.stat_views}>
                  {following_count} <span>Followings</span>
                </div>
                <div className={styles.stat_views}>
                  {followers_count} <span>Followers</span>
                </div>
              </div>
              <div className={styles.books_info}>
                <div className={styles.stat_views}>{books_count} Books</div>
                <div className={styles.stat_views}>{series_count} Series</div>
              </div>
            </div>
          </div>
          <div className={styles.about_container}>
            <div className={styles.about_view}>About</div>
            <div className={styles.about}>{about}</div>
          </div>
        </div>
      </div>
      <ProfileTabs />
    </div>
  );
};

export default ProfilePage;
